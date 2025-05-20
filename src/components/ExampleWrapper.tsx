export default function ExampleWrapper({
  children,
  title,
  ...props
}: { children: React.ReactNode; title: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="p-4 mt-8 bg-amber-300 flex flex-col gap-4 justify-center items-center max-w-[720px] w-full mx-auto break-keep text-center"
      {...props}
    >
      <div className="text-lg font-medium">{title}</div>
      {children}
    </div>
  );
}
