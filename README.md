# App Concurso Gamificado – Enfermagem (MVP)

Aplicativo web gamificado para estudo de concursos públicos de **técnico de enfermagem**, inspirado em apps como Duolingo: sessões de questões em formato de cards, sistema de XP, níveis, streak diário e feedback visual rico.

Este documento resume **arquitetura**, **módulos** e **tecnologias** hoje existentes no projeto, para servir de guia a outros agentes/desenvolvedores.

---

## Stack e tecnologias

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Estilo**: TailwindCSS (tema escuro por padrão, mobile-first)
- **Animações**: Framer Motion (transições, microinterações, toasts)
- **Estado global**: Zustand
  - `userStore`: XP, nível, streak, estatísticas, conquistas (persistido em `localStorage`)
  - `sessionStore`: sessão de quiz (questões atuais, respostas, fluxo)
- **Roteamento**: React Router DOM (`/`, `/quiz`, `/resultado`)
- **Ícones**: lucide-react
- **Outros**: canvas-confetti (pronto para efeitos visuais futuros)

Scripts principais (`package.json`):

- `npm run dev` – servidor Vite de desenvolvimento
- `npm run build` – build de produção (saída em `dist/`)
- `npm run preview` – preview local do build

---

## Visão geral da arquitetura

O app é uma **SPA** (Single Page Application) com 3 páginas principais:

- `/` – **DashboardPage**: visão geral de progresso, stats e seleção de modos/filtros
- `/quiz` – **QuizSessionPage**: execução da sessão de perguntas
- `/resultado` – **ResultScreenPage**: tela de “resultado de fase”

Fluxo simplificado:

1. Usuário seleciona modo/filtros no dashboard → `sessionStore.startSession(config)`
2. `/quiz` carrega a lista de questões filtradas/embaralhadas e exibe uma por vez (`QuestionCard`)
3. Ao responder, o app:
   - Atualiza estatísticas (`userStore.recordAnswer`)
   - Concede XP se a resposta estiver correta (`userStore.addXP`)
   - Atualiza streak diário (`userStore.updateStudyDay`)
4. Ao final da sessão, o usuário é enviado para `/resultado`, onde vê desempenho e XP total.

---

## Estrutura de pastas

`src/`

- `App.tsx`
  - Define as rotas principais e envolve tudo em `AppShell`.
- `main.tsx`
  - Bootstrap React + React Router, importa `styles.css`.

### Componentes de layout (`src/components/layout`)

- `AppShell.tsx`
  - Layout base do app:
    - Fundo em gradiente escuro
    - `Header` fixo no topo
    - Container central com largura máxima (`max-w-4xl`)

- `Header.tsx`
  - Cabeçalho com:
    - Branding do app (ícone + título)
    - Indicação rápida de streak (visual)
    - Toggle de tema claro/escuro:
      - Manipula `document.documentElement.classList` (`dark` mode)

### UI genérica (`src/components/ui`)

- `Button.tsx`
  - Botão reutilizável com variantes:
    - `primary`, `secondary`, `ghost`
  - Tamanhos: `sm`, `md`, `lg`
  - Animações de hover/tap via Framer Motion

- `Card.tsx`
  - Container visual para seções/cards:
    - Bordas arredondadas
    - Sombra suave
    - Fundo translúcido em tema escuro

- `ProgressBar.tsx`
  - Barra de progresso (0–100%) com gradiente:
    - Usada para progresso de nível e progresso da sessão

- `StatBadge.tsx`
  - Badge pequeno de estatística (“Respondidas”, “% de acertos”, etc.).

### Componentes de jogo (`src/components/game`)

- `OptionButton.tsx`
  - Representa uma alternativa da questão:
    - Estados visuais: `idle`, `selected`, `correct`, `wrong`
    - Microanimação de clique
    - Exibe letra (A/B/C/…) e texto da opção

- `QuestionCard.tsx`
  - Card principal de pergunta:
    - Mostra enunciado, categoria, dificuldade e XP da questão
    - Usa `OptionButton` para listar alternativas
    - Lida com seleção, bloqueio após resposta e feedback:
      - Acerto: destaque verde + mensagem positiva + explicação
      - Erro: destaque vermelho + explicação
    - Reset automático de seleção quando a questão muda
    - Badge de categoria com rótulo formatado (`formatCategoryLabel`)

