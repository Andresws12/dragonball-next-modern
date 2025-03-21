"use client";
import NextImage from "next/image";
import { useEffect, useRef } from "react";

import Layout from "@/components/layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/trpc/react";

export default function Home() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
    isFetchingNextPage,
  } = api.characters.getCharacters.useInfiniteQuery(
    { limit: 10 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {return <div>Cargando...</div>;}
  if (error) {return <div>Error al cargar los personajes</div>;}

  return (
    <Layout>
      <section className="p-4 space-y-6 flex flex-wrap gap-4 text-center">
        {data?.pages.map((page) =>
          page.items.map((character) => (
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
          )),
        )}
      </section>
      <div ref={bottomRef} className="h-1" />
    </Layout>
  );
}
