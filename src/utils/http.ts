import axios from "axios";

type PostData = { [k: string]: any };

export const getToken = () => {
  return localStorage.getItem("token") || "";
};

const http = {
  get: async (url: string) => {
    const dConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    };
    if (!url) throw new Error("URL is required");

    try {
      const result = await axios.get(url, { ...dConfig });
      return result.data.data;
    } catch (e) {
      let message = "Server error!";
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        message = e.response.data.message;
      }
      throw message;
    }
  },
  post: async (url: string, data: PostData = {}) => {
    const defaultConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    };
    if (!url) throw new Error("URL is required");
    try {
      const result = await axios.post(url, data, defaultConfig);
      return {
        statusCode: result.status,
        statusText: "OK",
        ...result.data.data,
      };
    } catch (e) {
      let message = "Server error!";
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        message = e.response.data.message;
      }
      throw message;
    }
  },
  put: async (url: string, data: PostData = {}) => {
    const defaultConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    };

    if (!url) throw new Error("URL is required");
    try {
      const result = await axios.put(url, data, defaultConfig);
      return {
        statusCode: result.status,
        statusText: "OK",
        ...result.data.data,
      };
    } catch (e) {
      let message = "Server error!";
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        message = e.response.data.message;
      }
      throw message;
    }
  },
  _delete: async (url: string) => {
    const defaultConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    };
    if (!url) throw new Error("URL is required");
    try {
      const result = await axios.delete(url, defaultConfig);
      return {
        statusCode: result.status,
        statusText: "OK",
      };
    } catch (e) {
      let message = "Server error!";
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        message = e.response.data.message;
      }
      throw message;
    }
  },
};

export default http;
