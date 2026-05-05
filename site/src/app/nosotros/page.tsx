"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const values = [
  {
    icon: Target,
    title: "Resultados antes que promesas",
    desc: "No vendemos humo. Antes de proponer cualquier servicio, entendemos tu negocio, tu presupuesto y lo que realmente es posible.",
  },
  {
    icon: Eye,
    title: "Claridad total",
    desc: "Nada de reportes que no se entienden. Te explicamos qué hicimos, qué funcionó y qué vamos a cambiar. Siempre en lenguaje humano.",
  },
  {
    icon: Heart,
    title: "Tu negocio importa",
    desc: "Trabajamos con pymes porque sabemos lo que significa cada peso invertido. No somos una agencia masiva donde eres un cliente más.",
  },
];

export default function Nosotros() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-4">
              Nosotros
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Una consultora hecha para negocios reales.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                JF Solutions nació de una convicción simple: las pymes merecen el
                mismo nivel de marketing que las empresas grandes, sin los precios
                de una agencia corporativa.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Llevamos años ayudando a negocios en Colombia y a latinos en
                Estados Unidos a ordenar su presencia digital, atraer clientes y
                vender más. No con fórmulas mágicas, sino con estrategia, trabajo
                constante y mucha comunicación.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Somos un equipo pequeño — y eso es a propósito. Cada cliente
                trabaja directamente con las personas que hacen el trabajo. Sin
                cuentas ejecutivas intermedias, sin perderse en el proceso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-full max-w-sm h-72">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    backgroundColor: "color-mix(in oklch, var(--gold) 10%, transparent)",
                    border: "1px solid color-mix(in oklch, var(--gold) 30%, transparent)",
                  }}
                />
                <div
                  className="absolute top-6 left-6 right-6 bottom-6 rounded-sm flex items-center justify-center"
                  style={{
                    border: "1px solid color-mix(in oklch, var(--gold) 20%, transparent)",
                  }}
                >
                  <div className="text-center px-8">
                    <p
                      className="text-5xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
                    >
                      Colombia
                    </p>
                    <p className="text-sm text-muted-foreground">
                      y latinos en Estados Unidos
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <Separator className="mb-24" />

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-3">
                Lo que nos mueve
              </span>
              <h2
                className="text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tres principios, sin negociación.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                  className="bg-background p-8"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                    style={{ backgroundColor: "color-mix(in oklch, var(--gold) 15%, transparent)" }}
                  >
                    <Icon size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Trabajamos juntos?
            </h2>
            <p className="text-muted-foreground">
              Una conversación es suficiente para saber si somos el equipo correcto para tu negocio.
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
