
// Update the copyright year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demonstration.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // The browser checks required fields and email format.
    formStatus.textContent =
        "Form validated successfully! Message delivery is not yet configured.";

    // Clear the form.
    contactForm.reset();
});


// CODE EDITOR TYPING ANIMATION

const typingCode = document.getElementById("typing-code");

const codeText = `const developer = {
        name: "Chance Ducote",
        role: "Software QA",
        skills: [
            "Web Development",
            "Testing",
            "Programming"
        ],
        passion: "Building Better Software"
};`;

let charIndex = 0;

const typingSpeed = 22.5;
const pauseDuration = 3000;

// Escape HTML special characters.
function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

// Apply syntax colors to the code.
function highlightCode(text) {

    let escaped = escapeHTML(text);

    return escaped.replace(
        /"[^"]*"|\bconst\b|\bdeveloper\b/g,
        function(match) {

            if (match.startsWith('"')) {
                return `<span class="code-green">${match}</span>`;
            }

            if (match === "const") {
                return `<span class="code-purple">${match}</span>`;
            }

            return `<span class="code-blue">${match}</span>`;
        }
    );
}

function typeCode() {

    if (charIndex < codeText.length) {

        charIndex++;

        // Display the typed text with syntax highlighting.
        typingCode.innerHTML = highlightCode(
            codeText.substring(0, charIndex)
        );

        setTimeout(typeCode, typingSpeed);

    } else {

        setTimeout(() => {
            typingCode.innerHTML = "";
            charIndex = 0;
            typeCode();
        }, pauseDuration);
    }
}

// Start the animation.
typeCode();
