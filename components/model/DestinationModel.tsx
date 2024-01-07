/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../Button";
import Heading from "../Heading";
import Counter from "../input/Counter";
import CountrySelect from "../input/CountrySelect";
import ImageUpload from "../input/ImageUpload";
import SecondInput from "../input/SecondInput";
import Modal from "./Modal";
import ModalBodyContent from "./ModalBodyContent";

enum STEPS {
  LOCATION = 0,
  DESCRIPTION = 1,
  IMAGES = 2,
  INFO = 3,
  PRICE = 4,
}

type Props = {
  isOpen?: boolean;
  onClose: () => void;
};

function DestinationModel({ isOpen, onClose }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.LOCATION);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      location: null,
      guestCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const location = watch("location");
  const guestCount = watch("guestCount");
  const imageSrc = watch("imageSrc");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("../input/Map"), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/destinations", data)
      .then(() => {
        toast.success("Listing Created!");
        reset();
        setStep(STEPS.LOCATION);
        onClose();
        router.push("/destinations");
      })
      .catch(() => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <div className="z-50">
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
      </div>
      <div className="z-0">
        {/* @ts-ignore */}
        <Map center={location?.latlng} />
      </div>
      <div className="flex justify-center gap-4">
        <Button outline label="back" onClick={onBack} />
        <Button isColor label="Next" onClick={onNext} />
      </div>
    </div>
  );

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          title="Guests"
          subtitle="How many guest do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <div className="flex justify-center gap-4">
          <Button outline label="back" onClick={onBack} />
          <Button isColor label="Next" onClick={onNext} />
        </div>
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <SecondInput
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <SecondInput
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div className="flex justify-center gap-4">
          <Button outline label="back" onClick={onBack} />
          <Button isColor label="Next" onClick={onNext} />
        </div>
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          onChange={(value) => setCustomValue("imageSrc", value)}
          value={imageSrc}
        />
        <div className="flex justify-center gap-4">
          <Button outline label="back" onClick={onBack} />
          <Button isColor label="Next" onClick={onNext} />
        </div>
      </div>
    );
  }

  if (step == STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <SecondInput
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div className="flex justify-center gap-4">
          <Button outline label="back" onClick={onBack} />
          <Button isColor label="Create" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    );
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalBodyContent title="Become a Hoister" body={bodyContent} />
    </Modal>
  );
}

export default DestinationModel;
