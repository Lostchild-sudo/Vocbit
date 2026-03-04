const words = [
    { word: "Abandon", meaning: "To leave something behind permanently." },
    { word: "Brief", meaning: "Short in time or length." },
    { word: "Candid", meaning: "Truthful and straightforward." },
    { word: "Diligent", meaning: "Hard-working and careful." }
];

function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selected = words[randomIndex];

    document.getElementById("word").innerText = selected.word;
    document.getElementById("meaning").innerText = selected.meaning;
}
