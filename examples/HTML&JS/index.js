const id = "7578284a-9183-40dd-a98f-b2cc149e3a0d";
const player = new window.SkaraPlayer("player", id);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
``;
