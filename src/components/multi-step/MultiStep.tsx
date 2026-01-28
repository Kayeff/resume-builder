import { FormProvider, useForm } from "react-hook-form";
import Section from "../layout/Section";
import { resumeSchema, type FormValues } from "../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function MultiStep() {
  const form = useForm<FormValues>({
    mode: "onSubmit",
    shouldUnregister: false,
    resolver: zodResolver(resumeSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("FINAL DATA", data);
  };

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <Section />
      </form>
    </FormProvider>
  );
}
