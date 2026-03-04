// Track the current word
let currentWord = null;

// Load progress from localStorage
let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || [];
let streak = parseInt(localStorage.getItem("streak")) || 0;
let lastOpenDate = localStorage.getItem("lastOpenDate");

// Update UI with saved progress
updateProgressUI();
updateStreak();

function showRandomWord() {
    document.getElementById("loader").style.display = "block";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex];

        document.getElementById("word").innerText = currentWord.word;
        document.getElementById("meaning").innerText = currentWord.meaning;
        document.getElementById("example").innerText = "Example: " + currentWord.example;
        document.getElementById("synonyms").innerText = "Synonyms: " + currentWord.synonyms.join(", ");
        document.getElementById("antonyms").innerText = "Antonyms: " + currentWord.antonyms.join(", ");

        // Hide loader
        document.getElementById("loader").style.display = "none";

        // Trigger fade animation again
        document.querySelector(".word-box").classList.remove("fade");
        void document.querySelector(".word-box").offsetWidth; 
        document.querySelector(".word-box").classList.add("fade");
    }, 400);
}

// Mark a word as learned
function markAsLearned() {
    if (!currentWord) return;

    if (!learnedWords.includes(currentWord.word)) {
        learnedWords.push(currentWord.word);

        // Save progress
        localStorage.setItem("learnedWords", JSON.stringify(learnedWords));

        updateProgressUI();
    }
}

// Update learned count
function updateProgressUI() {
    document.getElementById("learnedCount").innerText =
        "Learned Words: " + learnedWords.length;
}

// Daily streak system
function updateStreak() {
    const today = new Date().toDateString();

    if (lastOpenDate !== today) {
        // Increase streak if visited yesterday
        if (lastOpenDate === new Date(Date.now() - 86400000).toDateString()) {
            streak++;
        } else {
            streak = 1; // reset streak
        }

        localStorage.setItem("streak", streak);
        localStorage.setItem("lastOpenDate", today);
    }

    document.getElementById("streak").innerText = "Streak: " + streak + " Days";
}
