import type { ReactNode } from "react";
import {
  stepHeading,
  stepSubPara,
  useStep,
  type stepNumber,
} from "../../hooks/useStep";

type SectionProps = {
  step: stepNumber;
  children: ReactNode;
};

export default function Section({ children, step }: SectionProps) {
  const { max, step: currentStep, nextStep, prevStep } = useStep();
  console.log(currentStep);

  return (
    <div className="w-full h-screen flex flex-col gap-10 p-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          {stepHeading[step]}
        </h1>
        <p className="text-lg tracking-tight text-foreground/80">
          {stepSubPara[step]}
        </p>
      </header>
      <div className="w-full grid grid-cols-[70%_30%]">
        <div>{children}</div>
        <div></div>
      </div>
      <div className="w-full flex items-center justify-end gap-4">
        <button
          disabled={currentStep === 1}
          type="button"
          onClick={prevStep}
          className="px-6 py-2 cursor-pointer bg-background text-foreground border-foreground/20 border disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous Step
        </button>
        <button
          onClick={nextStep}
          type={currentStep === max ? "submit" : "button"}
          className="px-6 py-2 cursor-pointer bg-foreground text-background"
        >
          {currentStep === max ? "Submit" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
