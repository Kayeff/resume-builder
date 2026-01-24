import { twMerge } from "tailwind-merge";
import { stepRecord, useStep, type stepNumber } from "../../hooks/useStep";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function Aside() {
  const { step: currentStep, completedSteps, jumpToStep } = useStep();

  return (
    <aside className="border-r border-foreground/20 p-5 flex flex-col gap-4">
      <ul className="flex flex-col gap-2">
        {Object.entries(stepRecord).map((step) => (
          <li
            onClick={() => jumpToStep(+step[0] as stepNumber)}
            key={step[1]}
            className="cursor-pointer relative"
          >
            <span className="w-full flex items-center gap-2 z-20 relative">
              <span
                className={twMerge(
                  "size-6 rounded-full flex items-center justify-center font-medium",
                  currentStep !== +step[0] &&
                    "border border-foreground/50 bg-background text-foreground",
                  currentStep === +step[0] && "bg-foreground text-background",
                  completedSteps.has(+step[0]) &&
                    "bg-foreground text-background",
                )}
              >
                {completedSteps.has(+step[0]) ? <Check size={15} /> : step[0]}
              </span>
              <span className="text-xl tracking-tight font-medium">
                {step[1]}
              </span>
            </span>
            {+step[0] !== 6 && (
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: "24px" }}
                className={twMerge(
                  "absolute w-0.5 left-2.75 top-1/2 bg-foreground/20 z-10 duration-200",
                  completedSteps.has(+step[0]) && "bg-foreground",
                )}
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
