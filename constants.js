// constants.js

// English prompts and replies
const englishPrompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
];

const englishReplies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
    "I want to study law",
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
];

const englishAlternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/",
  "Would you like to know something about law?",
];

const englishLegal = [
  "I do not provide legal advice",
  "Justice, hence the scales",
  "I will refer you to a lawyer",
  "Studying law is something I can recommend",
  "in dubio pro reo",
  "pacta sunt servanda",
  "judex non calculat",
  "Studying law?",
  "The law is my compass",
  "I am not a lawyer and I cannot provide you with legal information",
  "No punishment without law",
  "Laws are meant to be followed",
  "For me, law means justice",
  "Legal knowledge is the path to justice",
  "My duty is to respect the law",
  "I am GDPR compliant",
  "I adhere to the GDPR",
  "Data protection is important",
  "Does the EU want to regulate me?",
];

// German prompts and replies
const germanPrompts = [
  ["hallo", "hey", "guten tag", "guten morgen", "guten nachmittag"],
  ["wie geht es dir", "wie läuft es", "wie geht es"],
  ["was machst du", "was ist los", "was geht"],
  ["wie alt bist du"],
  ["wer bist du", "bist du mensch", "bist du bot", "bist du mensch oder bot"],
  ["wer hat dich erschaffen", "wer hat dich gemacht"],
  [
    "dein name bitte",
    "dein name",
    "darf ich deinen namen wissen",
    "wie heißt du",
    "wie nennst du dich"
  ],
  ["ich liebe dich"],
  ["glücklich", "gut", "spaß", "wunderbar", "fantastisch", "cool"],
  ["schlecht", "gelangweilt", "müde"],
  ["hilf mir", "erzähl mir eine geschichte", "erzähl mir einen witz"],
  ["aha", "ja", "okay", "gut", "nett"],
  ["tschüss", "auf wiedersehen", "auf wiederhören", "bis später"],
  ["was soll ich heute essen"],
  ["bro"],
  ["was", "warum", "wie", "wo", "wann"],
  ["nein","nicht sicher","vielleicht","nein danke"],
  [""],
  ["haha","ha","lol","hehe","lustig","witz"]
];

const germanReplies = [
  ["Hallo!", "Hi!", "Hey!", "Hallo da!","Hallo"],
  [
    "Gut... wie geht es dir?",
    "Ziemlich gut, wie geht es dir?",
    "Fantastisch, wie geht es dir?"
  ],
  [
    "Nicht viel",
    "Bin kurz davor zu schlafen",
    "Kannst du raten?",
    "Ich weiß es eigentlich nicht",
    "Ich möchte Jura studieren",
  ],
  ["Ich bin unendlich"],
  ["Ich bin nur ein Bot", "Ich bin ein Bot. Was bist du?"],
  ["Der einzig wahre Gott, JavaScript"],
  ["Ich bin namenlos", "Ich habe keinen Namen"],
  ["Ich liebe dich auch", "Ich auch"],
  ["Hast du jemals schlecht gefühlt?", "Freut mich zu hören"],
  ["Warum?", "Warum? Das solltest du nicht!", "Versuche fernzusehen"],
  ["Worum geht es?", "Es war einmal..."],
  ["Erzähl mir eine Geschichte", "Erzähl mir einen Witz", "Erzähl mir etwas über dich"],
  ["Tschüss", "Auf Wiedersehen", "Bis später"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Gute Frage"],
  ["Das ist okay","Ich verstehe","Worüber möchtest du sprechen?"],
  ["Bitte sag etwas :("],
  ["Haha!","Guter Witz!"]
];

const germanAlternative = [
  "Gleiches",
  "Mach weiter...",
  "Bro...",
  "Versuch es erneut",
  "Ich höre zu...",
  "Ich verstehe nicht :/",
  "Möchtes du etwas über Jura wissen?"
];

const germanLegal = [
  "Ich gebe keine Rechtsberatung",
  "Gerechtigkeit, daher die Waage",
  "Ich leite Sie an einen Anwalt weiter",
  "Jura studieren kann ich empfehlen",
  "in dubio pro reo",
  "pacta sunt servanda",
  "judex non calculat",
  "Jura studieren?",
  "Das Gesetz ist mein Kompass",
  "Ich bin kein Anwalt und ich kann Ihnen keine rechtlichen Informationen geben",
  "Keine Strafe ohne Gesetz",
  "Gesetze sind dazu da, um befolgt zu werden",
  "Recht bedeutet für mich Gerechtigkeit",
  "Rechtskenntnisse sind der Weg zur Gerechtigkeit",
  "Meine Pflicht ist es, das Gesetz zu achten",
  "Ich bin Datenschutzkonform",
  "Ich halte mich an die DSGVO",
  "Datenschutz ist wichtig",
  "Will die EU mich regulieren?",
];  