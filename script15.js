document.addEventListener("DOMContentLoaded", () => {
  const messagesDiv = document.getElementById("messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Predefined responses
  const responses = {
    "hello": "Hi there! How can I assist you?",
    "hi": "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "bye": "Goodbye! Have a great day!",
    "good morning": "Good morning! How can I assist you today?",
    "good evening": "Good evening! What can I help you with?",
    "what is your name": "My Name Is Sadil Nethwan, here to assist you.",
    "what can you do": "I can answer your questions, chat with you, and assist with simple tasks.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "good night": "Good Night... See you tomorrow...",
    "default": "I'm not sure how to respond to that. Can you rephrase?"
  };

  // Append a message to the chat
  function appendMessage(content, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = content;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  // Handle user input and bot responses
  function handleMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if (userText) {
      appendMessage(userInput.value, "user");
      userInput.value = "";

      let botResponse;
      if (userText === "what is the time now") {
        const date = new Date();
        botResponse = `The current time is ${date.toLocaleTimeString()}.`;
      } else if (userText === "what is today date") {
        const date = new Date();
        botResponse = `Today's date is ${date.toLocaleDateString()}.`;
      } else {
        botResponse = responses[userText] || responses["default"];
      }

      setTimeout(() => appendMessage(botResponse, "bot"), 500);
    }
  }

  // Event listeners for send button and Enter key
  sendButton.addEventListener("click", handleMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
  });
});
