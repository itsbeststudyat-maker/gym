// floating-emojis.js
function createFloatingEmojis(emojis) {
    const emojiCount = 30;

    for (let i = 0; i < emojiCount; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // random horizontal position
        emoji.style.left = Math.random() * 100 + "vw";

        // random speed
        let duration = 6 + Math.random() * 10;
        emoji.style.animationDuration = duration + "s";

        // random size
        emoji.style.fontSize = (20 + Math.random() * 40) + "px";

        // delay start
        emoji.style.animationDelay = Math.random() * 10 + "s";

        document.body.appendChild(emoji);

        // Respawn
        emoji.addEventListener("animationiteration", () => {
            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.animationDuration = (6 + Math.random() * 10) + "s";
            emoji.style.fontSize = (20 + Math.random() * 40) + "px";
        });
    }
}
