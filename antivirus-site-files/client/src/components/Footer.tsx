import { NeuralShieldIcon } from "./NeuralShield";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative">
      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <NeuralShieldIcon className="w-7 h-7 text-neon" />
            <div>
              <span className="font-display text-sm font-bold text-foreground tracking-[0.1em]">
                <span className="text-neon">NG</span>AV
              </span>
              <p className="text-[10px] text-muted-foreground font-display mt-0.5">
                Next-Gen Antivirus — IA-Powered
              </p>
            </div>
          </div>

          {/* Project Info */}
          <div className="sm:text-center">
            <p className="text-xs font-display text-muted-foreground">
              Trabalho Trimestral Interdisciplinar
            </p>
            <p className="text-xs font-display text-muted-foreground">
              de Inovação e Front-End
            </p>
          </div>

          {/* Squad */}
          <div className="sm:text-right">
            <p className="text-[10px] font-display text-muted-foreground tracking-wider uppercase mb-1">
              Squad
            </p>
            <p className="text-xs font-display text-foreground">
              Yan · Arthur · Alexandre · Leonardo
            </p>
            <p className="text-[10px] font-display text-muted-foreground mt-1">
              Entrega: 07/08/2026
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon pulse-glow" />
            <span className="text-[9px] font-display text-muted-foreground tracking-wider uppercase">
              Sistema Projetado · Não Implementado
            </span>
          </div>
          <span className="text-[9px] font-display text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
