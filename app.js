const addBtn = document.getElementById("add-btn");
const wordInput = document.getElementById("word-input");
const meaningInput = document.getElementById("meaning-input");
const wordList = document.getElementById("word-list");

let words = JSON.parse(localStorage.getItem("vocbitWords")) || [];

function displayWords() {
  wordList.innerHTML = "";

  words.forEach(function(item) {
    const div = document.createElement("div");
    div.innerHTML = "<strong>" + item.word + "</strong> : " + item.meaning;
    wordList.appendChild(div);
  });
}

addBtn.addEventListener("click", function () {

  const word = wordInput.value;
  const meaning = meaningInput.value;

  if(word === "" || meaning === ""){
    alert("Enter word and meaning");
    return;
  }

  const newWord = { word, meaning };

  words.push(newWord);

  localStorage.setItem("vocbitWords", JSON.stringify(words));

  displayWords();

  wordInput.value = "";
  meaningInput.value = "";

});

displayWords();
