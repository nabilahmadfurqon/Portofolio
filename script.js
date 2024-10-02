document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupDynamicText();
    setupButtonClick();
    setupScrollEffect();
    setupResponsiveNav();
    setupFormFunctionality();
});

function initializeAnimations() {
    const textContainer = document.querySelector('.text-container');
    const imageContainer = document.querySelector('.image-container');
    const buttonContainer = document.querySelector('.button-container');
    const animationDelay = 500;

    if (textContainer && imageContainer && buttonContainer) {
        setTimeout(() => {
            textContainer.classList.add('show');
            imageContainer.classList.add('show');
            buttonContainer.classList.add('show');
        }, animationDelay);
    } else {
        console.warn('One or more animation containers not found.');
    }
}

function setupDynamicText() {
    const teksArray = [
        "Front End Developer",
        "Web Designer",
        "JavaScript Enthusiast",
        "UI/UX Specialist"
    ];
    let index = 0;

    function gantiTeks() {
        const dynamicTextElement = document.getElementById("dynamicText");
        if (dynamicTextElement) {
            dynamicTextElement.innerText = teksArray[index];
            index = (index + 1) % teksArray.length;
        }
    }

    setInterval(gantiTeks, 2000);
}

function setupButtonClick() {
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    } else {
        console.warn('Button not found.');
    }
}

function setupScrollEffect() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('header-scrolled', window.scrollY > 0);
        });
    } else {
        console.warn('Header not found.');
    }
}

function setupResponsiveNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    } else {
        console.warn('Menu toggle or nav menu not found.');
    }
}

function setupFormFunctionality() {
    const form = document.querySelector('.app-form');
    if (!form) return; // Ensure the form exists

    const cancelButton = form.querySelector('.app-form-button:nth-child(1)');
    const sendButton = form.querySelector('.app-form-button:nth-child(2)');
    const inputs = form.querySelectorAll('.app-form-control');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focused');
            input.classList.remove('error'); // Clear error on focus
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.classList.remove('focused');
                input.classList.add('error'); // Add error if empty
            }
        });
    });

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[placeholder="NAME"]').value.trim();
        const email = form.querySelector('input[placeholder="EMAIL"]').value.trim();
        const contactNo = form.querySelector('input[placeholder="CONTACT NO"]').value.trim();
        const message = form.querySelector('input[placeholder="MESSAGE"]').value.trim();

        const errorMessages = [];
        if (!name) errorMessages.push('Name is required.');
        if (!email) errorMessages.push('Email is required.');
        if (!contactNo) errorMessages.push('Contact No is required.');
        if (!message) errorMessages.push('Message is required.');

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
            return;
        }

        // Simulate loading process
        const loadingMessage = document.createElement('div');
        loadingMessage.textContent = 'Sending...';
        loadingMessage.className = 'loading-message';
        form.appendChild(loadingMessage);

        // Simulate a delay for form submission
        setTimeout(() => {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Contact No:', contactNo);
            console.log('Message:', message);
            
            // Reset the form
            form.reset();
            loadingMessage.remove(); // Remove loading message
            showSuccessMessage('Message sent successfully!');
        }, 2000); // Simulate a 2 second delay
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
    });
}

function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.className = 'success-message';
    document.body.appendChild(successMessage);

    // Animate fade out
    setTimeout(() => {
        successMessage.classList.add('fade-out');
        setTimeout(() => successMessage.remove(), 500); // Remove after animation
    }, 2000); // Show for 2 seconds
}
