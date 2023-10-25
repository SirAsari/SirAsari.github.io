document.addEventListener("DOMContentLoaded", function () {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.style.display = "flex";
});

function closeModal() {
    const modalBackground = document.getElementById("modalBackground");
    modalBackground.style.display = "none";
    document.body.classList.remove("modal-open");
}

function updateName() {
    const userName = document.getElementById("userName");
    const nameInput = document.getElementById("nameInput");

    if (nameInput.value.trim() !== "") {
        userName.textContent = nameInput.value;
    }

    closeModal();
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("errorMessage");

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (!isValidEmail(email)) {
        errorMessage.textContent = "Invalid email address.";
        return;
    }

    document.getElementById("outputName").textContent = "Name: " + name;
    document.getElementById("outputEmail").textContent = "Email: " + email;
    document.getElementById("outputMessage").textContent = "Message: " + message;

    document.getElementById("messageForm").reset();
    errorMessage.textContent = "";
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
