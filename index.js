import img from "./img.js";
import Player from "./Player.js";

const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const background = img("test-bg-2.jpg");
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 1920, 1080, 0, 0, 1920, 1080);
  player.draw(ctx);
}

setInterval(game, 1000 / 1000);
