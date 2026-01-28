import { create } from "zustand";

type State = {
  step: stepNumber;
  completedSteps: Set<number>;
  readonly max: 7;
};

type Action = {
  nextStep: () => void;
  prevStep: () => void;
  jumpToStep: (step: stepNumber) => void;
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

  jumpToStep: (step) => {
    const isCompleted = get().completedSteps;

    if (isCompleted.has(step)) {
      set({ step });
    }
  },
}));

export type stepNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type stepDetailT = {
  key: string;
  heading: string;
  subPara: string;
  validationFields?: string[];
};

export const stepsConfig: Record<stepNumber, stepDetailT> = {
  1: {
    key: "Heading",
    heading: "What’s the best way for employers to contact you?",
    subPara: "Consider including an email address and phone number.",
    validationFields: [
      "fullname",
      "title",
      "city",
      "country",
      "phone",
      "email",
      "linkedin",
      "website",
    ],
  },
  2: {
    key: "Professional Summary",
    heading: "Tell us a bit about your career so far",
    subPara:
      "Highlight your experience, focus areas, and what defines your professional journey.",
    validationFields: ["summary"],
  },
  3: {
    key: "Work Experience",
    heading: "Where have you worked previously?",
    subPara:
      "List your roles, companies, and key contributions in each position.",
    validationFields: ["experience"],
  },
  4: {
    key: "Skills",
    heading: "What skills do you bring to the table?",
    subPara:
      "Include both technical and soft skills that are relevant to the role.",
    validationFields: ["education"],
  },
  5: {
    key: "Education",
    heading: "What’s your educational background?",
    subPara:
      "Mention your highest qualification, institution, and year of completion.",
    validationFields: ["skills"],
  },
  6: {
    key: "Projects",
    heading: "What projects have you worked on?",
    subPara:
      "Showcase projects that demonstrate your skills and real-world impact.",
    validationFields: ["projects"],
  },
  7: {
    key: "Finalize",
    heading: "Finalize",
    subPara: "Finalize",
  },
} as const;
