// Runs only once the browser has checked every field is valid.
// Goes to the thank you page without putting the form details in the URL.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "thank-you.html";
});
