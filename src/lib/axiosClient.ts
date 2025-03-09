import { TRPCError } from "@trpc/server";
import axios, { AxiosError } from "axios";

export const handleApiError = (error: AxiosError) => {
  if (error.response && error.response.data) {
    const { code, message } = error;

    throw new TRPCError({
      code: "BAD_REQUEST",
      message,
      cause: { code },
    });
  } else {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: `Unexpected error: ${error.message}`,
    });
  }
};

const apiClient = axios.create({
  baseURL: process.env.API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
