import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCog, Users, Code2 } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

const roles = [
  {
    icon: UserCog,
    role: "Product Owner (PO)",
    member: "Yan Fernando",
    color: "neon",
    responsibilities: [
      "Define o Backlog do Produto",
      "Prioriza funcionalidades",
      "Representa os interesses do cliente",
    ],
  },
  {
    icon: Users,
    role: "Scrum Master (SM)",
    member: "Arthur",
    color: "cyan",
    responsibilities: [
      "Facilita o processo Scrum",
      "Remove impedimentos da equipe",
      "Garante que as cerimônias aconteçam",
    ],
  },
  {
    icon: Code2,
    role: "Development Team",
    members: ["Alexandre", "Leonardo"],
    color: "neon",
    responsibilities: [
      "Implementação técnica da solução",
      "Desenvolvimento do frontend e backend",
      "Testes e integração contínua",
    ],
  },
];

export function ScrumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="scrum" className="py-24 relative">
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
              <span className="text-[10px] font-display text-neon font-bold">05</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Metodologia — Framework Scrum
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Planning Ágil e Backlog
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Squad de 4 membros organizados para entregar o NGAV em 3 sprints.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {roles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-lg bg-card border border-border hover:border-neon/20 transition-all duration-300 overflow-hidden"
            >
              {/* Role header */}
              <div className={`px-4 py-2 border-b border-border flex items-center gap-2 ${
                item.color === "neon" ? "bg-neon/5" : "bg-cyan/5"
              }`}>
                <item.icon className={`w-3.5 h-3.5 ${item.color === "neon" ? "text-neon" : "text-cyan"}`} />
                <span className={`text-[10px] font-display tracking-wider uppercase ${
                  item.color === "neon" ? "text-neon" : "text-cyan"
                }`}>
                  {item.role}
                </span>
              </div>

              <div className="p-4 space-y-3">
                <p className={`text-xs font-display ${
                  item.color === "neon" ? "text-neon" : "text-cyan"
                }`}>
                  {item.members ? item.members.join(" & ") : item.member}
                </p>
                <ul className="space-y-1.5">
                  {item.responsibilities.map((resp, j) => (
                    <li key={j} className="text-[11px] text-muted-foreground flex items-start gap-2">
                      <NeuralShieldIcon className="w-3 h-3 text-neon/50 mt-0.5 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sprint Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-5 rounded-lg bg-card border border-border"
        >
          <h3 className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            ngav://scrum/cycle
          </h3>
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { label: "Sprint Planning", desc: "Definição das tarefas" },
              { label: "Daily Scrum", desc: "Sincronização (15 min)" },
              { label: "Sprint Review", desc: "Demo do entregue" },
              { label: "Retrospectiva", desc: "Melhoria contínua" },
            ].map((ceremony, i) => (
              <div key={i} className="text-center p-3 rounded bg-surface border border-border">
                <div className="w-7 h-7 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-2">
                  <span className="text-[10px] font-display text-neon font-bold">{i + 1}</span>
                </div>
                <h4 className="font-display text-[11px] font-semibold text-foreground mb-0.5">
                  {ceremony.label}
                </h4>
                <p className="text-[10px] text-muted-foreground">{ceremony.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
