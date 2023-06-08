/* eslint-disable @next/next/no-img-element */
"use client";

import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import UserMenu from "./UserMenu";
import AuthFormModel from "./model/AuthFormModel";
import ChooseModel from "./model/ChooseModel";
import DestinationModel from "./model/DestinationModel";
import RentModal from "./model/RentModal";

type Props = {
  currentUser?: SafeUser | null;
};

function Navbar({ currentUser }: Props) {
  const router = useRouter();
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
      <div className="px-48 py-6">
        <div className="flex items-center justify-between">
          <div>
            {/*    <img
              src="https://media.beliefnet.com/~/media/images/components/mini-headers/entertainment/travel/mini-header-travel-logo.png?as=0"
              alt=""
              className="w-10"
            /> */}
          </div>
          <div className="flex items-center space-x-12 z-50">
            <p
              onClick={() => router.push("/")}
              className="font-semibold cursor-pointer hover:underline"
            >
              Home
            </p>
            <p
              onClick={() => router.push("/destinations")}
              className="font-semibold cursor-pointer hover:underline"
            >
              Destinations
            </p>
            <p
              onClick={() => router.push("/hotel")}
              className="font-semibold cursor-pointer hover:underline"
            >
              Hotels
            </p>
            <p
              onClick={() => router.push("/flight")}
              className="font-semibold cursor-pointer hover:underline"
            >
              Flights
            </p>
            <p
              onClick={() => router.push("/car")}
              className="font-semibold cursor-pointer hover:underline"
            >
              Cars
            </p>
            {!currentUser && (
              <p
                onClick={() => setIsOpen(true)}
                className="font-semibold cursor-pointer hover:underline"
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
