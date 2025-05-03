import { MemoCount1 } from "./Count1";
import { MemoCount2 } from "./Count2";

export default function Parent() {
  return (
    <>
      <MemoCount1 />
      <MemoCount2 />
    </>
  );
}
