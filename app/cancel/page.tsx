import Link from "next/link";
import { MdCancel } from "react-icons/md";

const Cancel = () => {
  return (
    <div className="container min-h-[50vh]">
      <div className="">
        <div className="p-6 bg-white md:mx-auto">
          <MdCancel className="w-16 h-16 mx-auto text-red-600" />
          <div className="text-center">
            <h3 className="text-base font-semibold text-center text-gray-900 md:text-2xl">
              Payment canceled
            </h3>

            <div className="h-full mt-10 text-center ">
              <Link
                href="/reservations"
                className="px-12 py-3 uppercase font-semibold text-white bg-[#0000FF] inline-block hover:bg-[#0000FF]/80 rounded-lg"
              >
                go back to reservations
              </Link>
              <br />
              <Link
                href="/"
                className="px-12 py-3 font-semibold mt-2 inline-block bg-[#0000FF]/5 text-[#0000FF] hover:bg-[#0000FF]/10 rounded-lg"
              >
                HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
