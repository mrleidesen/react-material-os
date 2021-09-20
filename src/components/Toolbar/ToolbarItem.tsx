import { DefaultProps } from "@/types/components";

export default function ToolbarItem(props: DefaultProps) {
  return (
    <div
      className={`relative h-full px-2 flex justify-center items-center hover:bg-gray-800 hover:bg-opacity-5 select-none cursor-pointer ${
        props.variant || ""
      }`}
      onClick={props.onClick}
      title={props.title}
    >
      {props.children}
    </div>
  );
}
