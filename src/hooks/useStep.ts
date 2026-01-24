import { create } from "zustand";

export type stepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type State = {
  step: stepNumber;
  completedSteps: Set<number>;
  readonly max: 7;
};

type Action = {
  nextStep: () => void;
  prevStep: () => void;
  isStepCompleted: (step: stepNumber) => void;
  jumpToStep: (step: stepNumber) => void;
};

export const stepRecord = {
  1: "Heading",
  2: "Professional Summary",
  3: "Work Experience",
  4: "Skills",
  5: "Education",
  6: "Projects",
  7: "Finalize",
};

export const stepHeading = {
  1: "What’s the best way for employers to contact you?",
  2: "Tell us a bit about your career so far",
  3: "Where have you worked previously?",
  4: "What skills do you bring to the table?",
  5: "What’s your educational background?",
  6: "What projects have you worked on?",
  7: "Finalize",
};

export const stepSubPara = {
  1: "Consider including an email address and phone number.",
  2: "Highlight your experience, focus areas, and what defines your professional journey.",
  3: "List your roles, companies, and key contributions in each position.",
  4: "Include both technical and soft skills that are relevant to the role.",
  5: "Mention your highest qualification, institution, and year of completion.",
  6: "Showcase projects that demonstrate your skills and real-world impact.",
  7: "Finalize",
};

export const useStep = create<State & Action>((set, get) => ({
  step: 1,
  completedSteps: new Set(),
  max: 7,
  nextStep: () => {
    const currentStep = get().step;

    set((state) => ({
      step: (state.step + 1) as stepNumber,
      completedSteps: new Set(state.completedSteps).add(currentStep),
    }));
  },

  prevStep: () => {
    const { step } = get();
    if (step === 1) return;
    set((state) => ({ step: (state.step - 1) as stepNumber }));
  },

  isStepCompleted: (step) => {
    get().completedSteps.has(step);
  },

  jumpToStep: (step) => {
    const isCompleted = get().completedSteps;

    if (isCompleted.has(step)) {
      set({ step });
    }
  },
}));
