
document.addEventListener('DOMContentLoaded', () => {

    // Toggle Navigation Bar for Mobile View
    const navToggle = document.querySelector('.cta'); // Assuming this is your mobile toggle button
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        // Toggle the class to show or hide the navigation menu
        navLinks.classList.toggle('active');
    });

    // For Sign Up Button (Example)
    const signUpButton = document.querySelector('.cta');
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert("Sign Up Button Clicked!");
    });

    // Hero Section - "Get Started" Button Action
    const getStartedButton = document.querySelector('.hero .hero-text button');
    getStartedButton.addEventListener('click', () => {
        alert('Get Started Clicked!');
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    // Toggle the navigation menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sign Up Button Alert
    const signUpButton = document.querySelector('.cta');
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert("Sign Up Button Clicked!");
    });

    // Hero Section - Get Started Button
    const getStartedButton = document.querySelector('.hero .hero-text button');
    getStartedButton.addEventListener('click', () => {
        alert('Get Started Clicked!');
    });
});

