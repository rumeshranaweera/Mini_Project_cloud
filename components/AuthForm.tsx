"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import AuthButton from "./AuthButton";
import AuthSocialButton from "./AuthSocialButton";
import Input from "./input/Input";

type Props = {
  onClose: () => void;
};

type Variant = "LOGIN" | "REGISTER";

function AuthForm({ onClose }: Props) {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Somethings Went Wrong"))
        .finally(() => {
          setIsLoading(false);
          onClose();
        });
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Logged In");
            onClose();
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged In");
        }
      })
      .finally(() => {
        setIsLoading(false);
        onClose();
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow-xl sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Input
                label="Name"
                errors={errors}
                id="name"
                type="text"
                register={register}
                disabled={isLoading}
              />
            </motion.div>
          )}
          <Input
            label="Email"
            errors={errors}
            id="email"
            type="email"
            register={register}
            disabled={isLoading}
          />
          <Input
            label="Password"
            errors={errors}
            id="password"
            type="password"
            register={register}
            disabled={isLoading}
          />
          <div>
            <AuthButton
              disabled={isLoading}
              fullWidth
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </AuthButton>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("google")}
            />
            <AuthSocialButton
              icon={AiFillGithub}
              onClick={() => socialAction("github")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500 items-center">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
