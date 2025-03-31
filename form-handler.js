document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    const responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "All fields are required!";
        responseMessage.style.color = "red";
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        responseMessage.textContent = "Invalid email address!";
        responseMessage.style.color = "red";
        return;
    }

    responseMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
    responseMessage.style.color = "green";
    this.reset();
});
