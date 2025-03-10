import {
  Code,
  Database,
  Globe,
  LayoutDashboard,
  Server,
  Zap,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function FeaturesSection() {
  return (
    <section className=" space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Características
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Este proyecto demuestra el poder de combinar Next.js, tRPC y
          Componentes de Servidor para construir aplicaciones web modernas.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Card>
          <CardHeader>
            <LayoutDashboard className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">Panel Interactivo</CardTitle>
            <CardDescription>
              Visualiza datos con gráficos interactivos y componentes UI
              responsivos.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">APIs con Tipado Seguro</CardTitle>
            <CardDescription>
              Seguridad de tipos de extremo a extremo con tRPC para un código
              confiable y mantenible.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Server className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">Componentes de Servidor</CardTitle>
            <CardDescription>
              Rendimiento mejorado con Componentes de Servidor de React para
              reducir JavaScript del lado del cliente.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Database className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">Gestión de Datos</CardTitle>
            <CardDescription>
              Obtención de datos eficiente y gestión de estado con patrones
              modernos.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Globe className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">Optimizado para SEO</CardTitle>
            <CardDescription>
              Optimización SEO incorporada con Next.js App Router y la API de
              metadatos.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Code className="h-10 w-10 text-primary" />
            <CardTitle className="mt-4">Experiencia de Desarrollo</CardTitle>
            <CardDescription>
              Experiencia de desarrollo mejorada con recarga en caliente y
              verificación de tipos.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
