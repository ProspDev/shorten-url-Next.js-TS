// iconify
import { Icon } from "@iconify/react";
// utils
import { Colors } from "utils/constants";

type Props = {
  text: string | undefined;
};

export default function ParagraghError({ text }: Props) {
  return (
    <div className="flex items-center gap-2 mt-1" style={{ color: Colors.red }}>
      <Icon icon="pajamas:error" fontSize={20} />
      <p className="text-sm">{text || ""}</p>
    </div>
  );
}
