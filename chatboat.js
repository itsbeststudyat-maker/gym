document.addEventListener("DOMContentLoaded", function() {

    const chatbotHTML = `
  <button id="chatbot-btn">💬</button>
  <div id="chatbox">
    <div id="chat-header">🤖 Fitness Buddy</div>
    <div id="chat-messages"></div>
    <div id="chat-input">
      <input type="text" id="userInput" placeholder="Ask me anything...">
      <button id="sendBtn">Send</button>
    </div>
  </div>
  `;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbox = document.getElementById("chatbox");
    const messages = document.getElementById("chat-messages");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    chatbotBtn.addEventListener("click", () => {
        chatbox.style.display = (chatbox.style.display === "flex") ? "none" : "flex";
    });

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, sender) {
        const msg = document.createElement("div");
        msg.classList.add("message", sender);
        msg.innerText = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;
        addMessage(text, "user");
        userInput.value = "";
        setTimeout(() => {
            let reply = getBotResponse(text);
            addMessage(reply, "bot");
        }, 500);
    }

    function getBotResponse(input) {
        input = input.toLowerCase();

        if (input.includes("breakfast")) return "🥣 A good breakfast for muscle gain: Oats + Milk + Banana + Peanut Butter!";
        if (input.includes("pushup")) return "💪 Beginners can start with 3 sets of 10-15 pushups daily.";
        if (input.includes("motivation")) return "🔥 Stay consistent! Small steps every day lead to big changes.";
        if (input.includes("protein")) return "🍗 Great protein sources: Eggs, Chicken, Paneer, Tofu, Lentils.";
        if (input.includes("fat loss")) return "🏃‍♂️ Focus on cardio + calorie deficit + high protein meals.";
        if (input.includes("water")) return "💧 Drink at least 3-4 liters of water daily.";

        const quotes = [
            "🏋️ Push yourself, because no one else is going to do it for you.",
            "🔥 Fitness is about being better than yesterday.",
            "💪 The body achieves what the mind believes.",
            "🚴 Challenge your limits every day!"
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

});
