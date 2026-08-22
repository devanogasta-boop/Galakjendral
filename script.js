const chat = document.getElementById("chat");

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

let index = 0;

function showNextMessage() {
  if (index >= messages.length) return;

  const message = messages[index];

  const bubble = document.createElement("div");
  bubble.classList.add("message", message.type);

  if (message.text) {
    bubble.innerHTML = `
      <strong>${message.name}</strong>
      <div>${message.text}</div>
    `;
  }

  if (message.image) {
    bubble.innerHTML = `
      <strong>${message.name}</strong>
      <img src="${message.image}" alt="${message.name}">
    `;
  }

  chat.appendChild(bubble);

  setTimeout(() => {
    bubble.classList.add("show");
  }, 100);

  index++;

  setTimeout(showNextMessage, 1500);
}

showNextMessage();
