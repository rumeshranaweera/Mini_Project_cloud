"use client";

import { SafeUser } from "@/types";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import Link from "next/link";

type Props = {
  setRentIsOpen?: () => void;
  currentUser?: SafeUser | null;
};

function UserMenu({ setRentIsOpen, currentUser }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden px-4 py-3 font-semibold uppercase transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
          onClick={setRentIsOpen}
        >
          Become a Hoister
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {currentUser ? (
              <Avatar src={currentUser?.image!} userName={currentUser?.name} />
            ) : (
              <Image
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src="/assets/avatar.png"
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-primary-100 overflow-hidden right-0 top-12 text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <Link href={"/trips"}>
                  <MenuItem onClick={() => {}} label="My Trips" />
                </Link>
                <Link href={"/favorites"}>
                  <MenuItem onClick={() => {}} label="My Favorites" />
                </Link>
                <Link href={"/reservations"}>
                  <MenuItem onClick={() => {}} label="My Reservations" />
                </Link>
                <Link href={"/properties"}>
                  <MenuItem onClick={() => []} label="My Properties" />
                </Link>
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={() => {}} label="Login" />
                <MenuItem onClick={() => {}} label="Sign up" />
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default UserMenu;
