import MultiStep from "./MultiStep";
import Aside from "../layout/Aside";

export default function MultiStepFormLayout() {
  return (
    <main className="w-full min-h-screen grid grid-cols-[20%_80%]">
      <Aside />
      <MultiStep />
    </main>
  );
}
