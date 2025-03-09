// API:
import { AxiosError } from "axios";
import { z } from "zod";

import apiClient, { handleApiError } from "@/lib/axiosClient";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const charactersRouter = createTRPCRouter({
  getCharacter: publicProcedure
    .input(
      z.object({
        characterID: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { characterID } = input;
      try {
        const character = await apiClient.get(`characters`, {
          params: {
            id: characterID,
          },
        });

        return {
          ...character.data,
        };
      } catch (err) {
        handleApiError(err as AxiosError);
        throw err;
      }
    }),
});
