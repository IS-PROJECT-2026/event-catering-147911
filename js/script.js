document.addEventListener("DOMContentLoaded", () => {
    console.log("Event Catering homepage loaded successfully.");

    const bookingLinks = document.querySelectorAll('a[href="#booking"]');

    bookingLinks.forEach((link) => {
        link.addEventListener("click", () => {
            console.log("User selected event booking.");
        });
    });
});