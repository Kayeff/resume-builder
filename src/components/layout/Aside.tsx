import { twMerge } from "tailwind-merge";
import { stepsConfig, useStep, type stepNumber } from "../../hooks/useStep";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function Aside() {
  const { step: currentStep, completedSteps, jumpToStep, max } = useStep();

  return (
    <aside className="w-full border-r border-foreground/20 p-5 flex flex-col gap-4 bg-background z-20">
      <ul className="flex flex-col gap-2">
        {Object.entries(stepsConfig).map((stepItem) => {
          const [step, { key }] = stepItem;

          return (
            <li
              key={key}
              className="cursor-pointer"
              onClick={() => jumpToStep(+step as stepNumber)}
            >
              {/* Circle describing step */}
              <span className="w-full flex items-center gap-2">
                <span className="relative">
                  <span
                    className={twMerge(
                      "size-7 rounded-full flex items-center justify-center font-medium duration-200 bg-background z-20 relative",
                      currentStep !== +step &&
                        "border border-foreground/50 bg-background text-foreground",
                      currentStep === +step && "bg-foreground text-background",
                      completedSteps.has(+step) &&
                        "bg-foreground text-background",
                    )}
                  >
                    {currentStep === +step ? (
                      step
                    ) : completedSteps.has(+step) ? (
                      <Check size={15} />
                    ) : (
                      step
                    )}
                  </span>

                  {/* Progress line */}
                  {+step !== max && (
                    <motion.span
                      initial={{ height: 0 }}
                      animate={{ height: "24px" }}
                      className={twMerge(
                        "absolute w-0.5 left-1/2 -translate-x-1/2 top-1/2 bg-foreground/20 z-10 duration-200",
                        completedSteps.has(+step) && "bg-foreground",
                      )}
                    />
                  )}
                </span>

                <span className="text-xl tracking-tight font-medium">
                  {key}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
