import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutList } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

const kanbanColumns = [
  {
    title: "To Do",
    color: "muted-foreground",
    bgClass: "bg-card",
    borderClass: "border-border",
    headerBg: "",
    items: [
      "Implementar autenticação de usuários",
      "Configurar banco de dados de assinaturas",
      "Integrar API de atualização do modelo IA",
    ],
  },
  {
    title: "Doing",
    color: "text-cyan",
    bgClass: "bg-card",
    borderClass: "border-cyan/30",
    headerBg: "bg-cyan/5",
    items: [
      "Desenvolver módulo de análise comportamental",
      "Criar dashboard de status de proteção",
      "Implementar painel de Privacidade (LGPD)",
    ],
  },
  {
    title: "Done",
    color: "text-neon",
    bgClass: "bg-card",
    borderClass: "border-neon/30",
    headerBg: "bg-neon/5",
    items: [
      "Arquitetura do sistema definida",
      "Modelo de IA treinado (MVP)",
      "Backlog do Produto priorizado",
      "Documento do projeto aprovado",
    ],
  },
];

export function KanbanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kanban" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-neon/30 flex items-center justify-center">
              <span className="text-[10px] font-display text-neon font-bold">07</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Fluxo de Trabalho
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Quadro Kanban
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Organização visual do fluxo de trabalho simulado pelo Squad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {kanbanColumns.map((column, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`${column.bgClass} rounded-lg border ${column.borderClass} overflow-hidden`}
            >
              {/* Column Header */}
              <div className={`px-4 py-2.5 border-b border-border flex items-center gap-2 ${column.headerBg}`}>
                <LayoutList className={`w-3.5 h-3.5 ${column.color}`} />
                <h3 className={`font-display text-xs font-semibold tracking-wider uppercase ${column.color}`}>
                  {column.title}
                </h3>
                <span className="ml-auto text-[9px] font-display text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                  {column.items.length}
                </span>
              </div>

              {/* Column Items */}
              <div className="p-3 space-y-2">
                {column.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.05 }}
                    className={`p-2.5 rounded bg-surface border border-border text-[11px] text-muted-foreground flex items-start gap-2 ${
                      column.title === "Done" ? "line-through opacity-50" : ""
                    }`}
                  >
                    <NeuralShieldIcon className="w-3 h-3 text-neon/40 mt-0.5 shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
