const chatBox = document.getElementById("chatBox");
const nextButton = document.getElementById("nextButton");
const music = document.getElementById("music");

const messages = [
  { name: "Jendral", text: "Hiiiii, Galak ❤️", type: "jendral" },
  { name: "Galak", text: "Hiiiii, Jendral 😚", type: "galak" },

  { name: "Jendral", text: "Do you know what day it is today?", type: "jendral" },
  { name: "Galak", text: "Hmm... just a normal day? 👀", type: "galak" },

  { name: "Jendral", text: "Nope. Today is a special day for us. ❤️", type: "jendral" },
  { name: "Galak", text: "I'm excited ❤️", type: "galak" },

  { name: "Jendral", text: "I want to send you something...", type: "jendral" },
  { name: "Jendral", image: "jendral.jpg", type: "jendral" },

  { name: "Galak", text: "Holy shit ❤️ You look so handsome!", type: "galak" },
  { name: "Galak", text: "Now it's my turn 😌", type: "galak" },
  { name: "Galak", image: "galak.jpg", type: "galak" },

  { name: "Jendral", text: "You're so beautiful. ❤️", type: "jendral" },
  { name: "Galak", text: "Hehehe, so are you. ❤️", type: "galak" },

  { name: "Jendral", text: "Being with you for a year has taught me that love can feel so different. ❤️", type: "jendral" },
  { name: "Galak", text: "I hope we can keep making many more beautiful memories together. 🥹❤️", type: "galak" },

  { name: "Jendral", text: "Happy Anniversary, Galak. ❤️", type: "jendral" },
  { name: "Galak", text: "Happy Anniversary, Jendral. ❤️", type: "galak" }
];

let currentMessage = 0;

nextButton.addEventListener("click", function () {
  if (currentMessage < messages.length) {

    const message = messages[currentMessage];

    const messageElement = document.createElement("div");
    messageElement.classList.add("message", message.type);

    const nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.textContent = message.name;

    const bubbleElement = document.createElement("div");
    bubbleElement.classList.add("bubble");

    if (message.image) {
      const image = document.createElement("img");
      image.src = message.image;
      image.alt = message.name;
      bubbleElement.appendChild(image);
    } else {
      bubbleElement.textContent = message.text;
    }

    messageElement.appendChild(nameElement);
    messageElement.appendChild(bubbleElement);

    chatBox.appendChild(messageElement);

    currentMessage++;

    chatBox.scrollTop = chatBox.scrollHeight;

    music.play();

    if (currentMessage >= messages.length) {
      nextButton.textContent = "The End ♡";
      nextButton.disabled = true;
    }
  }
});
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {
  music.play();
  musicButton.textContent = "🎵 Playing...";
});
const homeScreen = document.getElementById("homeScreen");
const chatScreen = document.getElementById("chatScreen");
const openChat = document.getElementById("openChat");

openChat.addEventListener("click", function () {
  homeScreen.style.display = "none";
  chatScreen.style.display = "flex";

  music.play().catch(() => {});
});
