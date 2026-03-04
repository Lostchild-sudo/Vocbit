function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selected = words[randomIndex];

    document.getElementById("word").innerText = selected.word;
    document.getElementById("meaning").innerText = selected.meaning;

    document.getElementById("example").innerText =
        "Example: " + selected.example;

    document.getElementById("synonyms").innerText =
        "Synonyms: " + selected.synonyms.join(", ");

    document.getElementById("antonyms").innerText =
        "Antonyms: " + selected.antonyms.join(", ");
}
