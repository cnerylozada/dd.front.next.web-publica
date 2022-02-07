import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  DDText,
  DDInput,
  DDTextarea,
  DDButton,
} from "@cnerylozada/dd.front.react.wp.library";
import { sendMessage } from "@/services";
import { contactForm, languages, validationInput } from "@/utils";

export const ContactForm = ({
  mainSection,
  lng,
  className,
}: {
  mainSection: any;
  lng: string;
  className: string;
}) => {
  const [isBeingSend, setIsBeingSend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data: any) => {
    const { nameAndLastname: name, ..._ } = data;
    setIsBeingSend(true);
    await sendMessage({ name, ..._ });
    setIsBeingSend(false);
  };
  return (
    <div className={`px-7 lg:px-45 py-12 lg:py-38 ${className}`}>
      <DDText size="headline" weight="bold" className="mb-12 lg:mb-10">
        {mainSection[`title_${lng}`]}
      </DDText>
      <DDText
        size="subHeadline"
        weight="light"
        className="mb-12 lg:mb-20 text-text"
      >
        {mainSection[`description_${lng}`]}
      </DDText>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto lg:w-4/5">
        <DDInput
          label={contactForm.nameAndLastname[`label_${lng}`]}
          placeholder={contactForm.nameAndLastname[`placeholder_${lng}`]}
          register={register("nameAndLastname", {
            required: {
              value: true,
              message: validationInput.nameAndLastname[`required_${lng}`],
            },
          })}
          errorMsg={errors.nameAndLastname?.message}
          className="mb-7 lg:mb-9"
        />
        <DDInput
          label={contactForm.email[`label_${lng}`]}
          placeholder={contactForm.email[`placeholder_${lng}`]}
          register={register("email", {
            required: {
              value: true,
              message: validationInput.email[`required_${lng}`],
            },
          })}
          errorMsg={errors.email?.message}
          className="mb-7 lg:mb-9"
        />
        <DDInput
          label={contactForm.company[`label_${lng}`]}
          placeholder={contactForm.company[`placeholder_${lng}`]}
          register={register("company", {
            required: {
              value: true,
              message: validationInput.company[`required_${lng}`],
            },
          })}
          errorMsg={errors.company?.message}
          className="mb-7 lg:mb-9"
        />
        <DDTextarea
          label={contactForm.message[`label_${lng}`]}
          placeholder={contactForm.message[`placeholder_${lng}`]}
          register={register("message", {
            required: {
              value: true,
              message: validationInput.message[`required_${lng}`],
            },
            maxLength: {
              value: 300,
              message: validationInput.message[`max_${lng}`],
            },
          })}
          maxChars={300}
          errorMsg={errors.message?.message}
          className="mb-12 lg:mb-20"
        />

        <DDButton
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || isBeingSend}
          className="block mx-auto"
        >
          {lng === languages.spanish ? "Enviar Message" : "Send Message"}
        </DDButton>
      </form>
    </div>
  );
};
