"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

type Props = {
  onChange: (value: string) => void;
  value: string;
};

function ImageUpload({ onChange, value }: Props) {
  const handleCallback = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onchange]
  );

  return (
    <CldUploadWidget
      onUpload={handleCallback}
      // uploadPreset="roxbpdrq"
      uploadPreset="in5gndv7"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open, isLoading }) => {
        if (isLoading)
          return (
            <div className="flex items-center justify-center w-full h-20">
              <p className="text-center">
                <AiOutlineLoading3Quarters
                  className=" animate-spin"
                  size={50}
                />
              </p>
            </div>
          );
        return (
          <div
            onClick={() => open?.()}
            className="relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full ">
                <Image
                  alt="uploade"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}

export default ImageUpload;
