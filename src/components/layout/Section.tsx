import { stepsConfig, useStep, type stepNumber } from "../../hooks/useStep";
import { useFormContext } from "react-hook-form";
import { stepFields } from "../../lib/stepFields";
import StepOne from "../multi-step/steps/StepOne";
import StepTwo from "../multi-step/steps/StepTwo";
import StepThree from "../multi-step/steps/StepThree";
import StepFour from "../multi-step/steps/StepFour";
import StepFive from "../multi-step/steps/StepFive";
import StepSix from "../multi-step/steps/StepSix";
import StepSeven from "../multi-step/steps/StepSeven";
import type { FormValues } from "../../schema/schema";
import type { ComponentType } from "react";

const StepComponentMap: Record<stepNumber, ComponentType> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
  5: StepFive,
  6: StepSix,
  7: StepSeven,
};

export default function Section() {
  const { max, step, nextStep, prevStep } = useStep(); // Extracting data from Zustand.
  const { heading, subPara } = stepsConfig[step]; // Extracting heading and para using step
  const StepComponent = StepComponentMap[step]; // Component Map using step
  
  const { trigger } = useFormContext<FormValues>();

  async function handleNext() {
    const fields = stepFields[step];
    const isValid = await trigger(fields, { shouldFocus: true });
    if (!isValid) return;

    nextStep();
  }

  return (
    <div className="w-full flex flex-col gap-10 p-10 relative">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight">{heading}</h1>
        <p className="text-lg tracking-tight text-foreground/80">{subPara}</p>
      </header>

      <div className="w-full grid grid-cols-[70%_30%]">
        <div>{StepComponent && <StepComponent key={step} />}</div>
        <div></div>
      </div>

      <div className="w-full flex items-center justify-end gap-4 fixed bottom-0 right-0 p-10 border-t border-foreground/20 font-medium">
        <button
          disabled={step === 1}
          type="button"
          onClick={prevStep}
          className="px-6 py-2 cursor-pointer bg-background text-foreground border-foreground/20 border disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous Step
        </button>

        {step === max ? (
          <button
            type="submit"
            className="px-6 py-2 cursor-pointer bg-foreground text-background"
          >
            Submit Details
          </button>
        ) : (
          <button
            onClick={handleNext}
            type="button"
            className="px-6 py-2 cursor-pointer bg-foreground text-background"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}
