import Aside from "./components/layout/Aside";

export default function App() {
  return (
    <div className="w-full min-h-screen relative">
      <main className="w-full h-screen grid grid-cols-[20%_80%]">
        <Aside />
      </main>
    </div>
  );
}
