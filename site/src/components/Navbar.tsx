"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-800 text-xl tracking-tight text-foreground hover:text-gold transition-colors duration-150"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
        >
          JF Solutions
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-sm font-medium">
            <a
              href="https://wa.me/573026589910"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos
            </a>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors duration-150"
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <div className="flex flex-col h-full pt-8">
              <span
                className="text-lg font-bold mb-8 block"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
              >
                JF Solutions
              </span>
              <ul className="flex flex-col gap-6 flex-1">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`text-base font-medium transition-colors duration-150 ${
                        pathname === href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-sm w-full mb-8">
                <a
                  href="https://wa.me/573026589910"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Hablemos por WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
