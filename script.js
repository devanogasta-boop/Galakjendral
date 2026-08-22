const chatBox = document.getElementById("chatBox");
const nextButton = document.getElementById("nextButton");
const music = document.getElementById("music");

const messages = [
  {
    sender: "Galak",
    type: "galak",
    text: "What is it?"
  },
  {
    sender: "Jendral",
    type: "jendral",
    text: "Do you know what’s precious to me?"
  },
  {
    sender: "Galak",
    type: "galak",
    text: "Your sleep?"
  },
  {
    sender: "Jendral",
    type: "jendral",
    text: "No."
  },
  {
    sender: "Galak",
    type: "galak",
    text: "Your food?"
  },
  {
    sender: "Jendral",
    type: "jendral",
    text: "No, silly."
  },
  {
    sender: "Jendral",
    type: "jendral",
    text: "It’s you. ♡"
  }
];

let currentMessage = 0;

nextButton.addEventListener("click", () => {

  // Start the music after the first click
  music.play().catch(() => {});

  if (currentMessage < messages.length) {

    const message = messages[currentMessage];

    const messageElement = document.createElement("div");
    messageElement.classList.add("message", message.type);

    messageElement.innerHTML = `
      <span class="name">${message.sender}</span>
      <div class="bubble">${message.text}</div>
    `;

    chatBox.appendChild(messageElement);

    currentMessage++;

    // Scroll to the newest message
    messageElement.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  } else {

    nextButton.textContent = "Our story continues ♡";

  }

});
