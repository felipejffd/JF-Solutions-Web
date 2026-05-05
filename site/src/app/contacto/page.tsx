"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contacto() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-4">
              Contacto
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hablemos.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              La forma más rápida es por WhatsApp. Si prefieres escribirnos, usa el formulario y te respondemos en menos de 24 horas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-sm font-medium gap-3 justify-start w-full md:w-auto"
              >
                <a
                  href="https://wa.me/573026589910"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Escribir al WhatsApp
                </a>
              </Button>

              <div className="flex flex-col gap-6 pt-2">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "color-mix(in oklch, var(--gold) 12%, transparent)" }}
                  >
                    <Phone size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/573026589910"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-150"
                    >
                      +57 302 658 9910
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "color-mix(in oklch, var(--gold) 12%, transparent)" }}
                  >
                    <Mail size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Email</p>
                    <a
                      href="mailto:hola@jfsolutions.co"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-150"
                    >
                      hola@jfsolutions.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "color-mix(in oklch, var(--gold) 12%, transparent)" }}
                  >
                    <Clock size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Horario de atención</p>
                    <p className="text-muted-foreground text-sm">
                      Lunes a viernes, 8 a.m. – 6 p.m. (hora Colombia)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <form
                action="mailto:hola@jfsolutions.co"
                method="POST"
                encType="text/plain"
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de tu negocio"
                      className="rounded-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    required
                    className="rounded-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="mensaje">¿En qué te podemos ayudar?</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                    required
                    rows={5}
                    className="rounded-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-sm font-medium w-full sm:w-auto"
                >
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
