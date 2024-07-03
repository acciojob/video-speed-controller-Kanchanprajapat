const video = document.getElementById('video');
const playerButton = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressBarFilled = document.querySelector('.progress__filled');
const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

let isPlaying = false;

playerButton.addEventListener('click', togglePlayPause);
progress.addEventListener('input', updateProgressBar);
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', rewindVideo);
forwardButton.addEventListener('click', forwardVideo);

function togglePlayPause() {
  if (isPlaying) {
    video.pause();
    playerButton.dataset.icon = '►';
    isPlaying = false;
  } else {
    video.play();
    playerButton.dataset.icon = '❚ ❚';
    isPlaying = true;
  }
}

function updateProgressBar() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBarFilled.style.flexBasis = `${progressPercentage}%`;
}

function updateVolume() {
  video.volume = volumeInput.value / 100;
}

function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

function rewindVideo() {
  video.currentTime -= 10;
}

function forwardVideo() {
  video.currentTime += 25;
}