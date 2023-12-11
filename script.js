console.log('Script loaded');

// Fetch and store tarot deck data from the JSON file
let tarotDeck = [];

fetch('tarotDeck.json')  // Make sure to use the correct path to your JSON file
    .then(response => response.json())
    .then(data => {
        tarotDeck = data;
        console.log('Tarot deck loaded:', tarotDeck); // Add this line to check if data is loaded
    })
    .catch(error => console.error('Error loading tarot deck:', error));

// Function to randomly draw a card from the deck
function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    return tarotDeck[randomIndex];
}

// Function to display the selected card
function displayCard(card) {
    console.log('Displaying card:', card); // Add this line
    const displayElement = document.getElementById('card-display');
    displayElement.innerHTML = `
        <img src="${card.imageUrl}" alt="${card.name}" style="max-width: 100%;">
        <h3>${card.name}</h3>
        <p>${card.interpretation}</p>
    `;
}

// Event listener for the "Draw a Card" button
document.getElementById('draw-card-btn').addEventListener('click', function() {
    const card = drawCard();
    displayCard(card);
});
