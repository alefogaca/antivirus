import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

const userStories = [
  {
    id: "US-001",
    priority: "Alta",
    priorityColor: "neon",
    story: "Como usuário, eu quero criar uma conta para receber alertas de ameaças e salvar minhas configurações de proteção.",
    points: 5,
    sprint: "Sprint 1",
  },
  {
    id: "US-002",
    priority: "Alta",
    priorityColor: "neon",
    story: "Como usuário, eu quero escanear uma pasta específica para verificar se há arquivos maliciosos no meu computador.",
    points: 8,
    sprint: "Sprint 1",
  },
  {
    id: "US-003",
    priority: "Alta",
    priorityColor: "neon",
    story: "Como sistema, eu quero analisar automaticamente cada arquivo executável usando o modelo de IA para classificar como Seguro ou Malicioso.",
    points: 13,
    sprint: "Sprint 1",
  },
  {
    id: "US-004",
    priority: "Média",
    priorityColor: "cyan",
    story: "Como usuário, eu quero visualizar um dashboard com o status de proteção do meu sistema em tempo real.",
    points: 5,
    sprint: "Sprint 2",
  },
  {
    id: "US-005",
    priority: "Média",
    priorityColor: "cyan",
    story: "Como usuário, eu quero configurar preferências de telemetria e consentimento de dados no painel de Privacidade.",
    points: 3,
    sprint: "Sprint 2",
  },
  {
    id: "US-006",
    priority: "Média",
    priorityColor: "cyan",
    story: "Como administrador, eu quero visualizar um relatório com estatísticas de detecções e falsos positivos para ajustar o modelo.",
    points: 8,
    sprint: "Sprint 2",
  },
  {
    id: "US-007",
    priority: "Baixa",
    priorityColor: "muted",
    story: "Como usuário, eu quero receber notificações push quando uma nova ameaça for identificada na minha região.",
    points: 5,
    sprint: "Sprint 3",
  },
  {
    id: "US-008",
    priority: "Baixa",
    priorityColor: "muted",
    story: "Como usuário, eu quero exportar logs de segurança para compartilhar com suporte técnico.",
    points: 3,
    sprint: "Sprint 3",
  },
];

export function BacklogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="backlog" className="py-24 bg-surface relative">
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
              <span className="text-[10px] font-display text-neon font-bold">06</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Backlog do Produto
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Histórias de Usuário
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            8 histórias priorizadas, distribuídas em 3 sprints. Total: 50 story points.
          </p>
        </motion.div>

        {/* Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-6"
        >
          <div className="px-3 py-1.5 rounded bg-card border border-neon/30">
            <span className="text-[10px] font-display text-muted-foreground">Points: </span>
            <span className="text-xs font-display font-bold text-neon">50</span>
          </div>
          <div className="px-3 py-1.5 rounded bg-card border border-cyan/30">
            <span className="text-[10px] font-display text-muted-foreground">Sprints: </span>
            <span className="text-xs font-display font-bold text-cyan">3</span>
          </div>
          <div className="px-3 py-1.5 rounded bg-card border border-border">
            <span className="text-[10px] font-display text-muted-foreground">Stories: </span>
            <span className="text-xs font-display font-bold text-foreground">8</span>
          </div>
        </motion.div>

        {/* User Stories */}
        <div className="space-y-1.5">
          {userStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
              className={`rounded bg-card border transition-all duration-300 overflow-hidden ${
                expandedId === story.id ? "border-neon/30" : "border-border hover:border-neon/10"
              }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === story.id ? null : story.id)}
                className="w-full flex items-center gap-3 p-3 text-left"
              >
                <NeuralShieldIcon className="w-3.5 h-3.5 text-neon/60 shrink-0" />
                <span className="font-display text-[10px] text-muted-foreground shrink-0 tracking-wider">
                  {story.id}
                </span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[9px] font-display shrink-0 tracking-wider uppercase ${
                    story.priorityColor === "neon"
                      ? "bg-neon/10 text-neon"
                      : story.priorityColor === "cyan"
                      ? "bg-cyan/10 text-cyan"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {story.priority}
                </span>
                <p className="text-xs text-foreground flex-1 truncate">
                  {story.story.slice(0, 55)}...
                </p>
                <span className="font-display text-[10px] text-muted-foreground shrink-0">
                  {story.points} pts
                </span>
                {expandedId === story.id ? (
                  <ChevronUp className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                )}
              </button>
              {expandedId === story.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 pb-3 border-t border-border"
                >
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed pl-7">
                    {story.story}
                  </p>
                  <div className="mt-2 pl-7 flex items-center gap-3">
                    <span className="text-[10px] font-display text-cyan">
                      Sprint: {story.sprint}
                    </span>
                    <span className="text-[10px] font-display text-muted-foreground">
                      Points: {story.points}
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
