import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const socials = [
  { icon: IconInstagram, label: "Instagram", href: "#" },
  { icon: IconLinkedIn, label: "LinkedIn", href: "#" },
  { icon: IconFacebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <span
              className="text-2xl font-bold block mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              JF Solutions
            </span>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Marketing que mueve negocios reales. Estrategia, redes y pauta
              para pymes en Colombia y latinos en Estados Unidos.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-background/40 mb-4 font-medium">
              Páginas
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-background/70 hover:text-background transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-background/40 mb-4 font-medium">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/573026589910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors duration-150"
                >
                  WhatsApp: +57 302 658 9910
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@jfsolutions.co"
                  className="text-sm text-background/70 hover:text-background transition-colors duration-150"
                >
                  hola@jfsolutions.co
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-background/50 hover:text-background transition-colors duration-150"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>© {new Date().getFullYear()} JF Solutions. Todos los derechos reservados.</p>
          <p>
            Built with{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 transition-colors duration-150"
            >
              Claude Web Builder by Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
