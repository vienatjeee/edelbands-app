
function generate() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    if (!input.trim()) {
        output.innerText = "Please type something!";
        return;
    }

    // Simuleer AI reactie (echt AI kan later via API)
    output.innerText = "✨ Stay focused. You're building your dream life. ✨";
}
// Show motivational quote on load
window.onload = function () {
  const quotes = [
    "The CEO version of you doesn’t wait. She executes.",
    "Discipline is the shortcut to freedom.",
    "Be louder than your fear. Build it anyway.",
    "Consistency over perfection. Every time.",
    "If it’s in your mind, it’s meant to be built."
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = `💬 ${random}`;
};{
  "name": "Edelbands Companion",
  "short_name": "Edelbands",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "description": "Motivational companion app for ambitious women building their own path with CEO energy.",
  "lang": "en",
  "orientation": "portrait",
  "scope": ".",
  "icons": [
    {
      "src": "favicon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "screenshot1.png",
      "type": "image/png",
      "sizes": "540x960",
      "label": "Daily motivation"
    },
    {
      "src": "screenshot2.png",
      "type": "image/png",
      "sizes": "540x960",
      "label": "CEO Mindset Tools"
    }
  ],
  "categories": ["productivity", "lifestyle", "business"],
  "shortcuts": [
    {
      "name": "Daily Check-in",
      "url": "/checkin",
      "description": "Start your day with intention."
    },
    {
      "name": "CEO Journal",
      "url": "/journal",
      "description": "Reflect and reset like a leader."
    }
  ]
}
