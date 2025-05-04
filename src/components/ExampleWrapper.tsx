export default function ExampleWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="p-4 mt-24 bg-amber-400 flex flex-col gap-4 justify-center items-center max-w-[600px] break-keep text-center">
      <div className="text-lg font-bold">{title}</div>
      {children}
    </div>
  );
}
