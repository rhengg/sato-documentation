const id = "b462c7f1-ef56-4a49-8183-d10312ad79ab";
const player = new window.SkaraPlayer("player", id);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
