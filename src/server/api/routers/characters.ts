import { AxiosError } from "axios";
import { z } from "zod";

import apiClient, { handleApiError } from "@/lib/axiosClient";
import { CharactersResponseSchema } from "@/server/api/schemas/charactersResponse";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const charactersRouter = createTRPCRouter({
  getCharacters: publicProcedure
    .input(
      z.object({
        cursor: z.number().nullish(),
        limit: z.number().min(1).default(10),
      }),
    )
    .query(async ({ input }) => {
      const page = input.cursor ?? 1;
      const limit = input.limit;
      try {
        const response = await apiClient.get(`characters`, {
          params: { page, limit },
        });

        const parsedResponse = CharactersResponseSchema.safeParse(
          response.data,
        );
        if (!parsedResponse.success) {
          throw new Error("El formato de la respuesta es inválido");
        }
        const items = parsedResponse.data.items;
        const nextCursor = items.length === limit ? page + 1 : null;
        return { items, nextCursor };
      } catch (err) {
        handleApiError(err as AxiosError);
        throw err;
      }
    }),
});
