const addBtn = document.getElementById("add-btn");
const wordInput = document.getElementById("word-input");
const meaningInput = document.getElementById("meaning-input");
const wordList = document.getElementById("word-list");
const searchBox = document.getElementById("search-box");

let words = JSON.parse(localStorage.getItem("vocbitWords")) || [];

function displayWords(){

wordList.innerHTML="";

const searchValue = searchBox.value.toLowerCase();

words.forEach(function(item,index){

if(item.word.toLowerCase().includes(searchValue)){

const div=document.createElement("div");

div.innerHTML =
"<strong>"+item.word+"</strong> : "+item.meaning+
" <button onclick='deleteWord("+index+")'>Delete</button>";

wordList.appendChild(div);

}

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

function deleteWord(index){

words.splice(index,1);

localStorage.setItem("vocbitWords", JSON.stringify(words));

displayWords();

}

searchBox.addEventListener("input", displayWords);
