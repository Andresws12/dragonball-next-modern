import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TechnologiesSection() {
  return (
    <section className="dark:bg-slate-900 space-y-6 py-8 md:py-12 lg:py-24 ">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Tecnologías
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Este proyecto está construido con tecnologías de vanguardia para
          proporcionar la mejor experiencia de desarrollo y usuario.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Next.js</CardTitle>
            <CardDescription>
              El framework de React para producción que habilita características
              como renderizado del lado del servidor y generación de sitios web
              estáticos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Este proyecto aprovecha Next.js 15 con App Router para mejorar el
              enrutamiento, los layouts y el soporte de componentes del
              servidor.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Saber más
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>tRPC</CardTitle>
            <CardDescription>
              APIs tipadas de extremo a extremo hechas fáciles. Comparte tus
              tipos entre tu cliente y servidor.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              tRPC te permite construir y consumir APIs completamente tipadas
              sin esquemas o generación de código.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://trpc.io/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Saber más
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>React Server Components</CardTitle>
            <CardDescription>
              Un nuevo paradigma para construir aplicaciones React con
              rendimiento mejorado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Los Server Components te permiten renderizar componentes en el
              servidor, reduciendo la cantidad de JavaScript enviado al cliente.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Saber más
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
