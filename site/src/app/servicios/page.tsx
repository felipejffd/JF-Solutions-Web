"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { MessageCircle, BarChart2, Megaphone, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    icon: BarChart2,
    title: "Estrategia de contenido",
    description:
      "La mayoría de los negocios publican sin un plan. Suben algo porque «hay que publicar» y luego se preguntan por qué no les llega nadie. Nosotros construimos una estrategia concreta: quién es tu audiencia, qué les interesa, qué formatos funcionan en tu industria y cuándo publicar para que te vean.",
    includes: [
      "Análisis de tu audiencia y competencia",
      "Calendario de contenido mensual",
      "Guía de voz y tono de marca",
      "Métricas de seguimiento y ajuste",
    ],
  },
  {
    icon: Users,
    title: "Gestión de redes sociales",
    description:
      "Manejar redes cuesta tiempo — tiempo que le quita horas a tu negocio real. Nos encargamos de todo: diseñamos las piezas, escribimos el copy, publicamos en el horario correcto y te mandamos un reporte mensual con lo que está funcionando y lo que vamos a ajustar.",
    includes: [
      "Diseño de piezas para feed e historias",
      "Redacción de copy sin fórmulas genéricas",
      "Publicación y gestión de comentarios",
      "Reporte mensual de rendimiento",
    ],
  },
  {
    icon: Megaphone,
    title: "Campañas Meta ADS",
    description:
      "Pautar en Facebook e Instagram sin una estrategia clara es regalar plata. Construimos campañas desde cero: definimos el objetivo, segmentamos la audiencia, diseñamos los creativos y optimizamos mientras corren. Cada peso invertido tiene un propósito.",
    includes: [
      "Configuración y auditoría del Business Manager",
      "Segmentación de audiencias por objetivo",
      "Diseño de creativos y textos para pauta",
      "Optimización continua y reportes semanales",
    ],
  },
];

export default function Servicios() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-4">
              Servicios
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lo que hacemos y cómo lo hacemos.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Tres servicios enfocados. Sin paquetes genéricos, sin compromisos que no podemos cumplir.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-0 divide-y divide-border">
            {services.map(({ icon: Icon, title, description, includes }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
                className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "color-mix(in oklch, var(--gold) 15%, transparent)" }}
                    >
                      <Icon size={20} style={{ color: "var(--gold)" }} />
                    </div>
                    <h2
                      className="text-2xl md:text-3xl font-bold tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {description}
                  </p>
                </div>
                <div className="lg:pt-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
                    Incluye
                  </p>
                  <ul className="flex flex-col gap-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "var(--gold)" }}
                        />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Cuál necesitas?
            </h2>
            <p className="text-muted-foreground">
              Cuéntanos y armamos una propuesta a la medida de tu negocio.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-sm font-medium gap-2 flex-shrink-0"
          >
            <a
              href="https://wa.me/573026589910"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
