import { ShortenUrl } from "types/shortenUrl";
import { Button, KIND, SIZE } from "baseui/button";
// next
import Link from "next/link";
// components
import notify from "components/notification/Notification";

type Props = {
  item: ShortenUrl;
};

export default function ShortenItem({ item }: Props) {
  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        notify({ text: "Link copied", notificationType: "success" });
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="my-2 p-3 rounded border border-green-400 bg-white text-black">
      <p
        className="whitespace-nowrap overflow-hidden text-ellipsis"
        title={item.url}
      >
        {item.url}
      </p>
      <div className="mt-2 flex justify-between gap-4">
        <Link
          className="text-blue-500 w-3/5 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
          href={`/${item.id}`}
          target="_blank"
        >
          {process.env.SITE_URL || "domainname.com"}/{item.id}
        </Link>
        <Button
          kind={KIND.tertiary}
          size={SIZE.mini}
          onClick={() => copyToClipboard(`${process.env.SITE_URL}/${item.id}`)}
        >
          COPY
        </Button>
      </div>
    </div>
  );
}
