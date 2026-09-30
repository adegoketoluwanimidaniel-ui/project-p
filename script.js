const pausePlay =document.querySelector(".play-btn");
const pauseBtn =document.querySelector(".pause-btn");
const volumeIcon = document.getElementById("volume-icon");
const video = document.querySelector("video");
const volumeBtn = document.querySelector(".volume-btn");
const seekSlider = document.getElementById("seekslider");
const volumeSilent = document.getElementById("volume-silent");
const fullscreenBtn = document.querySelector(".fullscreen-btn");
const menuBtn = document.querySelector(".menu-btn");
const timer =document.querySelector(".current-time");
const videoInput = document.getElementById("videoInput");
const selectVideoBtn = document.getElementById("select-video");
const videoPlayer = document.getElementById("videoPlayer");



selectVideoBtn.addEventListener("click", () => {
    videoInput.click();
});



videoInput.addEventListener("change", () => {
    const file = videoInput.files[0];

    if (file) {
        videoPlayer.src = URL.createObjectURL(file);
        videoPlayer.load();
        videoPlayer.play();
    }
});

pausePlay.addEventListener("click", () => {
    video.play();
    pausePlay.style.display = "none";
    pauseBtn.style.display = "block";
  
});

pauseBtn.addEventListener("click", () => {
    video.pause();
    pauseBtn.style.display = "none";
    pausePlay.style.display = "block";
});

volumeBtn.addEventListener("click", () => {
        video.muted = true;
        volumeBtn.style.display = "none";
        volumeSilent.style.display = "block";
});

volumeSilent.addEventListener("click", () => {
     video.muted = false;
    volumeBtn.style.display = "block";
    volumeSilent.style.display = "none";

    
    
    
});

fullscreenBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.querySelector(".video-container").requestFullscreen();
    }
});

menuBtn.addEventListener("click", () => {
    if (document.querySelector(".menu").style.display === "block") {
        document.querySelector(".menu").style.display = "none";
    } else {
        document.querySelector(".menu").style.display = "block";
    }
});

seekSlider.addEventListener("input", () => {
    const seekToTime = video.duration * (seekSlider.value / 100);
    video.currentTime = seekToTime;
});




video.ontimeupdate = () => {
  const mins = Math.floor(video.currentTime / 60);
  const secs = Math.floor(video.currentTime % 60);
  
  // Formats 3 -> "03", 12 -> "12"
  const m = String(mins).padStart(2, '0');
  const s = String(secs).padStart(2, '0');
  
  timer.textContent = `${m}:${s}`;
};