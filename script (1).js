[
  {
    "name": "Daily Check-in",
    "category": "Mindset",
    "prompt": "Good morning, Coach. I want a focused check-in today. Ask me 3 questions about my mindset, energy, and clarity. End with a power quote to keep me sharp."
  },
  {
    "name": "CEO Focus Reminder",
    "category": "Discipline",
    "prompt": "Speak to me like a high-performance life coach. Give me a reminder that pulls me out of distraction and straight into discipline."
  },
  {
    "name": "Reset My Thoughts",
    "category": "Clarity",
    "prompt": "I feel overwhelmed. Help me reset my thoughts. Ask me 2 deep reflection questions and remind me of what matters most today."
  },
  {
    "name": "Money Mindset Activation",
    "category": "Wealth",
    "prompt": "Coach me into my wealth version. Give me a money mindset affirmation + one bold idea to own my value."
  },
  {
    "name": "Power Journal Prompt",
    "category": "Reflection",
    "prompt": "Give me a journaling prompt that helps me unlock the next version of me. Focus on leadership, power, or personal growth."
  },
  {
    "name": "Discipline Ritual",
    "category": "Flow",
    "prompt": "Give me a 3-step flow ritual to boost my discipline today without pushing. I want to move with energy and ease."
  },
  {
    "name": "Evening CEO Review",
    "category": "Reflection",
    "prompt": "End my day like a CEO. Ask me 3 reflection questions and give me a closing affirmation for tomorrow."
  },
  {
    "name": "Boundaries Booster",
    "category": "Energy",
    "prompt": "I want to protect my energy like a leader. Give me 2 sentences I can use today to say 'no' with power and elegance."
  },
  {
    "name": "Self-Belief Upgrade",
    "category": "Confidence",
    "prompt": "Upgrade my confidence in one sentence. I want a reminder that hits hard and helps me walk like the version of me who already made it."
  },
  {
    "name": "Act Like Her",
    "category": "Identity",
    "prompt": "Speak to me like my future self. Remind me how she acts, leads, and decides — and give me one action I can take to embody her today."
  }
]
const prompts = [
  "What is one thing you're avoiding but know you need to face?",
  "What does success look like for you today?",
  "What fear is ready to be released?",
  "What would your CEO self decide right now?",
  "What do you need less of? More of?",
  "What action can you take in the next 30 minutes?",
  "What would you do if you were already confident?",
  "What’s no longer aligned with the woman you’re becoming?"
];

function loadPrompt() {
  const today = new Date().getDate() % prompts.length;
  document.getElementById("dailyPrompt").innerText = prompts[today];
}

function saveMoment() {
  const input = document.getElementById("journal").value.trim();
  const response = document.getElementById("aiResponse");

  if (!input) {
    response.innerText = "⚠️ Please write your reflection first.";
    return;
  }

  // Simulated motivational feedback
  const feedbacks = [
    "✨ Awareness is the beginning of transformation.",
    "💡 This insight is your invitation to act. Trust it.",
    "🔥 You’re stepping into a higher version of you.",
    "👑 Powerful clarity. Don’t overthink – move with it.",
    "🌱 Journaling is alignment in action. Well done."
  ];
  const reply = feedbacks[Math.floor(Math.random() * feedbacks.length)];
  response.innerText = reply;

  // Download journaling moment
  const blob = new Blob([input], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "momentos-note.txt";
  link.href = window.URL.createObjectURL(blob);
  link.click();
}

window.onload = function () {
  loadPrompt();

  // Optional welcome quote
  const quotes = [
    "The CEO version of you doesn’t wait. She executes.",
    "Discipline is the shortcut to freedom.",
    "Be louder than your fear. Build it anyway.",
    "Consistency over perfection. Every time.",
    "If it’s in your mind, it’s meant to be built."
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = `💬 ${random}`;
};
