const toggleButton = document.querySelector(".btn_Rule");
const contentBox = document.querySelector('#contentBox');

toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the content box
    contentBox.style.display = (contentBox.style.display === 'none') ? 'block' : 'none';
});