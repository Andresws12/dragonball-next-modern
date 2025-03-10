import { z } from "zod";

// Character schemas
export const CharacterOriginSchema = z.object({
  name: z.string(),
  planet: z.string().optional(),
});

export const CharacterTransformationSchema = z.object({
  name: z.string(),
  image: z.string().url(),
  ki: z.string().optional(),
});

export const CharacterFusionSchema = z.object({
  name: z.string(),
  with: z.array(z.string()),
  result: z.string(),
});

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  ki: z.string().optional(),
  maxKi: z.string().optional(),
  race: z.string(),
  gender: z.string(),
  description: z.string(),
  image: z.string().url(),
  affiliation: z.string().optional(),
  originPlanet: z.union([z.string(), CharacterOriginSchema]).optional(),
  transformations: z.array(CharacterTransformationSchema).optional(),
  fusions: z.array(CharacterFusionSchema).optional(),
});

export type Character = z.infer<typeof CharacterSchema>;
export type CharacterOrigin = z.infer<typeof CharacterOriginSchema>;
export type CharacterTransformation = z.infer<
  typeof CharacterTransformationSchema
>;
export type CharacterFusion = z.infer<typeof CharacterFusionSchema>;
