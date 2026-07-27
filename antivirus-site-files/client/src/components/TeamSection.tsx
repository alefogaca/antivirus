import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCog, Users, Code2 } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

const teamMembers = [
  {
    name: "Yan Fernando",
    role: "Product Owner (PO)",
    icon: UserCog,
    color: "neon",
    description: "Define o backlog, prioriza funcionalidades e representa os interesses do cliente.",
  },
  {
    name: "Arthur",
    role: "Scrum Master (SM)",
    icon: Users,
    color: "cyan",
    description: "Facilitador do processo Scrum, removedor de impedimentos e guardião das cerimônias.",
  },
  {
    name: "Alexandre",
    role: "Developer",
    icon: Code2,
    color: "neon",
    description: "Implementação técnica da solução e integração de sistemas.",
  },
  {
    name: "Leonardo",
    role: "Developer",
    icon: Code2,
    color: "neon",
    description: "Construção do frontend, testes e experiência do usuário.",
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipe" className="py-24 bg-surface relative">
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
              <span className="text-[10px] font-display text-neon font-bold">09</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              O Squad
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Equipe do Projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Squad ágil de 4 membros organizados para entregar o NGAV.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-lg bg-card border border-border hover:border-neon/20 transition-all duration-300 overflow-hidden group"
            >
              {/* Avatar area */}
              <div className="p-4 text-center border-b border-border">
                <div className={`w-12 h-12 rounded-full bg-${member.color}/10 border border-${member.color}/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className={`w-5 h-5 ${member.color === "neon" ? "text-neon" : "text-cyan"}`} />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-0.5">
                  {member.name}
                </h3>
                <p className={`text-[10px] font-display tracking-wider uppercase ${
                  member.color === "neon" ? "text-neon" : "text-cyan"
                }`}>
                  {member.role}
                </p>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-5 rounded-lg bg-card border border-border"
        >
          <div className="grid sm:grid-cols-3 gap-5 text-center">
            <div>
              <div className="text-xl font-display font-bold text-neon mb-0.5">NGAV</div>
              <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Tipo de Projeto</div>
            </div>
            <div>
              <div className="text-xl font-display font-bold text-cyan mb-0.5">07/08/2026</div>
              <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Data de Entrega</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                {[0, 1, 2, 3].map((n) => (
                  <NeuralShieldIcon key={n} className="w-4 h-4 text-neon" />
                ))}
              </div>
              <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Membros do Squad</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
