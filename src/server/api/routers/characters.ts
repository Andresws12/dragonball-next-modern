import { AxiosError } from "axios";
import { z } from "zod";

import apiClient, { handleApiError } from "@/lib/axiosClient";
import { CharactersResponseSchema } from "@/server/api/schemas/charactersResponse";

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
        const response = await apiClient.get(`characters`, {
          params: { id: characterID },
        });

        const parsedResponse = CharactersResponseSchema.safeParse(
          response.data,
        );
        if (!parsedResponse.success) {
          throw new Error("El formato de la respuesta es inválido");
        }
        if (parsedResponse.data.items.length === 0) {
          throw new Error("No se encontró el personaje");
        }

        return parsedResponse.data;
      } catch (err) {
        handleApiError(err as AxiosError);
        throw err;
      }
    }),
});
