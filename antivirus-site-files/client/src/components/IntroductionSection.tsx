import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Globe, Users, Zap } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

export function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ideacao" className="py-24 relative">
      {/* Section signal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-neon/30 flex items-center justify-center">
              <span className="text-[10px] font-display text-neon font-bold">01</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Ideação e Impacto Digital
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Ameaças Evoluem. A Defesa Também.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Antivírus de Próxima Geração — detecção proativa contra malwares não catalogados.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="p-5 rounded-lg bg-card border border-border hover:border-neon/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-neon/50" />
              <h3 className="font-display text-base font-semibold text-foreground mb-3">
                Visão Geral
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O NGAV é um <strong className="text-neon">Antivírus de Próxima Geração</strong> que
                substitui a abordagem reativa de assinaturas por análise comportamental em tempo real.
                Enquanto antivírus tradicionais esperam que um vírus seja catalogado antes de detectá-lo,
                o NGAV usa IA para identificar padrões maliciosos <strong className="text-foreground">antes</strong> da execução.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan/50" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Na economia digital atual — onde trabalho remoto e transações online são
                onipresentes — a segurança cibernética é um pilar de continuidade. O NGAV
                democratiza o acesso à proteção avançada para pequenos comércios e
                usuários domésticos que antes dependiam de soluções corporativas caras.
              </p>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-3 group hover:border-neon/20 transition-colors duration-300">
              <div className="p-2 rounded bg-neon/10 shrink-0">
                <Globe className="w-4 h-4 text-neon" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-foreground mb-1">Economia Digital</h4>
                <p className="text-[11px] text-muted-foreground">Proteção para trabalho remoto e transações online 24/7</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-3 group hover:border-cyan/20 transition-colors duration-300">
              <div className="p-2 rounded bg-cyan/10 shrink-0">
                <Users className="w-4 h-4 text-cyan" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-foreground mb-1">Público-Alvo</h4>
                <p className="text-[11px] text-muted-foreground">Pequenos comércios e usuários domésticos</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-3 group hover:border-neon/20 transition-colors duration-300">
              <div className="p-2 rounded bg-neon/10 shrink-0">
                <Zap className="w-4 h-4 text-neon" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-foreground mb-1">Diferencial Técnico</h4>
                <p className="text-[11px] text-muted-foreground">Análise comportamental vs. assinaturas tradicionais</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface border border-border flex items-start gap-3 group hover:border-neon/20 transition-colors duration-300">
              <div className="p-2 rounded bg-neon/10 shrink-0">
                <NeuralShieldIcon className="w-4 h-4 text-neon" />
              </div>
              <div>
                <h4 className="font-display text-xs font-semibold text-foreground mb-1">Zero-Day Ready</h4>
                <p className="text-[11px] text-muted-foreground">Detecção de ameaças nunca vistas antes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
