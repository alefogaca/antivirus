import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, ShieldCheck, Eye, UserCheck } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

export function LGPDSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lgpd" className="py-24 bg-surface relative">
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
              <span className="text-[10px] font-display text-neon font-bold">04</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Privacidade e Legislação
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            LGPD — Privacy by Design
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Proteção de dados integrada na arquitetura, não como camada adicional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Data Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Terminal Card */}
            <div className="p-5 rounded-lg bg-card border border-border overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <NeuralShieldIcon className="w-4 h-4 text-neon" />
                <span className="text-[10px] font-display text-muted-foreground">
                  ngav://data/collection.map
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold text-foreground mb-3">
                Mapeamento de Dados
              </h3>

              <div className="rounded bg-background/50 border border-border overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-neon/5 border-b border-border">
                      <th className="text-left px-3 py-2 font-display text-[9px] text-neon uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="text-left px-3 py-2 font-display text-[9px] text-neon uppercase tracking-wider">
                        Dados
                      </th>
                      <th className="text-left px-3 py-2 font-display text-[9px] text-neon uppercase tracking-wider">
                        Finalidade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-3 py-2.5">
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-3 h-3 text-cyan" />
                          <span className="font-display text-foreground">Pessoais</span>
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground font-display">
                        Nome, e-mail, IP
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">
                        Conta e alertas
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5">
                        <span className="inline-flex items-center gap-1">
                          <Lock className="w-3 h-3 text-neon" />
                          <span className="font-display text-foreground">Telemetria</span>
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground font-display">
                        Metadados, logs, geo
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">
                        Detecção de surtos
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Right: Privacy by Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
              Controles de Privacidade
            </h3>

            <div className="space-y-3">
              {[
                {
                  icon: UserCheck,
                  title: "Consentimento Explícito (Opt-in)",
                  desc: "Caixas de seleção desmarcadas por padrão. O usuário decide ativamente compartilhar dados de telemetria.",
                },
                {
                  icon: Lock,
                  title: "Criptografia TLS 1.3",
                  desc: "Todos os dados transmitidos são criptografados. Metadados armazenados anonimizados no servidor.",
                },
                {
                  icon: ShieldCheck,
                  title: "Painel de Privacidade",
                  desc: "Usuário pode excluir sua conta, exportar dados e revogar consentimento de telemetria a qualquer momento.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-card border border-border flex items-start gap-3 hover:border-neon/20 transition-colors duration-300"
                >
                  <div className="p-1.5 rounded bg-neon/10 shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-semibold text-foreground mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
