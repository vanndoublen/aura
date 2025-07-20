export const PROJECT_TEMPLATES = [
  {
    emoji: "✍️",
    title: "AI Story Reader & Dictionary",
    prompt:
      "Build the story reading page: generate personalized Chinese stories (mock data), make words clickable for pop-up definitions, pinyin, and an 'Add to Dictionary' button. Include a list of past stories.",
  },
  {
    emoji: "📚",
    title: "Dynamic Chinese Dictionary",
    prompt:
      "Create the dictionary page: list saved Chinese words with Hanzi, Pinyin, and English. Add features for custom folders, search, and 'mastered/needs review' status for vocabulary.",
  },
  {
    emoji: "🎯",
    title: "Personalized Chinese Quizzes",
    prompt:
      "Develop the quiz page: simulate generation of 5-10 question quizzes tailored to proficiency/interests (mock data), display questions (MCQ/Fill-in-Blank), provide immediate feedback and a score.",
  },
  {
    emoji: "👤",
    title: "User Onboarding & Profile",
    prompt:
      "Implement user onboarding with account creation, cultural preference profiling (mock Qloo), and a Chinese proficiency assessment test. Add a profile page to track progress.",
  },
] as const;