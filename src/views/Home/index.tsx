import { useEffect, useState } from "react";
// lodash
import _ from "lodash";
//
import ShortenURLForm from "./ShortenURLForm";
import ShortenItem from "./ShortenItem";

export default function HomeView() {
  const [shortedUrls, setShortedUrls] = useState<any[]>([]);

  const getShortedUrlsFromLocal = () => {
    const json = localStorage.getItem("shortenUrlList") || "[]";
    setShortedUrls(JSON.parse(json));
  };

  useEffect(() => {
    getShortedUrlsFromLocal();
  }, []);

  return (
    <div>
      <div className="w-[768px] mx-auto my-20">
        <p className="text-4xl font-bold">Create branded and safe short URLs</p>
        <p className="mt-3">
          URL shortener is the fastest, easiest way to brand, track, and share
          short URLs using a custom domain name.
        </p>
      </div>
      <div className="bg-dark text-white min-h-[500px] p-10">
        <div className="w-[768px] mx-auto">
          <ShortenURLForm refresh={getShortedUrlsFromLocal} />
          <div className="mt-5">
            {_.reverse([...shortedUrls]).map((item, index) => (
              <ShortenItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
