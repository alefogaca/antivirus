import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NeuralShieldIcon } from "./NeuralShield";

export function IASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ia" className="py-24 bg-surface relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.87 0.22 155) 1px, transparent 1px), linear-gradient(90deg, oklch(0.87 0.22 155) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded border border-neon/30 flex items-center justify-center">
              <span className="text-[10px] font-display text-neon font-bold">02</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Inteligência Artificial
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Classificação Supervisionada
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            O modelo identifica ameaças por características estruturais — não por assinatura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Terminal Card */}
            <div className="p-5 rounded-lg bg-card border border-border overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-neon" />
                <div className="w-2 h-2 rounded-full bg-cyan" />
                <div className="w-2 h-2 rounded-full bg-danger" />
                <span className="text-[10px] font-display text-muted-foreground ml-2">
                  ngav://ai/engine.classify
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                O modelo será treinado com um vasto conjunto de dados contendo binários legítimos
                e maliciosos. A IA classifica cada arquivo executável ou script que tenta rodar
                no sistema como <strong className="text-neon">"Seguro"</strong> ou{" "}
                <strong className="text-danger">"Malicioso"</strong> com base em características extraídas.
              </p>
              <div className="font-display text-xs space-y-1.5 bg-background/50 rounded p-3 border border-border">
                <p className="text-muted-foreground"><span className="text-neon">$</span> features = extract(file)</p>
                <p className="text-muted-foreground">{'>'} entropy: <span className="text-cyan">0.847</span></p>
                <p className="text-muted-foreground">{'>'} api_calls: <span className="text-cyan">["CreateRemoteThread", "WriteProcessMemory"]</span></p>
                <p className="text-muted-foreground">{'>'} header_anomaly: <span className="text-danger">detected</span></p>
                <p className="text-muted-foreground">{'>'} classification: <span className="text-neon">MALICIOUS [97.3%]</span></p>
                <p className="text-muted-foreground">{'>'} action: <span className="text-danger">QUARANTINE</span></p>
              </div>
            </div>

            {/* Decision Flow */}
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Pipeline de Decisão
              </h4>
              <div className="flex flex-col items-center gap-2">
                {[
                  { label: "Arquivo Executável Detectado", color: "bg-cyan/10 border-cyan/30 text-cyan" },
                  { label: "Extração de Features (entropia, API, header)", color: "bg-card border-border text-foreground" },
                  { label: "Modelo de IA: Supervised Classification", color: "bg-neon/10 border-neon/30 text-neon" },
                ].map((step, i) => (
                  <div key={i} className="w-full flex flex-col items-center">
                    <div className={`px-4 py-2 rounded border w-full text-center font-display text-xs ${step.color}`}>
                      {step.label}
                    </div>
                    {i < 2 && <div className="text-muted-foreground text-xs my-1">↓</div>}
                  </div>
                ))}
                <div className="flex gap-3 w-full mt-2">
                  <div className="flex-1 px-4 py-2 rounded border border-neon/30 bg-neon/10 text-center font-display text-xs text-neon">
                    SEGURO → Permitir Execução
                  </div>
                  <div className="flex-1 px-4 py-2 rounded border border-danger/30 bg-danger/10 text-center font-display text-xs text-danger">
                    MALICIOSO → Quarentena
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-lg overflow-hidden border border-neon/20">
              <img
                src="/manus-storage/data-flow_e21ac8bf.png"
                alt="Data flow — AI malware detection in action"
                className="w-full h-auto"
              />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <div className="text-2xl font-display font-bold text-neon mb-0.5">1M+</div>
                <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Amostras de Treinamento</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <div className="text-2xl font-display font-bold text-cyan mb-0.5">&lt;1s</div>
                <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Tempo de Análise</div>
              </div>
            </div>

            {/* Features List */}
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-display text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Features Extraídas pelo Modelo
              </h4>
              <div className="space-y-2">
                {["Entropia do arquivo", "Chamadas de API do sistema", "Estrutura do cabeçalho", "Padrões de execução", "Metadados de empacotamento"].map(
                  (feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <NeuralShieldIcon className="w-3 h-3 text-neon shrink-0" />
                      <span className="font-display">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
