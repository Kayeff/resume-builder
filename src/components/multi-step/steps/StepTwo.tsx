import { useFormContext, useFormState, useWatch } from "react-hook-form";
import type { FormValues } from "../../../schema/schema";
import ErrorLine from "../../common/ErrorLine";
import WordsCount from "../../common/WordsCount";

const totalwords = 80;

export default function StepTwo() {
  const { register, control } = useFormContext<FormValues>();
  const { errors } = useFormState({ control });

  const para = useWatch<FormValues, "summary">({
    control,
    name: "summary",
    defaultValue: "",
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <textarea
          {...register("summary")}
          className="w-full border border-foreground/20 h-40 px-3 py-2 focus:outline-foreground focus:outline-1"
          placeholder="Write your summary here"
        />
        <div className="w-full flex items-center justify-between">
          {errors.summary?.message && (
            <ErrorLine error={errors.summary?.message} />
          )}
          <WordsCount totalwords={totalwords} para={para} />
        </div>
      </div>
    </div>
  );
}
