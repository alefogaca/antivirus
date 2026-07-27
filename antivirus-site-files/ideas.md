# Brainstorm de Design — Antivírus Inteligente (Pitch do Projeto)

## Abordagens

### 1. "Neural Shield" — Dark Cybersecurity with Green Matrix Accents
- Dark background com tons de preto profundo e acentos em verde neon (matrix/código). Sensação de segurança avançada, alta tecnologia e confiança técnica. Tipografia monospace para títulos e sans-serif limpa para corpo. Grid com bordas sutis e efeitos de scan/glitch sutis.
- Probability: 0.07

### 2. "Clinical Trust" — Light, Clean, Institutional Authority
- Fundo branco/azul-claro com azul-marinho como cor primária. Design limpo, espaçado, com tons institucionais que transmitem confiança e seriedade. Tipografia serif para títulos (autoridade) e sans-serif para corpo. Layout assimétrico com muito whitespace.
- Probability: 0.06

### 3. "Slate Intelligence" — Dark Slate with Teal Intelligence Accents
- Fundo em tons de slate escuro (não preto puro), com acentos em teal/ciano. Gradientes sutis, glassmorphism em cards. Sensação de tecnologia sofisticada e moderna sem ser agressiva. Tipografia sem serif geométrica com pesos variados. Layout com cards flutuantes e divisores orgânicos.
- Probability: 0.08

---

## Abordagem Selecionada: "Neural Shield"

### Design Movement
Cybersecurity Minimalism — inspirado em interfaces de segurança corporativa e dashboards de SOC (Security Operations Center). Referências: SentinelOne, CrowdStrike, terminais de hacking ético.

### Core Principles
1. **Tecnologia Tangível**: O design deve transmitir que a IA não é abstrata — é uma ferramenta real de proteção.
2. **Clareza Técnica**: Informações densas (LGPD, IA, Métricas) devem ser apresentadas com clareza visual, não simplificadas.
3. **Hierarquia por Intensidade**: A intensidade visual (brilho, animação) corresponde à importância da informação.
4. **Credibilidade**: O design deve inspirar confiança técnica, não apenas "parecer bonito".

### Color Philosophy
- **Background**: Preto profundo (#0A0A0F) com nuances azuladas para evitar o "preto chapado"
- **Primary Accent**: Verde neon (#00FF88) — remete a "sistema protegido", código limpo, aprovação
- **Secondary Accent**: Ciano (#00D4FF) — para informações técnicas e dados
- **Danger/Warning**: Vermelho coral (#FF4466) — para ameaças e alertas
- **Surface**: Slate escuro (#1A1A2E) para cards e seções secundárias
- **Text**: Branco suave (#E0E0E8) para legibilidade, cinza (#8888A0) para textos secundários

### Layout Paradigm
- Seções full-width alternadas com backgrounds distintos
- Cards flutuantes com bordas sutis em verde neon
- Grid assimétrico na hero (texto à esquerda, visualização abstrata à direita)
- Timeline vertical para o Backlog e Scrum
- Painel estilo "dashboard" para as métricas

### Signature Elements
1. **Scan Line Effect**: Linhas horizontais sutis que simulam um monitor de segurança escaneando
2. **Glitch Typography**: Títulos principais com micro-glitch em hover
3. **Terminal-style Code Blocks**: Para mostrar exemplos de código/Histórias de Usuário

### Interaction Philosophy
- Hover revela mais informações (tooltip estilo terminal)
- Click em cards mostra expansão com detalhes técnicos
- Scroll-triggered reveals com efeito de "decodificação" (texto que aparece caractere por caractere)

### Animation
- Entrada: fade-in + slide-up com 50ms stagger entre elementos
- Hero: texto com efeito de "typing" ou "decodificação"
- Cards: scale(0.95) → scale(1) com glow na borda ao hover
- Transições: 200ms ease-out para tudo
- Scroll: seções aparecem com fade-in quando entram na viewport

### Typography System
- **Display/Headings**: 'JetBrains Mono' ou 'Fira Code' — monospace que remete a código/terminal
- **Body**: 'Space Grotesk' — geométrica, moderna, legível em tamanhos pequenos
- **Hierarchy**:
  - H1: 3.5rem, JetBrains Mono, bold, verde neon
  - H2: 2.25rem, JetBrains Mono, semibold
  - H3: 1.5rem, Space Grotesk, semibold
  - Body: 1rem, Space Grotesk, regular
  - Code/Terminal: 0.875rem, JetBrains Mono

### Brand Essence
"Proteção inteligente para a era digital — um antivírus de próxima geração que pensa antes que a ameaça chegue."
- Adjetivos: **Sofisticado, Preciso, Confiável**

### Brand Voice
- Headlines: Diretas, técnicas, com urgência controlada
- CTAs: "Explorar Arquitetura", "Ver Backlog", "Como Funciona a IA"
- Exemplos:
  - "A ameaça não espera. Nossa IA também não."
  - "Detecção proativa. Resposta imediata. Proteção contínua."

### Wordmark & Logo
Um escudo estilizado com circuitos neurais internos, em verde neon sobre fundo escuro. Linhas geométricas limpas, sem excesso de detalhes. Pode ser renderizado como SVG inline.

### Signature Brand Color
**Verde Neon (#00FF88)** — a cor que imediatamente identifica o projeto como "segurança ativa"

## Style Decisions

- **Brand mark rule:** NGAV sempre usa um símbolo de escudo neural em verde neon como dispositivo de identidade primária, repetido sutilmente no hero, marcadores de seção, cards-chave e rodapé.

- **Motif rule:** Cada seção principal deve incluir um sinal reconhecível de interface SOC — linha de scan, frame de terminal, grid neural, nó de ameaça ou trace de escudo — para que a página nunca recaia em cards escuros genéricos.

- **Voice rule:** O copy da página deve soar como um briefing controlado de cybersecurity: direto, técnico e ativo. Ex: "Ameaça detectada antes da execução" em vez de frases genéricas de descrição de projeto.
