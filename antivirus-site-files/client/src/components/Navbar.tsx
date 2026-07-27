import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NeuralShieldIcon } from "./NeuralShield";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const navLinks = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "ideacao", label: "Ideação", href: "#ideacao" },
  { id: "ia", label: "IA Engine", href: "#ia" },
  { id: "lgpd", label: "Privacidade", href: "#lgpd" },
  { id: "scrum", label: "Scrum", href: "#scrum" },
  { id: "backlog", label: "Backlog", href: "#backlog" },
  { id: "kanban", label: "Kanban", href: "#kanban" },
  { id: "metricas", label: "Métricas", href: "#metricas" },
  { id: "equipe", label: "Squad", href: "#equipe" },
];

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14">
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <NeuralShieldIcon className="w-6 h-6 text-neon transition-all duration-300 group-hover:drop-shadow-[0_0_12px_var(--color-neon)]" />
          <span className="font-display font-bold text-sm tracking-[0.15em] text-foreground hidden sm:block">
            <span className="text-neon">NG</span>AV
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-2.5 py-1 text-[11px] font-display tracking-wide transition-all duration-200 rounded ${
                activeSection === link.id
                  ? "text-neon bg-neon/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-display tracking-wide rounded transition-all ${
                    activeSection === link.id
                      ? "text-neon bg-neon/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
