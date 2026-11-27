const id1 = "b679f361-ed7f-427b-a503-e8e72ef7cadf";
const id2 = "d8488f72-e899-4068-bd28-81302f91e554";

const player1 = new window.SkaraPlayer("player1", id1);
player1.start();
const player2 = new window.SkaraPlayer("player2", id2);
player2.start();
const player3 = new window.SkaraPlayer("player3", id1);
player3.start();

function waitForVideo(player) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (player?.player?._videoEl) {
        clearInterval(interval);
        resolve(player.player._videoEl);
      }
    }, 100);
  });
}

(async () => {
  const players = [player1, player2, player3];

  for (const currentPlayer of players) {
    const currentVideo = await waitForVideo(currentPlayer);

    currentVideo.addEventListener("play", () => {
      players.forEach((otherPlayer) => {
        if (otherPlayer !== currentPlayer) {
          otherPlayer.player?._videoEl?.pause();
        }
      });
    });
  }
})();
