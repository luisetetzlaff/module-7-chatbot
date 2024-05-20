document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });

  // Language change event listener
  const englishLanguageSelect = document.getElementById("english-button");
  englishLanguageSelect.addEventListener("click", (e) => {
    currentLanguage = "english";
    inputField.placeholder = "Say something...";
  });
  const germanLanguageSelect = document.getElementById("german-button");
  germanLanguageSelect.addEventListener("click", (e) => {
    currentLanguage = "german";
    inputField.placeholder = "Sagen Sie etwas...";
  });
});

let currentLanguage = "english"; // Default language

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\säöüß]/gi, "").replace(/[\d]/gi, "").trim();

  if (currentLanguage === "german") {
    if (compare(germanPrompts, germanReplies, currentLanguage, text)) {
      product = compare(germanPrompts, germanReplies, currentLanguage, text);
    } else if (text.match(/danke/gi)) {
      product = "Bitte schön!";
    } else if (text.match(/(recht|jura|anwalt|gerechtigkeit|studieren|DSGVO|datenschutz|regulieren)/gi)) {
      product = germanLegal[Math.floor(Math.random() * germanLegal.length)];
    } else {
      product = germanAlternative[Math.floor(Math.random() * germanAlternative.length)];
    }
  } else {
    if (compare(englishPrompts, englishReplies, currentLanguage, text)) {
      product = compare(englishPrompts, englishReplies, currentLanguage, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!";
    } else if (text.match(/(law|jurisprudence|lawyer|justice|study|GDPR|data protection|regulate)/gi)) {
      product = englishLegal[Math.floor(Math.random() * englishLegal.length)];
    } else {
      product = englishAlternative[Math.floor(Math.random() * englishAlternative.length)];
    }
  }
  addChat(input, product, currentLanguage); // Pass currentLanguage as an argument
}

function compare(promptsArray, repliesArray, language, string) {
  let reply;
  let replyFound = false;
  // Loop over the prompts array of the selected language
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        // If a match is found, retrieve the replies for that prompt
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product, language) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "Bot_law_mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";

  // Set language-specific text for "typing..." message
  if (language === "german") {
    botText.innerText = "Schreibt...";
  } else {
    botText.innerText = "Typing...";
  }

  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product);
  }, 2000);
}