- `XPToast.tsx`
  - Toast flutuante central exibindo `+XP` quando o usuário acerta.
  - Animações de entrada/saída via Framer Motion.

- `StreakPill.tsx`
  - Pílula visual com ícone de chama e contador de dias de streak.

### Páginas (`src/pages`)

- `DashboardPage.tsx`
  - Mostra:
    - Avatar/ícone do app
    - Nível atual e XP (`useLevelProgress` + `userStore`)
    - Streak atual (em dias)
    - Estatísticas:
      - Total de questões respondidas
      - % de acertos
      - Melhor streak
    - Modos de estudo:
      - **Treino infinito** (modo `INFINITE`, categoria “GERAL”)
      - **Simulado (10 questões)** (modo `SIMULADO_10`)
    - Filtros rápidos por categoria:
      - Legislação
      - Português
      - Raciocínio lógico
      - Conhecimentos específicos
  - Ao escolher um modo/filtro:
    - Chama `sessionStore.startSession(config)`
    - Navega para `/quiz`

- `QuizSessionPage.tsx`
  - Controla a sessão em andamento:
    - Lê `questions`, `currentIndex`, `config` do `sessionStore`
    - Se não houver sessão configurada, redireciona para `/`
    - Atualiza streak diário ao iniciar (`userStore.updateStudyDay`)
    - Exibe header com:
      - Modo atual (Treino infinito / Simulado)
      - Contador de questão atual / total
      - Barra de progresso da sessão
    - Renderiza `QuestionCard` para a questão atual
    - `handleAnswered`:
      - Atualiza estatísticas (`recordAnswer`)
      - Se acerto:
        - Concede XP (`addXP`)
        - Mostra `XPToast`
      - Armazena resposta em `sessionStore.answers`
    - Botão de navegação:
      - “Próxima questão” ou “Ver resultado” (na última)
      - Ao final, navega para `/resultado`

- `ResultScreenPage.tsx`
  - Tela de conclusão:
    - Mostra total de acertos / total de questões
    - Percentual de acertos (barra de progresso)
    - XP total acumulado do usuário (não apenas da sessão)
    - Botões:
      - “Voltar ao dashboard” (limpa sessão em `sessionStore`)
      - “Jogar novamente” (reaproveita sessão atual ou volta ao quiz)

### Estado global (`src/store`)

