"use client";

import { FaHotel } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import Heading from "../Heading";
import Modal from "./Modal";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  checkType: string;
  setIsType: (value: string) => void;
};

function ChooseModel({ isOpen, onClose, checkType, setIsType }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col gap-8">
        <Heading title="Pick a category" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF5A5F]">
          <div
            className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer items-center ${
              checkType === "destinations" && "border-black "
            }`}
            onClick={() => setIsType("destinations")}
          >
            <MdTravelExplore size={30} />
            <div className="font-semibold">Destinations</div>
          </div>
          <div
            className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer items-center ${
              checkType === "hotel" && "border-black "
            }`}
            onClick={() => setIsType("hotel")}
          >
            <FaHotel size={30} />
            <div className="font-semibold">Hotels</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ChooseModel;
