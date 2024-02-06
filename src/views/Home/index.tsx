import { useEffect, useState } from "react";
// baseUI
import { Input } from "baseui/input";
import { Button } from "baseui/button";
// components
import notify from "components/notification/Notification";
// utils
import http from "utils/http";

export default function HomeView() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getGreeting = async () => {
    try {
      const response = await http.get("api/v1/shorten");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getGreeting();
  }, []);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await http.post("api/v1/shorten", {
        url,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      notify({ text: "Something went wrong", notificationType: "error" });
    }
    setIsLoading(false);
  };

  return (
    <div>
      <p className="text-center">Hello URL Shortener</p>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        autoComplete="off"
      />
      <Button onClick={onSubmit} isLoading={isLoading}>
        Submit
      </Button>
    </div>
  );
}
