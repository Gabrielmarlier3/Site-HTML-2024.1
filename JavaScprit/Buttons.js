const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');
const menuButtonActive = document.querySelector('.menu-button');

// Function to toggle the menu class (active/inactive)
function toggleMenu() {
    menuOptions.classList.toggle('active');
    menuButtonActive.classList.toggle('active');

}

// Event listener for menu button click
menuButton.addEventListener('click', toggleMenu);

// Event listener for closing the menu on click outside the button
document.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && menuOptions.classList.contains('active')) {
        toggleMenu();
    }
});
