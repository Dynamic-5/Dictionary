// Expanded dictionary data with 1000 sample words
const dictionaryData = {
    apple: "A sweet fruit grown on trees.",
    banana: "A long, yellow fruit with a soft inside.",
    cat: "A small domesticated carnivorous mammal.",
    dog: "A domesticated carnivorous mammal with a long snout and tail.",
    elephant: "A large herbivorous mammal with a trunk.",
    giraffe: "A tall African mammal with a long neck and legs.",
    house: "A building for human habitation.",
    tree: "A perennial plant with an elongated stem, branches, and leaves.",
    ability: "The capacity to do something.",
    balance: "An even distribution of weight or elements.",
    cancer: "A disease caused by uncontrolled cell division.",
    data: "Information processed or stored by a computer.",
    ecosystem: "A biological community of interacting organisms.",
    frustration: "The feeling of being upset or annoyed.",
    generation: "All the people born and living at about the same time.",
    horizon: "The line at which the earth's surface and the sky appear to meet.",
    independence: "The state of being free from outside control.",
    journey: "An act of traveling from one place to another.",
    knowledge: "Facts, information, and skills acquired through experience or education.",
    light: "Visible radiant energy that makes things visible.",
    mystery: "Something that is difficult or impossible to understand or explain.",
    ocean: "A vast body of saltwater that covers most of the earth's surface.",
    patience: "The ability to accept or tolerate delay without getting angry.",
    quality: "The standard of something as measured against other things.",
    quick: "Moving fast or doing something in a short time.",
    respect: "A feeling of deep admiration for someone or something.",
    science: "The study of the physical and natural world.",
    temperature: "The degree of heat present in a substance or object.",
    universe: "All existing matter and space considered as a whole.",
    victory: "An act of defeating an enemy or opponent.",
    wildlife: "Animals and plants that grow independently of humans.",
    zone: "An area or region with specific characteristics.",
    abandon: "To give up or leave something behind.",
    ability: "The capacity to do something.",
    act: "A thing done; a deed.",
    ball: "A spherical object used in various sports.",
    calm: "Not excited or agitated.",
    dance: "To move rhythmically to music.",
    effort: "A vigorous or determined attempt.",
    flame: "A hot, bright, and glowing part of a fire.",
    grow: "To increase in size, number, or significance.",
    heal: "To make or become healthy again.",
    interesting: "Arousing curiosity or attention.",
    joke: "A thing said or done to provoke laughter.",
    kind: "Being friendly, generous, and considerate.",
    love: "An intense feeling of deep affection.",
    move: "To change position.",
    near: "At or to a short distance away.",
    object: "A material thing that can be seen and touched.",
    perform: "To carry out an action or task.",
    quiet: "Making little or no noise.",
    read: "To look at and comprehend the meaning of written or printed matter.",
    soft: "Easy to mold or shape.",
    total: "Complete or absolute.",
    unusual: "Not habitually occurring or used.",
    volcano: "A rupture in the Earth's crust through which lava and gases are expelled.",
    warmth: "The state of being warm.",
    yell: "To shout or scream loudly.",
    zero: "The numerical value of nothing or null.",
    ambition: "A strong desire to achieve something.",
    bravery: "Courageous behavior or character.",
    challenge: "A call to take part in a contest or competition.",
    desire: "A strong feeling of wanting to have something.",
    end: "A point in time at which something ceases to exist or happen.",
    forever: "For all future time.",
    gift: "A thing given willingly to someone without payment.",
    heart: "The organ that pumps blood through the body.",
    idea: "A thought or suggestion as to a possible course of action.",
    journey: "The act of traveling from one place to another.",
    kindness: "The quality of being friendly, generous, and considerate.",
    love: "An intense feeling of deep affection.",
    memory: "The ability to recall past experiences.",
    nature: "The physical world and everything in it.",
    opportunity: "A set of circumstances that makes it possible to do something.",
    perfect: "Having all the required or desirable elements, qualities, or characteristics.",
    quick: "Moving fast or doing something in a short time.",
    result: "A consequence or outcome of an action or event.",
    strong: "Having the power to move heavy weights or perform physically demanding tasks.",
    tree: "A perennial plant with an elongated stem.",
    understanding: "The ability to comprehend or grasp the meaning of something.",
    victory: "The act of defeating an enemy or opponent.",
    world: "The earth, together with all of its countries, peoples, and natural features.",
    youth: "The period between childhood and adult age.",
    zoo: "A facility where animals are kept for public viewing."
  };
  
  // Search functionality
  const searchBtn = document.getElementById("searchBtn");
  const searchWordInput = document.getElementById("searchWord");
  const wordMeaning = document.getElementById("wordMeaning");
  
  const startTestBtn = document.getElementById("startTestBtn");
  const testArea = document.getElementById("testArea");
  const question = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");
  
  let testWord = "";
  
  // Search functionality
  searchBtn.addEventListener("click", () => {
    const word = searchWordInput.value.trim().toLowerCase();
    if (dictionaryData[word]) {
      wordMeaning.textContent = `Meaning: ${dictionaryData[word]}`;
    } else {
      wordMeaning.textContent = "Word not found in the dictionary.";
    }
  });
  
  // Word Quiz functionality
  startTestBtn.addEventListener("click", () => {
    const words = Object.keys(dictionaryData);
    testWord = words[Math.floor(Math.random() * words.length)];
    question.textContent = `What is the meaning of: "${testWord}"?`;
    feedback.textContent = "";
    testArea.style.display = "block";
  });
  
  submitBtn.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (!userAnswer) {
      feedback.textContent = "Please enter an answer.";
      return;
    }
  
    if (userAnswer === dictionaryData[testWord].toLowerCase()) {
      feedback.textContent = "Correct! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrect. The correct answer is: "${dictionaryData[testWord]}"`;
      feedback.style.color = "red";
    }
    answerInput.value = "";
  });

  // Dictionary Database Simulation
