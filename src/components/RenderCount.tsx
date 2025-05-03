import useRenderCount from "@/hooks/useRenderCount";

export default function RenderCount() {
  const renderCount = useRenderCount();
  return <small> (Render count: {renderCount})</small>;
}
