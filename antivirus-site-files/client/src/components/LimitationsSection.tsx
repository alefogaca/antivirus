import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Server, AlertTriangle } from "lucide-react";

const limitations = [
  {
    icon: Cpu,
    id: "LIM-01",
    title: "Poder de Processamento",
    color: "neon",
    description:
      "Análise via IA em tempo real consome recursos significativos de CPU e RAM. Máquinas mais antigas podem sofrer degradação de desempenho durante scans intensivos.",
    mitigation: "Otimização de modelo (quantização) e escalonamento adaptativo.",
  },
  {
    icon: Server,
    id: "LIM-02",
    title: "Custo de Infraestrutura",
    color: "cyan",
    description:
      "Treinamento e atualização dos modelos exigem servidores potentes e armazenamento em nuvem para processar grandes volumes de dados de telemetria.",
    mitigation: "Edge computing para inferência local, cloud apenas para treinamento.",
  },
  {
    icon: AlertTriangle,
    id: "LIM-03",
    title: "Falsos Positivos",
    color: "danger",
    description:
      "Modelos preditivos podem classificar softwares legítimos como ameaças. Requer camada de ajuste fino e whitelists para reduzir interferência no sistema do usuário.",
    mitigation: "Feedback loop com usuários e whitelists comunitárias.",
  },
];

export function LimitationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-neon/30 flex items-center justify-center">
              <span className="text-[10px] font-display text-neon font-bold">03</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Considerações Técnicas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Limitações Tecnológicas
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Desafios reais identificados e estratégias de mitigação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {limitations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-lg bg-card border border-border hover:border-neon/20 transition-all duration-300 overflow-hidden"
            >
              {/* Header bar */}
              <div className={`px-4 py-2 border-b border-border flex items-center gap-2 ${
                item.color === "neon" ? "bg-neon/5" : item.color === "cyan" ? "bg-cyan/5" : "bg-danger/5"
              }`}>
                <span className={`text-[9px] font-display tracking-wider ${
                  item.color === "neon" ? "text-neon" : item.color === "cyan" ? "text-cyan" : "text-danger"
                }`}>
                  {item.id}
                </span>
                <item.icon className={`w-3.5 h-3.5 ${
                  item.color === "neon" ? "text-neon" : item.color === "cyan" ? "text-cyan" : "text-danger"
                }`} />
              </div>

              <div className="p-4 space-y-3">
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-[9px] font-display text-neon uppercase tracking-wider mb-1">
                    Mitigação
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {item.mitigation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