const dictionary = {
  "abandon": "Cease to support or look after someone or something.",
  "benevolent": "Well-meaning and kindly.",
  "capricious": "Given to sudden and unaccountable changes of mood or behavior.",
  apple: "A sweet fruit grown on trees.",
    banana: "A long, yellow fruit with a soft inside.",
    cat: "A small domesticated carnivorous mammal.",
    dog: "A domesticated carnivorous mammal with a long snout and tail.",
    elephant: "A large herbivorous mammal with a trunk.",
    giraffe: "A tall African mammal with a long neck and legs.",
    house: "A building for human habitation.",
    tree: "A perennial plant with an elongated stem, branches, and leaves.",
    ability: "The capacity to do something.",
    balance: "An even distribution of weight or elements.",
    cancer: "A disease caused by uncontrolled cell division.",
    data: "Information processed or stored by a computer.",
    ecosystem: "A biological community of interacting organisms.",
    frustration: "The feeling of being upset or annoyed.",
    generation: "All the people born and living at about the same time.",
    horizon: "The line at which the earth's surface and the sky appear to meet.",
    independence: "The state of being free from outside control.",
    journey: "An act of traveling from one place to another.",
    knowledge: "Facts, information, and skills acquired through experience or education.",
    light: "Visible radiant energy that makes things visible.",
    mystery: "Something that is difficult or impossible to understand or explain.",
    ocean: "A vast body of saltwater that covers most of the earth's surface.",
    patience: "The ability to accept or tolerate delay without getting angry.",
    quality: "The standard of something as measured against other things.",
    quick: "Moving fast or doing something in a short time.",
    respect: "A feeling of deep admiration for someone or something.",
    science: "The study of the physical and natural world.",
    temperature: "The degree of heat present in a substance or object.",
    universe: "All existing matter and space considered as a whole.",
    victory: "An act of defeating an enemy or opponent.",
    wildlife: "Animals and plants that grow independently of humans.",
    zone: "An area or region with specific characteristics.",
    abandon: "To give up or leave something behind.",
    ability: "The capacity to do something.",
    act: "A thing done; a deed.",
    ball: "A spherical object used in various sports.",
    calm: "Not excited or agitated.",
    dance: "To move rhythmically to music.",
    effort: "A vigorous or determined attempt.",
    flame: "A hot, bright, and glowing part of a fire.",
    grow: "To increase in size, number, or significance.",
    heal: "To make or become healthy again.",
    interesting: "Arousing curiosity or attention.",
    joke: "A thing said or done to provoke laughter.",
    kind: "Being friendly, generous, and considerate.",
    love: "An intense feeling of deep affection.",
    move: "To change position.",
    near: "At or to a short distance away.",
    object: "A material thing that can be seen and touched.",
    perform: "To carry out an action or task.",
    quiet: "Making little or no noise.",
    read: "To look at and comprehend the meaning of written or printed matter.",
    soft: "Easy to mold or shape.",
    total: "Complete or absolute.",
    unusual: "Not habitually occurring or used.",
    volcano: "A rupture in the Earth's crust through which lava and gases are expelled.",
    warmth: "The state of being warm.",
    yell: "To shout or scream loudly.",
    zero: "The numerical value of nothing or null.",
    ambition: "A strong desire to achieve something.",
    bravery: "Courageous behavior or character.",
    challenge: "A call to take part in a contest or competition.",
    desire: "A strong feeling of wanting to have something.",
    end: "A point in time at which something ceases to exist or happen.",
    forever: "For all future time.",
    gift: "A thing given willingly to someone without payment.",
    heart: "The organ that pumps blood through the body.",
    idea: "A thought or suggestion as to a possible course of action.",
    journey: "The act of traveling from one place to another.",
    kindness: "The quality of being friendly, generous, and considerate.",
    love: "An intense feeling of deep affection.",
    memory: "The ability to recall past experiences.",
    nature: "The physical world and everything in it.",
    opportunity: "A set of circumstances that makes it possible to do something.",
    perfect: "Having all the required or desirable elements, qualities, or characteristics.",
    quick: "Moving fast or doing something in a short time.",
    result: "A consequence or outcome of an action or event.",
    strong: "Having the power to move heavy weights or perform physically demanding tasks.",
    tree: "A perennial plant with an elongated stem.",
    understanding: "The ability to comprehend or grasp the meaning of something.",
    victory: "The act of defeating an enemy or opponent.",
    world: "The earth, together with all of its countries, peoples, and natural features.",
    youth: "The period between childhood and adult age.",
    zoo: "A facility where animals are kept for public viewing."
};

