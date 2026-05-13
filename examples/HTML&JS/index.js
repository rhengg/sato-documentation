const id = "b462c7f1-ef56-4a49-8183-d10312ad79ab";
const player = new window.SkaraPlayer("player", id);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());

const fullscreenBtn = document.querySelector("#fullscreen");
fullscreenBtn.addEventListener("click", () => {
  console.log("xx", player);

  player.toggleFullScreen();
});

const muteBtn = document.querySelector("#mute");
muteBtn.addEventListener("click", () => player.mute(true));

const incVolumeBtn = document.querySelector("#incVolume");
incVolumeBtn.addEventListener("click", () => player.incVolume(0.05));

const decVolumeBtn = document.querySelector("#decVolume");
decVolumeBtn.addEventListener("click", () => player.decVolume(0.05));

const seekForwardBtn = document.querySelector("#seekForward");
seekForwardBtn.addEventListener("click", () => player.seekForward(10));

const seekBackwardBtn = document.querySelector("#seekBackward");
seekBackwardBtn.addEventListener("click", () => player.seekBackward(10));
