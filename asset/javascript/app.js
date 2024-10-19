// JavaScript to toggle the hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const exitIcon = document.querySelector('.exit-icon');
    const listDetails = document.querySelector('.list-details');
    const ourMenu = document.querySelector('.our-menu');

    // Show the menu when the hamburger icon is clicked
    menuIcon.addEventListener('click', function () {
        listDetails.classList.add('active');  // Show the menu
        ourMenu.classList.add('active');      // Hide the menu icon and show the exit icon
    });

    // Hide the menu when the exit icon is clicked
    exitIcon.addEventListener('click', function () {
        listDetails.classList.remove('active');  // Hide the menu
        ourMenu.classList.remove('active');      // Show the menu icon and hide the exit icon
    });
});