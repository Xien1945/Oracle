console.log('Script loaded');

// Array of image file names, excluding the landing image
const imageFiles = [
    'back-to-the-drawing-board.jpg',
    'be-intentional.jpg',
    'become-curious.jpg',
    'brainstorm.jpg',
    'choose-authenticity.jpg',
    'clean-up.jpg',
    'do-you.jpg',
    'dont-overthink-it.jpg',
    'express-gratitude.jpg',
    'finetune-and-polish.jpg',
    'get-playful.jpg',
    'get-real.jpg',
    'give-grace.jpg',
    'have-some-faith.jpg',
    'improvise.jpg',
    'keep-going.jpg',
    'know-your-worth.jpg',
    'lean-on-community.jpg',
    'let-it-go.jpg',
    'level-up.jpg',
    'log-off.jpg',
    'move-your-body.jpg',
    'practice.jpg',
    'set-some-boundaries.jpg',
    'show-love.jpg',
    'slow-down.jpg',
    'smell-the-roses.jpg',
    'speak-your-truth.jpg',
    'surrender-your-ego.jpg',
    'trust-the-process.jpg',
    'try-something-new.jpg'
];

// Function to randomly select an image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
}

// Function to display the selected image
function displayImage(imageFileName) {
    const displayElement = document.getElementById('card-display');
    displayElement.innerHTML = `<img src="images/${imageFileName}" alt="Image" onload="sendHeightToParent()" style="max-width: 100%; height: auto;">`;
}

// Function to send the updated height to the parent window
function sendHeightToParent() {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ iframeHeight: height }, 'https://healgoood.com'); // Replace with your Shopify domain
}

// Function to handle button click
function handleButtonClick() {
    const imageFileName = getRandomImage();
    displayImage(imageFileName);

    document.getElementById('card-display').style.display = 'block';
    document.getElementById('landing-image-container').style.display = 'none';
}

// Add a click event listener to the button
document.getElementById('draw-card-btn').addEventListener('click', handleButtonClick);