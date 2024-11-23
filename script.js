const facts = [
    "A cat's purr vibrates at a frequency of 25 to 150 Hertz, which can promote bone density and healing.",
    "The Great Wall of China is not visible from space with the naked eye.",
    "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs that was still edible.",
    "A day on Venus is longer than its year.",
    "The fingerprints of koalas are so similar to human fingerprints that they have on occasion been confused at a crime scene.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
    "A single cloud can weigh more than 1 million pounds."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');
const shareBtn = document.getElementById('share-btn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}

function shareFact() {
    if (navigator.share) {
        navigator.share({
            title: 'Fun Fact!',
            text: factDisplay.textContent,
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser. Try copying the fact instead!');
    }
}

newFactBtn.addEventListener('click', getRandomFact);
shareBtn.addEventListener('click', shareFact);

// Display initial random fact
getRandomFact();
