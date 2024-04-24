// JavaScript for responsive navigation menu
const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for back to top button
const backToTopButton = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// JavaScript for social media links
const socialMediaIcons = document.querySelectorAll('.social-media ul li');

socialMediaIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const platform = icon.querySelector('img').alt.toLowerCase();
        switch (platform) {
            case 'facebook':
                window.open('https://www.facebook.com', '_blank');
                break;
            case 'twitter':
                window.open('https://www.twitter.com', '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com', '_blank');
                break;
            default:
                break;
        }
    });
});
