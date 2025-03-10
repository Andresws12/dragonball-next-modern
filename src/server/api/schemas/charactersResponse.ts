import { z } from "zod";

import { CharacterSchema } from "./characters";

/**
 * Extensión del CharacterSchema para agregar el campo "deletedAt"
 * de acuerdo a la respuesta de ejemplo. Consulta la documentación en:
 * https://web.dragonball-api.com/documentation
 */
const CharacterResponseSchema = CharacterSchema.extend({
  deletedAt: z.null(),
});

const MetaSchema = z.object({
  totalItems: z.number(),
  itemCount: z.number(),
  itemsPerPage: z.number(),
  totalPages: z.number(),
  currentPage: z.number(),
});

const LinksSchema = z.object({
  first: z.string(),
  previous: z.string(),
  next: z.string(),
  last: z.string(),
});

export const CharactersResponseSchema = z.object({
  items: z.array(CharacterResponseSchema),
  meta: MetaSchema,
  links: LinksSchema,
});

export type CharactersResponse = z.infer<typeof CharactersResponseSchema>;
