/* eslint-disable @next/next/no-img-element */
"use client";

import { SafeUser } from "@/types";
import { useCallback, useState } from "react";

import Link from "next/link";
import UserMenu from "./UserMenu";
import AuthFormModel from "./model/AuthFormModel";
import ChooseModel from "./model/ChooseModel";
import DestinationModel from "./model/DestinationModel";
import RentModal from "./model/RentModal";

type Props = {
  currentUser?: SafeUser | null;
};

function Navbar({ currentUser }: Props) {
  const [checkType, setIsType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [rentIsOpen, setRentIsOpen] = useState(false);
  const [chooseMode, setChooseModel] = useState(false);

  const onClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else return;
  };

  const onCloseRent = () => {
    if (rentIsOpen) {
      setRentIsOpen(false);
    } else return;
  };

  const handleModel = useCallback((value: string) => {
    if (!value) return;

    setIsType(value);
    setChooseModel(false);
    setRentIsOpen(true);
  }, []);

  return (
    <>
      <AuthFormModel isOpen={isOpen} onClose={onClose} />
      <ChooseModel
        checkType={checkType}
        isOpen={chooseMode}
        onClose={() => setChooseModel(false)}
        setIsType={handleModel}
      />
      {checkType === "destinations" ? (
        <DestinationModel isOpen={rentIsOpen} onClose={onCloseRent} />
      ) : (
        checkType === "hotel" && (
          <RentModal isOpen={rentIsOpen} onClose={onCloseRent} />
        )
      )}
      <div className="px-40 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <img
                src="https://p7.hiclipart.com/preview/893/122/385/travel-agent-trip-planner-logo-travel.jpg"
                alt=""
                className="rounded-md h-14"
              />
            </Link>
          </div>
          <div className="z-50 flex items-center space-x-12">
            <Link
              href={"/"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Home
            </Link>
            <Link
              href={"/destinations"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Destinations
            </Link>
            <Link
              href={"/hotel"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Hotels
            </Link>

            {!currentUser && (
              <p
                onClick={() => setIsOpen(true)}
                className="font-semibold uppercase cursor-pointer hover:underline"
              >
                Become a Hoister
              </p>
            )}
            {currentUser ? (
              <UserMenu
                setRentIsOpen={() => setChooseModel(true)}
                currentUser={currentUser}
              />
            ) : (
              <p
                onClick={() => setIsOpen(true)}
                className="border px-4 py-1.5 rounded-md border-black font-semibold cursor-pointer"
              >
                Sign up
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
