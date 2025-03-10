import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className=" space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex flex  flex-col items-center gap-4 text-center max-w-[64rem]">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Desarrollo Web Moderno con Next.js, tRPC, y Componentes de Servidor
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Un proyecto de prueba explorando las capacidades de tecnologías
          modernas de desarrollo web para construir aplicaciones rápidas,
          seguras en tipos y escalables.
        </p>
        <div className="space-x-4">
          <Link
            href="https://github.com/Andresws12/dragonball-next-modern"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">GitHub</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
