import { z } from "zod";

export const headerSchema = z.object({
  // required
  fullname: z.string().min(3, "Full name is required"),
  title: z.string().min(3, "Title is required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits")
    .optional()
    .or(z.literal("")),

  // optional
  city: z.string().optional(),
  country: z.string().optional(),
  linkedin: z.url().optional(),
  website: z.url().optional(),
});

export const summarySchema = z.object({
  summary: z.string().min(50),
});

export const experienceSchema = z.object({
  experience: z.array(
    z.object({
      company: z.string().min(1),
      role: z.string().min(1),
      fromDate: z.string().min(1),
      toDate: z.string().min(1),
    }),
  ),
});

export const skillsSchema = z.object({
  skills: z.array(z.string()).min(5),
});

export const educationSchema = z.object({
  education: z.array(z.string()).min(1),
});

export const projectsSchema = z.object({
  projects: z.array(z.string()).min(1),
});

export type HeaderInformT = z.infer<typeof headerSchema>;
export type SummaryInformT = z.infer<typeof summarySchema>;
export type EducationInformT = z.infer<typeof educationSchema>;
export type SkillsInformT = z.infer<typeof skillsSchema>;
export type ExperienceInformT = z.infer<typeof experienceSchema>;
export type ProjectsInformT = z.infer<typeof projectsSchema>;

export type StepFormData =
  | HeaderInformT
  | SummaryInformT
  | EducationInformT
  | SkillsInformT
  | ExperienceInformT
  | ProjectsInformT;

export const resumeSchema = z.object({
  // Step 1 - Header
  fullname: z.string().min(3, "Full name is required"),
  title: z.string().min(3, "Title is required"),
  email: z.email("Invalid email address"),

  city: z.string().optional().or(z.literal("")),
  country: z.string().optional().or(z.literal("")),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits")
    .optional()
    .or(z.literal("")),
  linkedin: z.url().optional().or(z.literal("")),
  website: z.url().optional().or(z.literal("")),

  // Step 2 - Summary
  summary: z.string().refine((val) => {
    const wordLength = val.trim().split(" ").length;
    return 40 <= wordLength && wordLength <= 80;
  }, "Summary must be between 40 to 80 words"),

  // Step 3 – Experience
  experience: z.array(
    z.object({
      company: z.string().min(1),
      role: z.string().min(1),
      years: z.string().min(1),
    }),
  ),

  // Step 4 – Skills
  skills: z.array(z.string()).min(5),

  // Step 5 – Education
  education: z.string().min(1),

  // Step 6 – Projects
  projects: z.array(z.string()).min(1),
});

export type FormValues = z.infer<typeof resumeSchema>;
