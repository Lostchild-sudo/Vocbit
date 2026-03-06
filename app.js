const words = [
  { word: "abandoned", meaning: "left behind or deserted" },
  { word: "candid", meaning: "truthful and straightforward" },
  { word: "benevolent", meaning: "kind and generous" }
];

const wordList = document.getElementById("word-list");
const addBtn = document.getElementById("add-btn");
const wordInput = document.getElementById("word-input");
const meaningInput = document.getElementById("meaning-input");

function renderWords() {
  wordList.innerHTML = "";

  words.forEach(item => {
    const div = document.createElement("div");
    div.className = "word-card";
    div.innerHTML = `<h3>${item.word}</h3><p>${item.meaning}</p>`;
    wordList.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const word = wordInput.value;
  const meaning = meaningInput.value;

  if(word && meaning){
    words.push({word, meaning});
    renderWords();

    wordInput.value = "";
    meaningInput.value = "";
  }
});

renderWords();
