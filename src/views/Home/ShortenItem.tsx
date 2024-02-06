import { useState, useEffect } from "react";
import _ from "lodash";
// baseUI
import { Button, KIND, SIZE } from "baseui/button";
// next
import Link from "next/link";
// iconify
import { Icon } from "@iconify/react";
// types
import { ShortenUrl } from "types/shortenUrl";
// components
import notify from "components/notification/Notification";

type Props = {
  item: ShortenUrl;
  refresh: () => void;
};

export default function ShortenItem({ item, refresh }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
      setIsCopied(true);
      try {
        await navigator.clipboard.writeText(text);
        notify({ text: "Link copied", notificationType: "success" });
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    }
  }, [isCopied]);

  const handleRemove = () => {
    const shortedUrlListJson = localStorage.getItem("shortenUrlList") || "[]";
    const shortedUrlList = JSON.parse(shortedUrlListJson);
    const listObject = _.mapKeys(shortedUrlList, "id");
    delete listObject[item.id];
    localStorage.setItem(
      "shortenUrlList",
      JSON.stringify(_.values(listObject))
    );

    refresh();
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
        <div>
          <Button
            kind={KIND.tertiary}
            size={SIZE.mini}
            onClick={() =>
              copyToClipboard(`${process.env.SITE_URL}/${item.id}`)
            }
          >
            <Icon
              icon={
                isCopied ? "fluent:copy-24-filled" : "fluent:copy-24-regular"
              }
              fontSize={25}
            />
          </Button>
          <Button kind={KIND.tertiary} size={SIZE.mini} onClick={handleRemove}>
            <Icon icon="fluent:delete-28-regular" fontSize={25} />
          </Button>
        </div>
      </div>
    </div>
  );
}
