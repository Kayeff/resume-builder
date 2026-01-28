import type { FormValues } from "../schema/schema";

export const stepFields: Record<number, (keyof FormValues)[]> = {
  1: [
    "fullname",
    "title",
    "city",
    "country",
    "phone",
    "email",
    "linkedin",
    "website",
  ],
  2: ["summary"],
  3: ["experience"],
  4: ["education"],
  5: ["skills"],
  6: ["projects"],
};
