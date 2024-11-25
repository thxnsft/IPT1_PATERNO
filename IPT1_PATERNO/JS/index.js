// Toggle Navbar for Mobile (Hamburger Menu)
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.textContent = '↑';

document.body.appendChild(scrollToTopButton);

// Show or Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Social Media Icons Hover Effect
const socialMediaIcons = document.querySelectorAll('.social-media a');
socialMediaIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});
