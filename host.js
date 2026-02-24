// host.js (BASE para Render)
// 1) Pones tu token
// 2) Deploy en Render
// 3) Luego reemplazamos este archivo por tu script definitivo

const http = require("http");

// ✅ Render necesita que escuches un puerto
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("KISABOT🤖 Render online. Host corriendo.\n");
}).listen(PORT, () => console.log("Web alive on port", PORT));

// ✅ Headless
const { HBInit } = require("haxball-headless");

const room = HBInit({
  roomName: "⚪ 🍀 ° FDK | FUTSAL ° 🍀 ⚪ (Render)",
  maxPlayers: 20,
  public: true,
  noPlayer: true,
  token: "TU_TOKEN_AQUI"
});

room.setDefaultStadium("Big");
room.sendAnnouncement("KISABOT🤖 Host levantado en Render ✅", null, 0x00FF00, "bold");

// Anti-crash básico
process.on("uncaughtException", (err) => console.log("uncaughtException:", err));
process.on("unhandledRejection", (err) => console.log("unhandledRejection:", err));
