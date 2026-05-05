"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, BarChart2, Megaphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const services = [
  {
    icon: BarChart2,
    title: "Estrategia de contenido",
    desc: "Construimos un plan claro: qué publicar, cuándo y para quién. Sin improvisación.",
  },
  {
    icon: Users,
    title: "Gestión de redes sociales",
    desc: "Nos encargamos de tus redes de principio a fin — diseño, copy, publicación y reportes.",
  },
  {
    icon: Megaphone,
    title: "Campañas Meta ADS",
    desc: "Pauta en Facebook e Instagram optimizada para tu presupuesto. Cada peso invertido, medido.",
  },
];

const testimonials = [
  {
    quote: "Antes publicábamos sin rumbo. Desde que trabajamos con JF Solutions, nuestras ventas por Instagram subieron un 40% en tres meses.",
    name: "Camila Rodríguez",
    role: "Fundadora, Tienda online de ropa",
    initials: "CR",
  },
  {
    quote: "La campaña de Meta ADS que armaron para nuestra apertura fue lo que nos llenó el restaurante desde el primer fin de semana.",
    name: "Andrés Mejía",
    role: "Propietario, Restaurante en Medellín",
    initials: "AM",
  },
  {
    quote: "Trabajar con ellos es fácil. Responden rápido, explican todo y los resultados hablan solos.",
    name: "Laura Vargas",
    role: "Gerente, Agencia de viajes",
    initials: "LV",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-block text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium"
              >
                Consultoría de Marketing
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Marketing que mueve{" "}
                <span style={{ color: "var(--gold)" }}>negocios reales.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md"
              >
                Ayudamos a pymes y emprendimientos en Colombia y Estados Unidos a
                crecer con estrategia de contenido, redes sociales y pauta digital.
                Sin promesas vacías.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-sm font-medium gap-2"
                >
                  <a
                    href="https://wa.me/573026589910"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    Escríbenos al WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-sm font-medium border-foreground/20 hover:border-foreground/40 gap-2"
                >
                  <Link href="/servicios">
                    Ver servicios <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-96 h-96">
                <div
                  className="absolute inset-0 rounded-sm opacity-10"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <div
                  className="absolute top-8 left-8 right-8 bottom-8 border-2 rounded-sm"
                  style={{ borderColor: "var(--gold)" }}
                />
                <div
                  className="absolute top-20 left-20 right-20 bottom-20 rounded-sm opacity-15"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-7xl font-bold tracking-tight opacity-20"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
                  >
                    JF
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Services */}
      <section className="py-24" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-3">
              Qué hacemos
            </span>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tres servicios, un objetivo:{" "}
              <br className="hidden md:block" />
              hacer crecer tu negocio.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="bg-background p-8"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-6"
                  style={{ backgroundColor: "color-mix(in oklch, var(--gold) 15%, transparent)" }}
                >
                  <Icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <h3
                  className="text-xl font-bold mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  href="/servicios"
                  className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all duration-150"
                  style={{ color: "var(--gold)" }}
                >
                  Saber más <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-3">
              Lo que dicen nuestros clientes
            </span>
            <h2
              id="testimonials-heading"
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Resultados que se pueden medir.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials }, i) => (
              <motion.blockquote
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="bg-background p-8 rounded-sm border border-border"
              >
                <p className="text-sm leading-relaxed text-foreground/80 mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-background flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none mb-1">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-foreground text-background rounded-sm p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <p className="text-background/60 text-base max-w-md">
                Una llamada de 30 minutos es suficiente para entender qué necesitas y cómo te podemos ayudar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="rounded-sm font-medium gap-2"
                style={{ backgroundColor: "var(--gold)", color: "#1C1917" }}
              >
                <a
                  href="https://wa.me/573026589910"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-sm font-medium border-background/30 text-background hover:bg-background/10 hover:text-background"
              >
                <Link href="/contacto">Agendar llamada</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
