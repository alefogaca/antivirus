import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Activity, BarChart3, Bug } from "lucide-react";
import { NeuralShieldIcon } from "./NeuralShield";

const burndownData = [
  { sprint: "Sem 1", ideal: 50, real: 50 },
  { sprint: "Sem 2", ideal: 40, real: 42 },
  { sprint: "Sem 3", ideal: 30, real: 35 },
  { sprint: "Sem 4", ideal: 20, real: 28 },
  { sprint: "Sem 5", ideal: 10, real: 18 },
  { sprint: "Sem 6", ideal: 0, real: 8 },
];

const velocityData = [
  { sprint: "Sprint 1", points: 18 },
  { sprint: "Sprint 2", points: 16 },
  { sprint: "Sprint 3", points: 22 },
];

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metricas" className="py-24 bg-surface relative">
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
              <span className="text-[10px] font-display text-neon font-bold">08</span>
            </div>
            <span className="text-[10px] font-display tracking-[0.2em] text-muted-foreground uppercase">
              Indicadores e Métricas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Dashboard de Progresso
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Como medimos o progresso e garantimos que o projeto segue o rumo certo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Burndown Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg bg-card border border-border overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-neon" />
              <h3 className="font-display text-xs font-semibold text-foreground tracking-wider uppercase">
                Burndown Chart
              </h3>
            </div>
            <div className="p-4">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={burndownData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 270)" />
                    <XAxis
                      dataKey="sprint"
                      tick={{ fontSize: 10, fill: "oklch(0.6 0.01 270)" }}
                      axisLine={{ stroke: "oklch(0.25 0.02 270)" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "oklch(0.6 0.01 270)" }}
                      axisLine={{ stroke: "oklch(0.25 0.02 270)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(0.14 0.015 270)",
                        border: "1px solid oklch(0.25 0.02 270)",
                        borderRadius: "6px",
                        fontSize: "11px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="ideal"
                      stroke="oklch(0.82 0.14 215)"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                      name="Linha Ideal"
                    />
                    <Line
                      type="monotone"
                      dataKey="real"
                      stroke="oklch(0.87 0.22 155)"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "oklch(0.87 0.22 155)" }}
                      name="Trabalho Real"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Velocity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg bg-card border border-border overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-cyan" />
              <h3 className="font-display text-xs font-semibold text-foreground tracking-wider uppercase">
                Sprint Velocity
              </h3>
            </div>
            <div className="p-4">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={velocityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 270)" />
                    <XAxis
                      dataKey="sprint"
                      tick={{ fontSize: 10, fill: "oklch(0.6 0.01 270)" }}
                      axisLine={{ stroke: "oklch(0.25 0.02 270)" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "oklch(0.6 0.01 270)" }}
                      axisLine={{ stroke: "oklch(0.25 0.02 270)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(0.14 0.015 270)",
                        border: "1px solid oklch(0.25 0.02 270)",
                        borderRadius: "6px",
                        fontSize: "11px",
                      }}
                    />
                    <Bar
                      dataKey="points"
                      fill="oklch(0.82 0.14 215)"
                      radius={[3, 3, 0, 0]}
                      name="Story Points"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* KPIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 rounded-lg bg-card border border-border overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <Bug className="w-3.5 h-3.5 text-danger" />
              <h3 className="font-display text-xs font-semibold text-foreground tracking-wider uppercase">
                ngav://metrics/kpi
              </h3>
            </div>
            <div className="p-4 grid sm:grid-cols-3 gap-3">
              <div className="p-4 rounded bg-surface border border-neon/20 text-center">
                <div className="text-2xl font-display font-bold text-neon mb-1">99.2%</div>
                <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Precisão do Modelo</div>
              </div>
              <div className="p-4 rounded bg-surface border border-cyan/20 text-center">
                <div className="text-2xl font-display font-bold text-cyan mb-1">0.8%</div>
                <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Falsos Positivos</div>
              </div>
              <div className="p-4 rounded bg-surface border border-border text-center">
                <div className="text-2xl font-display font-bold text-foreground mb-1">3</div>
                <div className="text-[10px] text-muted-foreground font-display uppercase tracking-wider">Bugs Críticos/Sprint</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
