import type { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="bg-white w-fit px-2 py-1 cursor-pointer">
      {props.children}
    </button>
  );
}
