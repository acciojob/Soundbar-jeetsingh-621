 
const buttons = document.querySelectorAll('.btn:not(.stop)');
const stopButton = document.querySelector('.stop');
let currentAudio;
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});
 
stopButton.addEventListener('click', stopSound);
 
function playSound(sound) {
    stopSound(); 
 
 
    currentAudio = document.createElement('audio');
    currentAudio.src = `./sounds/${sound}.mp3`;
    currentAudio.setAttribute('controls', 'controls'); 
    currentAudio.style.display = 'none'; 
    document.body.appendChild(currentAudio);
 
    currentAudio.play();
}
 
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove(); 
    }
}