//your JS code here. If required.
// Define the sound names (file names without extensions)
const soundNames = ["sound1", "sound2", "sound3", "sound4"];

// Get the buttons container
const buttonsContainer = document.getElementById("buttons");

// Function to stop all sounds
const stopSounds = () => {
  soundNames.forEach((sound) => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset to the start
    }
  });
};

// Create buttons dynamically
soundNames.forEach((sound) => {
  // Create a button for the sound
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = sound;

  // Attach a click event to play the sound
  button.addEventListener("click", () => {
    stopSounds(); // Stop other sounds
    const audio = document.getElementById(sound);
    if (audio) {
      audio.play();
    }
  });

  buttonsContainer.appendChild(button);

  // Create an audio element for the sound
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`;
  buttonsContainer.appendChild(audio);
});

// Create a stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";

// Attach a click event to stop all sounds
stopButton.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopButton);
