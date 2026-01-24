import type { ComponentType } from "react";
import { useStep, type stepNumber } from "../../hooks/useStep";
import Aside from "../layout/Aside";
import Section from "../layout/Section";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { FormProvider, useForm } from "react-hook-form";

const STEPS: Record<stepNumber, ComponentType> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
  5: StepFive,
  6: StepOne,
  7: StepOne,
};

export default function MultiStep() {
  const { step, nextStep, max } = useStep();
  const StepComponent = STEPS[step];

  const methods = useForm({ mode: "onTouched", shouldUnregister: false });

  const onSubmit = async () => {
    if (step < max) {
      nextStep();
      return;
    }

    console.log("FINAL DATA", methods.getValues());
  };

  return (
    <main className="w-full min-h-screen grid grid-cols-[20%_80%]">
      <Aside />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {StepComponent && (
            <Section step={step}>
              <StepComponent />
            </Section>
          )}
        </form>
      </FormProvider>
    </main>
  );
}
