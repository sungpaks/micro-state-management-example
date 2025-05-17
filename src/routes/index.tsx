import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-[720px] w-full">
      <h1 className="text-xl font-semibold">Micro State Management with React Hooks</h1>
      <p>by. Daishi Kato</p>
      <img src="https://i.imgur.com/qSRREya.jpeg" alt="책 표지" className="max-w-[540px]" />
    </div>
  );
}
