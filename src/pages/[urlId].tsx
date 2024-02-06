import { useEffect } from "react";
// next
import type { NextPage } from "next";
import { useRouter } from "next/router";
// utils
import http from "utils/http";
import { SHORTEN_URL } from "utils/apiEndpoints";
// components
import notify from "components/notification/Notification";

const Home: NextPage = () => {
  const router = useRouter();
  const { urlId } = router.query;

  const getUrl = async () => {
    try {
      const response = await http.get(`${SHORTEN_URL}/${urlId}`);
      const { url } = response;
      if (url) {
        router.push(url);
      } else {
        notify({
          text: "The URL may not exist or may have expired.",
          notificationType: "error",
        });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (urlId) {
      getUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlId]);

  return <div />;
};

export default Home;
