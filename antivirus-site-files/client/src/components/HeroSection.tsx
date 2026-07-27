import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_e44440b2.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/70" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.87 0.22 155) 1px, transparent 1px), linear-gradient(90deg, oklch(0.87 0.22 155) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-20 left-4 w-8 h-8 border-t border-l border-neon/20" />
      <div className="absolute top-20 right-4 w-8 h-8 border-t border-r border-neon/20" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-neon/20" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-neon/20" />

      <div className="container relative z-10 py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-3"
          >
            {/* Status Bar */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon/30 bg-neon/5">
                <div className="w-1.5 h-1.5 rounded-full bg-neon pulse-glow" />
                <span className="text-[10px] font-display tracking-widest text-neon uppercase">
                  Sistema Ativo
                </span>
              </div>
              <span className="text-[10px] font-display text-muted-foreground">
                v1.0.0 — NGAV Protocol
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Proteção</span>
              <br />
              <span className="text-neon neon-glow">Inteligente</span>
              <br />
              <span className="text-foreground text-3xl sm:text-4xl lg:text-[2.5rem]">(IA-Powered)</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Ameaça detectada <strong className="text-neon">antes</strong> da execução.
              Antivírus de Próxima Geração com análise comportamental e IA para
              proteção proativa contra <em>malwares</em> de dia zero.
            </p>

            {/* Terminal-style info */}
            <div className="p-4 rounded bg-card/80 border border-border font-display text-xs mb-8 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-neon" />
                <div className="w-2 h-2 rounded-full bg-cyan" />
                <div className="w-2 h-2 rounded-full bg-danger" />
                <span className="text-muted-foreground ml-2">ngav://status</span>
              </div>
              <div className="text-muted-foreground space-y-0.5">
                <p><span className="text-neon">$</span> engine: <span className="text-cyan">supervised_classification</span></p>
                <p><span className="text-neon">$</span> status: <span className="text-neon">protected</span></p>
                <p><span className="text-neon">$</span> lgpd: <span className="text-cyan">compliant</span></p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#ideacao"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon text-background font-display font-semibold text-sm rounded transition-all duration-200 hover:bg-neon-dim active:scale-[0.97]"
              >
                Explorar Arquitetura
              </a>
              <a
                href="#ia"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-display text-sm rounded transition-all duration-200 hover:border-neon/50 hover:text-neon active:scale-[0.97]"
              >
                Ver IA Engine
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:flex justify-center lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-neon/5 rounded-2xl blur-xl" />
              <div className="relative p-1 rounded-lg bg-gradient-to-b from-neon/20 to-transparent">
                <img
                  src="/manus-storage/neural-network_f5fb80e7.png"
                  alt="Neural Network Threat Detection"
                  className="w-full max-w-lg rounded-lg"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-card border border-neon/40 rounded font-display text-[10px] text-neon flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-neon pulse-glow" />
                PROTEGIDO
              </div>
              <div className="absolute -top-2 -left-2 px-3 py-1.5 bg-card border border-border rounded font-display text-[10px] text-muted-foreground">
                SCAN: REAL-TIME
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a href="#ideacao" className="text-muted-foreground hover:text-neon transition-colors flex flex-col items-center gap-1">
          <span className="text-[9px] font-display tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
