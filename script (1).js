
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
