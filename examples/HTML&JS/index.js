const id = "41af5fd4-f7d5-4ef9-b10f-1603a175fa5e";
const player = new window.SkaraPlayer("player", id);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
``;
