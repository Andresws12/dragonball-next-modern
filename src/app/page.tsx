"use client";
import Layout from "@/components/layout";
import { api } from "@/trpc/react";

export default function Home() {
  const { data } = api.characters.getCharacter.useQuery({ characterID: 1 });
  return (
    <Layout>
      <h1>{JSON.stringify(data)}</h1>
    </Layout>
  );
}
