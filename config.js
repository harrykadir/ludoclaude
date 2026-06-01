// ============================================================
// LudoClaude - Supabase Configuration
// Replace SUPABASE_ANON_KEY with your key from:
// Supabase Dashboard > Settings > API > anon public key
// ============================================================

const SUPABASE_URL = 'https://foydruwfidujgjgclnvl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZveWRydXdmaWR1amdqZ2NsbnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NzY1NzksImV4cCI6MjA5NTU1MjU3OX0.Vfadgj9U4NnvtFNcJVz1J2Pt5HS6W0_fj8FnhULfKzQ'; // <-- REPLACE THIS

const PLAYER_COLORS = [
  '#e74c3c', // red
  '#3498db', // blue
  '#2ecc71', // green
  '#f39c12', // orange
  '#9b59b6', // purple
  '#1abc9c', // teal
];

const LUDO_QUESTIONS = [
  // ---- FACILE (10) ----
  {
    level: 'easy',
    question: "Quel est le nom de l'assistant IA développé par Anthropic ?",
    options: ["GPT", "Claude", "Gemini", "Copilot"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Claude est développé par quelle entreprise ?",
    options: ["OpenAI", "Google", "Anthropic", "Meta"],
    answer: 2
  },
  {
    level: 'easy',
    question: "Quelle interface permet d'accéder à Claude depuis le terminal ?",
    options: ["Claude Desktop", "Claude CLI", "Claude Code", "Claude API"],
    answer: 2
  },
  {
    level: 'easy',
    question: "Comment s'appelle le principe de sécurité central de Claude ?",
    options: ["AI Safety", "Constitutional AI", "Safe Prompting", "Alignment First"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Claude peut-il générer des images ?",
    options: ["Oui, nativement", "Non, il est text-only", "Seulement avec plugins", "Oui avec Claude Pro"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Quelle est la famille de modèles la plus récente de Claude ?",
    options: ["Claude 2", "Claude 3", "Claude 4", "Claude X"],
    answer: 2
  },
  {
    level: 'easy',
    question: "Que signifie 'context window' pour un LLM ?",
    options: ["L'interface graphique", "La quantité de texte traitable en une fois", "La vitesse de réponse", "Le nombre d'utilisateurs"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Claude Haiku est caractérisé par :",
    options: ["La plus haute intelligence", "La rapidité et le faible coût", "Le plus grand context window", "Les meilleures capacités créatives"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Que peut faire Claude avec des fichiers PDF ?",
    options: ["Rien", "Les lire et analyser leur contenu", "Les modifier directement", "Les convertir en images uniquement"],
    answer: 1
  },
  {
    level: 'easy',
    question: "Quel modèle Claude est le plus puissant pour les tâches complexes ?",
    options: ["Haiku", "Sonnet", "Opus", "Nano"],
    answer: 2
  },

  // ---- MOYEN (10) ----
  {
    level: 'medium',
    question: "Un token correspond approximativement à combien de caractères en anglais ?",
    options: ["1 caractère", "4 caractères", "10 caractères", "1 mot entier"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Quel est le context window de Claude 3.5 Sonnet ?",
    options: ["32k tokens", "100k tokens", "200k tokens", "1M tokens"],
    answer: 2
  },
  {
    level: 'medium',
    question: "Claude.ai est :",
    options: ["Une API", "L'interface web grand public de Claude", "Un modèle spécifique", "Un outil de développement"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Le 'prompt caching' permet de :",
    options: ["Sauvegarder les conversations", "Réduire les coûts en réutilisant des parties du contexte", "Accélérer le rendu", "Stocker les fichiers uploadés"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Qu'est-ce qu'un 'system prompt' ?",
    options: ["Un prompt d'urgence", "Les instructions initiales données à Claude avant la conversation", "Le prompt par défaut", "Un prompt généré automatiquement"],
    answer: 1
  },
  {
    level: 'medium',
    question: "L'API Claude utilise quel format pour les échanges ?",
    options: ["XML", "GraphQL", "REST/JSON", "gRPC"],
    answer: 2
  },
  {
    level: 'medium',
    question: "Qu'est-ce que le 'tool use' (function calling) dans Claude ?",
    options: ["L'utilisation de raccourcis clavier", "La capacité de Claude à appeler des fonctions/outils externes", "Un mode de débogage", "L'accès aux fichiers système"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Claude Opus 4 vs Haiku 4.5 : lequel est le plus rapide ?",
    options: ["Opus 4", "Haiku 4.5", "Ils sont équivalents", "Dépend de la tâche"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Qu'est-ce que 'claude.ai/code' ?",
    options: ["Un éditeur de code en ligne", "L'interface web Claude Code", "La documentation API", "Un repo GitHub"],
    answer: 1
  },
  {
    level: 'medium',
    question: "Le Batch API de Claude permet de :",
    options: ["Traiter plusieurs requêtes en parallèle à coût réduit", "Grouper les conversations", "Sauvegarder l'historique", "Partager des sessions"],
    answer: 0
  },

  // ---- DIFFICILE (10) ----
  {
    level: 'hard',
    question: "Dans Claude Code, qu'est-ce qu'un 'hook' ?",
    options: ["Un plugin tiers", "Un script shell qui s'exécute en réponse à des événements (pre/post tool use)", "Une commande slash", "Un raccourci clavier"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Quelle est la différence entre Claude Code CLI et l'extension VS Code ?",
    options: ["Aucune différence", "Le CLI tourne dans le terminal, l'extension s'intègre dans l'IDE avec même moteur", "L'extension est plus limitée", "Le CLI ne supporte pas les MCP"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Un 'Skill' dans Claude Code est :",
    options: ["Un modèle fine-tuné", "Un workflow orchestré via le Skill tool, invocable par /slash-command", "Une permission système", "Un type de mémoire"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Le context window de 200k tokens représente environ combien de pages A4 ?",
    options: ["~50 pages", "~150 pages", "~500 pages", "~1500 pages"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Qu'est-ce que le 'MCP' (Model Context Protocol) ?",
    options: ["Un protocole de compression", "Un protocole open-source pour connecter Claude à des outils/données externes", "Un format de fichier", "Une méthode d'authentification"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Claude Code peut gérer plusieurs worktrees git en parallèle pour :",
    options: ["Sauvegarder des versions", "Permettre à des agents d'éditer des fichiers sans conflits", "Synchroniser avec GitHub", "Créer des branches automatiquement"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Dans le Workflow SDK de Claude Code, pipeline() vs parallel() : quelle est la différence clé ?",
    options: ["Aucune", "pipeline() n'a pas de barrière entre stages (plus rapide), parallel() attend tous les résultats", "parallel() est plus rapide", "pipeline() est synchrone"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Le 'prompt caching' est automatiquement activé pour les blocs de plus de :",
    options: ["1024 tokens", "2048 tokens", "4096 tokens", "8192 tokens"],
    answer: 0
  },
  {
    level: 'hard',
    question: "Que fait la commande /compact dans Claude Code ?",
    options: ["Compresse les fichiers", "Résume le contexte de conversation pour libérer de la fenêtre contextuelle", "Optimise le code", "Réduit les permissions"],
    answer: 1
  },
  {
    level: 'hard',
    question: "Constitutional AI (CAI) est une approche qui :",
    options: ["Limite les capacités de Claude", "Entraîne Claude à s'auto-critiquer selon des principes constitutionnels définis", "Chiffre les données", "Restreint l'API"],
    answer: 1
  }
];

const TOKEN_ROULETTE_QUESTIONS = [
  { text: "Bonjour !", tokens: 3 },
  { text: "Qu'est-ce que Claude Code ?", tokens: 8 },
  { text: "Explique-moi le concept de context window en 3 phrases.", tokens: 14 },
  { text: "Tu es un assistant IA utile, inoffensif et honnête.", tokens: 13 },
  { text: "Write a Python function to reverse a string.", tokens: 11 },
  { text: "Anthropic a fondé Claude pour créer une IA bénéfique et sûre pour l'humanité.", tokens: 20 },
  { text: "The quick brown fox jumps over the lazy dog.", tokens: 10 },
  { text: "Quelle est la différence entre Opus, Sonnet et Haiku ?", tokens: 14 },
  { text: "def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)", tokens: 22 },
  { text: "Claude peut analyser des images, des PDFs, traiter du code et répondre en plusieurs langues.", tokens: 22 },
  { text: "I", tokens: 1 },
  { text: "Summarize this document in bullet points.", tokens: 8 }
];

const MISCONCEPTIONS_QUESTIONS = [
  {
    statements: [
      "Claude a une mémoire persistante entre toutes les conversations par défaut",
      "Claude peut refuser des demandes qu'il juge non éthiques",
      "Claude est capable de lire et analyser des images",
      "Claude Opus est plus puissant que Claude Haiku"
    ],
    truth: 1, // index 1 est vrai
    explanation: "Par défaut, Claude n'a PAS de mémoire entre les sessions. Chaque conversation commence de zéro. Les autres affirmations sont vraies."
  },
  {
    statements: [
      "Le context window de Claude peut aller jusqu'à 200 000 tokens",
      "Claude peut accéder à Internet en temps réel sans outils",
      "Claude Code peut exécuter des commandes dans le terminal",
      "Claude supporte le 'tool use' (function calling)"
    ],
    truth: 0,
    explanation: "Claude ne peut PAS accéder à Internet nativement - il a besoin d'outils externes. Les autres sont vraies."
  },
  {
    statements: [
      "Anthropic a été fondée en 2021",
      "Claude peut générer des images nativement",
      "Claude 4 est la famille de modèles la plus récente",
      "Constitutional AI est une technique développée par Anthropic"
    ],
    truth: 2,
    explanation: "Claude ne génère PAS d'images nativement. Claude 4 est bien la famille la plus récente. Anthropic a été fondée en 2021 ✓. Constitutional AI ✓."
  },
  {
    statements: [
      "Le prompt caching réduit les coûts pour les longs contextes répétés",
      "Claude Haiku est le modèle le plus intelligent de la gamme",
      "Claude Code peut créer des subagents via le tool Agent",
      "L'API Claude utilise un format REST/JSON"
    ],
    truth: 1,
    explanation: "Haiku est le plus RAPIDE et économique, pas le plus intelligent. Opus est le plus puissant. Les autres sont vraies."
  },
  {
    statements: [
      "MCP signifie Model Context Protocol",
      "Claude peut lire des fichiers PDF joints à la conversation",
      "Le Batch API permet de traiter des requêtes à coût réduit",
      "Claude Code ne fonctionne que sur macOS"
    ],
    truth: 3,
    explanation: "Claude Code fonctionne sur macOS, Windows ET Linux (via WSL). Les 3 premières affirmations sont toutes vraies !"
  },
  {
    statements: [
      "Un token représente approximativement 4 caractères en anglais",
      "Claude peut coder dans plus de 50 langages de programmation",
      "Le system prompt est envoyé avant la conversation utilisateur",
      "Claude Sonnet 4.6 a un context window de 50k tokens"
    ],
    truth: 3,
    explanation: "Sonnet 4.6 a un context window de 200k tokens, pas 50k. Les 3 premières sont vraies."
  },
  {
    statements: [
      "Claude Code utilise des 'hooks' pour automatiser des actions",
      "Les Skills dans Claude Code sont invocables par des slash-commands",
      "Claude peut analyser et modifier du code dans plusieurs fichiers",
      "Claude ne peut traiter qu'un fichier à la fois"
    ],
    truth: 3,
    explanation: "Claude peut parfaitement traiter et modifier plusieurs fichiers simultanément. Les 3 premières sont vraies."
  },
  {
    statements: [
      "Anthropic utilise RLHF (Reinforcement Learning from Human Feedback)",
      "Claude peut s'exprimer en français, espagnol, mandarin et d'autres langues",
      "Constitutional AI implique que Claude s'auto-critique selon des principes",
      "Claude Opus coûte moins cher que Haiku à l'utilisation"
    ],
    truth: 3,
    explanation: "Opus est le modèle le plus cher, Haiku le moins cher. Les 3 premières sont vraies."
  },
  {
    statements: [
      "Le Workflow SDK de Claude Code supporte des boucles et conditions",
      "pipeline() dans le SDK est plus rapide que parallel() pour du multi-stage",
      "Les worktrees git permettent aux agents de travailler sans conflits",
      "Claude peut créer et modifier des fichiers uniquement texte"
    ],
    truth: 3,
    explanation: "Claude peut créer/modifier tout type de fichier (code, images base64, etc.). Les 3 premières sont vraies."
  },
  {
    statements: [
      "La commande /compact résume le contexte pour libérer la fenêtre",
      "Claude Code s'intègre avec VS Code et JetBrains",
      "Les modèles Claude 4 ont été publiés après ceux de la série Claude 3",
      "Claude ne peut pas appeler d'APIs externes sans code"
    ],
    truth: 3,
    explanation: "Avec tool use / MCP, Claude peut orchestrer des appels à des APIs externes. Les 3 premières sont vraies."
  }
];
