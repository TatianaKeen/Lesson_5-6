document.addEventListener('DOMContentLoaded', function () {
  const videoPlayer = document.getElementById('videoPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const volumeControl = document.getElementById('volumeControl');

  playPauseBtn.addEventListener('click', function () {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });

  stopBtn.addEventListener('click', function () {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });

  volumeControl.addEventListener('input', function (event) {
    videoPlayer.volume = event.target.value;
  })
});