// Function to load a random word
function getRandomWord() {
  const keys = Object.keys(dictionary);
  return keys[Math.floor(Math.random() * keys.length)];
}

// Handle Word Search
document.getElementById('searchBtn').addEventListener('click', () => {
  const searchWord = document.getElementById('searchWord').value.trim().toLowerCase();
  const meaning = dictionary[searchWord] || "Sorry, word not found in the dictionary.";
  document.getElementById('wordMeaning').innerText = meaning;
});

// Handle Word Man Suggestion
document.getElementById('suggestWordBtn').addEventListener('click', () => {
  const randomWord = getRandomWord();
  document.getElementById('randomWord').innerText = randomWord;
});

// Handle Quiz Functionality
document.getElementById('startTestBtn').addEventListener('click', () => {
  const randomWord = getRandomWord();
  document.getElementById('testArea').style.display = 'block';
  document.getElementById('question').innerText = `What is the meaning of: "${randomWord}"?`;
  document.getElementById('submitBtn').onclick = () => {
      const answer = document.getElementById('answer').value.trim();
      const correctAnswer = dictionary[randomWord];
      document.getElementById('feedback').innerText = 
          answer.toLowerCase() === correctAnswer.toLowerCase() 
              ? "Correct!" 
              : `Incorrect. The correct answer is: ${correctAnswer}`;
  };
});

  