- `userStore.ts`
  - Baseado em Zustand com `persist` usando `localStorage`.
  - Estado:
    - `xp`, `level`
    - `streak`, `lastStudyDate`, `bestStreak`
    - `totalAnswered`, `totalCorrect`, `bestCorrectStreak`
    - `achievements` (badges simples como “10 acertos seguidos”, “100 questões respondidas”)
  - Ações principais:
    - `addXP(amount)`:
      - Soma XP ao total
      - Recalcula `level` com base em faixas de XP
    - `recordAnswer(isCorrect)`:
      - Atualiza `totalAnswered`, `totalCorrect`
      - Atualiza `bestCorrectStreak` e conquista “10_acertos_seguidos”
      - Atualiza conquista “100_questoes_respondidas` quando aplicável
    - `updateStudyDay()`:
      - Aplica lógica de streak diário (usa `computeStreak` do util de streak)
      - Atualiza `streak`, `lastStudyDate` e `bestStreak`

- `sessionStore.ts`
  - Gerencia sessão atual de perguntas:
    - `questions`: array selecionado a partir de `QUESTIONS`
    - `currentIndex`: índice da questão atual
    - `answers`: lista de respostas do usuário (`SessionAnswer`)
    - `config`: configuração da sessão (`SessionConfig`: categoria, dificuldade, modo)
    - `isFinished`: flag se a sessão terminou
  - Funções:
    - `startSession(config)`:
      - Filtra `QUESTIONS` conforme config (categoria, dificuldade)
      - Embaralha as questões (`shuffleArray`)
      - Para modo `SIMULADO_10`, limita a 10 questões
      - Zera índice e respostas
    - `submitAnswer(answer)`:
      - Adiciona resposta ao array `answers`
    - `nextQuestion()`:
      - Avança `currentIndex` até o final e marca `isFinished`
    - `resetSession()`:
      - Limpa estado de sessão (usado ao voltar ao dashboard)

### Dados (`src/data`)

- `questions.ts`
  - Array `QUESTIONS: Question[]` com questões mockadas.
  - Categorias atuais (`Category`):
    - `LEGISLACAO`
    - `PORTUGUES`
    - `RACIOCINIO_LOGICO`
    - `CONHECIMENTOS_ESPECIFICOS`
  - Dificuldades:
    - `EASY`, `MEDIUM`, `HARD` com XP aproximado:
      - EASY: 10 XP
      - MEDIUM: 25 XP
      - HARD: 50 XP
  - Conteúdo alinhado a referências atualizadas até **2026**:
    - Legislação do SUS (Lei 8.080/90, 8.142/90)
    - Português contextualizado à prática em saúde
    - Raciocínio lógico básico
    - Conhecimentos específicos de enfermagem:
      - Lei 7.498/1986, Decreto 94.406/1987
      - Código de Ética COFEN 564/2017
      - Fundamentos de enfermagem, sinais vitais, dor como 5º sinal vital
      - Terapêutica medicamentosa, vias IM/SC/IV
      - RDC ANVISA 222/2018 (resíduos, biossegurança)
      - SBV/urgência e emergência, AVE (escala FAST)
      - PNI, imunização, notificação de violência e agravos
      - CME/autoclave, curativos, prevenção de lesão por pressão etc.

### Tipos (`src/types`)

- `Category`, `Difficulty`, `Question`
- `SessionMode`, `SessionConfig`
- `UserStats`, `SessionAnswer`

### Utils (`src/utils`)

- `xp.ts`
  - Funções:
    - `xpToLevel(xp)`: mapeia XP para nível (faixas definidas)
    - `levelProgress(xp)`: retorna `{ level, progress }` (0–100% dentro do nível)
    - `createInitialStats()`: gera estado inicial de `UserStats`

- `streak.ts`
  - Lida com datas de estudo e streak:
    - `isSameDay`, `isYesterday`
    - `computeStreak(currentStreak, lastStudyISO, now?)`:
      - Incrementa, mantém ou reseta streak conforme dia atual x último estudo

- `shuffle.ts`
  - Implementa algoritmo de Fisher–Yates para embaralhar arrays (questões e alternativas).

- `formatCategory.ts`
  - Mapeia `Category` para rótulos legíveis com acentos (“Conhecimentos específicos”, “Raciocínio lógico”, etc.).

### Services (`src/services`)

- `storage.ts`
  - Helper simples para salvar/carregar dados em `localStorage` com prefixo.
  - Atualmente pouco usado, pois a persistência principal é via `zustand/middleware/persist`.

### Hooks (`src/hooks`)

- `useLevelProgress.ts`
  - Hook de conveniência que lê XP do `userStore` e retorna `{ xp, level, progress }`.

---

## Tailwind e tema

- Configuração em `tailwind.config.cjs`:
  - `darkMode: "class"` (alternância via classe `dark` no `<html>`)
  - Cores principais:
    - `primary` (roxo)
    - `secondary` (azul)
    - `success` (verde)
    - `error` (vermelho)
  - Fonte padrão: Poppins

Arquivo global de estilos: `src/styles.css` com `@tailwind base; components; utilities;` e ajustes para tema escuro e `height: 100%`.

---

## Ponto de partida para extensões

Para novos agentes ou desenvolvedores:

- **Adicionar mais questões**:
  - Editar `src/data/questions.ts`, seguindo a interface `Question`.
  - Garantir coerência de categoria, dificuldade, XP e `explanation`.

- **Novos modos de jogo**:
  - Estender `SessionMode` em `src/types/index.ts`.
  - Ajustar `sessionStore` para novos fluxos.
  - Criar novos botões/modos na `DashboardPage`.

- **Ranking local / conquistas visuais**:
  - Usar dados de `userStore` (XP total, streak, achievements).
  - Criar componentes em `src/components/game` ou `src/components/ui` para badges e ranking.

- **Deploy**:
  - Projeto é um SPA estático, pronto para Vercel/Netlify/Cloudflare Pages.
  - Build: `npm run build` → publicar pasta `dist/`.

Este README deve ser o ponto central de referência sobre o estado atual do app e sua arquitetura para qualquer trabalho futuro ou automação via agentes.

