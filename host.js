const http = require("http");
const HaxballJS = require("haxball.js").default;

// Servidor web para Render
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end("KISABOT🤖 Host activo en Render");
}).listen(PORT);

// Inicializar Haxball
HaxballJS().then((HBInit) => {

  const room = HBInit({
    roomName: "⚪ 🍀 ° FDK | FUTSAL ° 🍀 ⚪ (test)",
    maxPlayers: 20,
    public: true,
    noPlayer: true,
    token: "thr1.AAAAAGmeDKQlU9KsO1mvKQ.VGZzMSpndD8"
  });

  room.setDefaultStadium("Big");

  room.onRoomLink = (link) => {
    console.log("Room link:", link);
  };

}).catch(err => console.log("HBInit error:", err));
