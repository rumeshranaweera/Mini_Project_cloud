/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="w-5/6 py-20 mx-auto">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-start gap-10 basis-1/3">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logo.png"
              width={64}
              height={64}
              alt="logo"
              className="h-16 rounded-md"
            />
            <h1 className="text-sm font-bold text-secondary-100">
              <span className="text-primary-500"></span>Online Booking <br />
              Reservation <br />
              App
            </h1>
          </div>
          <p>Top 3 in the World</p>
          <div className="flex gap-2">
            <AiFillFacebook size={25} />
            <AiFillInstagram size={25} />
            <AiFillTwitterCircle size={25} />
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 mt-4 md:gap-0 md:mt-0 basis-2/3">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Resources</h1>
            <p className="text-sm">Download</p>
            <p className="text-sm">Help Center</p>
            <p className="text-sm">Guide Book</p>
            <p className="text-sm">App Directory</p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Travelers</h1>
            <p className="text-sm">Advantages</p>
            <p className="text-sm">Offers</p>
            <p className="text-sm">Customer Stories</p>
            <p className="text-sm">Specials</p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Company</h1>
            <p className="text-sm">Traveling</p>
            <p className="text-sm">Offices</p>
            <p className="text-sm">Guide Book</p>
            <p className="text-sm">Information</p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Our App</h1>
            <p className="text-sm">App Store</p>
            <p className="text-sm">Google Play Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
