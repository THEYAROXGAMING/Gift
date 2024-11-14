// Function to reveal the birthday message when the button is clicked
document.getElementById('reveal-btn').addEventListener('click', function() {
    document.getElementById('birthday-message').style.display = 'block';  // Show the birthday message
    document.getElementById('reveal-btn').style.display = 'none';  // Hide the reveal button after click
});

// Function to display the user's input message
function displayMessage() {
    const userMessage = document.getElementById('message-input').value;
    document.getElementById('personal-message').textContent = userMessage;
    document.getElementById('message-input').value = '';  // Clear the input field
}

// Function to play the birthday song sound
document.getElementById('play-audio').addEventListener('click', function() {
    const audio = document.getElementById('birthday-audio');
    audio.play();
});

// Function to mute/unmute the audio
let isMuted = false;  // Track the mute state
document.getElementById('mute-button').addEventListener('click', function() {
    const audio = document.getElementById('birthday-audio');
    if (isMuted) {
        audio.muted = false;  // Unmute the audio
        isMuted = false;
        this.textContent = 'Mute';  // Change button text to "Mute"
    } else {
        audio.muted = true;  // Mute the audio
        isMuted = true;
        this.textContent = 'Unmute';  // Change button text to "Unmute"
    }
});
