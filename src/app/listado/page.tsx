"use client";
import NextImage from "next/image";

import Layout from "@/components/layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/trpc/react";

export default function Home() {
  const { data, isLoading, error } = api.characters.getCharacter.useQuery({
    characterID: 1,
  });

  return (
    <Layout>
      <section className="p-4 space-y-6 flex flex-wrap gap-4 text-center">
        {isLoading ? (
          <div>Cargando...</div>
        ) : error ? (
          <div>Error al cargar los personajes</div>
        ) : !data || data.items.length === 0 ? (
          <div>No se encontraron personajes</div>
        ) : (
          data.items.map((character) => (
            <Card className="max-w-[25rem]" key={character.id}>
              <CardHeader className="flex flex-col items-center">
                <NextImage
                  src={character.image}
                  alt={character.name}
                  width={250}
                  height={250}
                  className="h-auto w-25 object-fit rounded-lg"
                />
                <CardTitle className="mt-4">{character.name}</CardTitle>
                <CardDescription>{character.description}</CardDescription>
              </CardHeader>
            </Card>
          ))
        )}
      </section>
    </Layout>
  );
}
