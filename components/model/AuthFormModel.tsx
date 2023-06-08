"use client";

import AuthForm from "../AuthForm";
import ClientOnly from "../ClientOnly";
import Modal from "./Modal";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

function AuthFormModel({ isOpen, onClose }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg-px-8 bg-gray-10">
        <ClientOnly>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your Account
            </h2>
          </div>
        </ClientOnly>
        <AuthForm onClose={onClose} />
      </div>
    </Modal>
  );
}

export default AuthFormModel;
