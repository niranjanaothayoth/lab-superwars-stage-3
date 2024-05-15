// Array of Super Heroes and Super Villains names
const playersArray = [
    "Spiderman", "Iron Man", "Batman", "Superman", "Wonder Woman",
    "Joker", "Magneto", "Loki", "Thanos", "Venom",
    "Captain America", "Thor", "Wolverine", "Harley Quinn", "Catwoman",
    "Hulk", "Black Widow", "Deadpool", "Green Goblin", "Lex Luthor"
];

// Function to get random strength
function getRandomStrength() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to initialize players
function initPlayers(playersArray) {
    return playersArray.map((name, index) => ({
        name: name,
        strength: getRandomStrength(),
        image: `images/super-${index + 1}.png`,
        type: index % 2 === 0 ? "hero" : "villain"
    }));
}

// Function to build players HTML
function buildPlayers(players) {
    return players
        .map(player => `
            <div class="player">
                <img src="${player.image}">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>`)
        .join('');
}

// Initializing players
const players = initPlayers(playersArray);

// Building players HTML
const playersElement = document.getElementById('players');
playersElement.innerHTML = buildPlayers(players);
