export default function ExampleWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="p-4 mt-8 bg-amber-300 flex flex-col gap-4 justify-center items-center w-[720px] break-keep text-center">
      <div className="text-lg font-bold">{title}</div>
      {children}
    </div>
  );
}
