import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className=" space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          ¿Listo para Explorar?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Este es un proyecto de prueba para demostrar las capacidades de las
          tecnologías modernas de desarrollo web. Siéntete libre de explorar el
          panel de control y el código.
        </p>
        <Link href="/listado">
          <Button size="lg" className="mt-4">
            Ir al listado de personajes
          </Button>
        </Link>
      </div>
    </section>
  );
}
