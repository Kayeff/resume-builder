import { useFormContext, useFormState } from "react-hook-form";
import type { FormValues } from "../../../schema/schema";
import ErrorLine from "../../common/ErrorLine";

export default function StepOne() {
  const { register, control } = useFormContext<FormValues>();
  const { errors } = useFormState({ control });

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Fullname */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">Full Name *</label>
        <input
          type="text"
          placeholder="Kaif Saiyed"
          {...register("fullname")}
          className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
        />
        {errors.fullname?.message && (
          <ErrorLine error={errors.fullname?.message} />
        )}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          placeholder="Front end developer"
          {...register("title")}
          className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
        />
        {errors.title?.message && <ErrorLine error={errors.title?.message} />}
      </div>

      {/* City */}
      <div className="flex flex-col gap-2">
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Surat"
          {...register("city")}
          className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
        />
        {errors.city?.message && <ErrorLine error={errors.city?.message} />}
      </div>

      {/* Country, Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="India"
            {...register("country")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
          {errors.country?.message && (
            <ErrorLine error={errors.country?.message} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="4567891011"
            pattern="[0-9]{10}"
            maxLength={10}
            {...register("phone")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
          {errors.phone?.message && <ErrorLine error={errors.phone?.message} />}
        </div>
      </div>

      {/* Email, Linkedin, Website*/}
      <div className="grid grid-cols-3 col-span-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            placeholder="someone@example.com"
            {...register("email")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
          {errors.email?.message && <ErrorLine error={errors.email?.message} />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            placeholder="linkedin.com/in/saiyedkaif"
            {...register("linkedin")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
          {errors.linkedin?.message && (
            <ErrorLine error={errors.linkedin?.message} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Website</label>
          <input
            type="text"
            placeholder="https://github.com/Kayeff"
            {...register("website")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
          {errors.website?.message && (
            <ErrorLine error={errors.website?.message} />
          )}
        </div>
      </div>
    </div>
  );
}
