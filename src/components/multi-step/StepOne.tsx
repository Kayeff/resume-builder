import { useFormContext } from "react-hook-form";

export default function StepOne() {
  const { register } = useFormContext();

  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {/* Fullname */}
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">Full Name *</label>
        <input
          type="text"
          placeholder="Kaif Saiyed"
          {...register("fullname", { required: "Full Name is required" })}
          className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          placeholder="Front end developer"
          {...register("title", { required: "Title is required" })}
          className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
        />
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
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Phone</label>
          <input
            type="tel"
            placeholder="+91 4567891011"
            maxLength={10}
            {...register("phone")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
        </div>
      </div>

      {/* Email, Linkedin, Website*/}
      <div className="grid grid-cols-3 col-span-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            placeholder="someone@example.com"
            {...register("email", { required: "Email is required" })}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            placeholder="linkedin.com/in/saiyedkaif"
            {...register("linkedin")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Website</label>
          <input
            type="text"
            placeholder="https://github.com/Kayeff"
            {...register("website")}
            className="border border-foreground/20 px-3 py-2 focus:outline-foreground focus:outline-1"
          />
        </div>
      </div>
    </div>
  );
}
