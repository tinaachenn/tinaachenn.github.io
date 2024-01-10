const validateForm = (event) => {
    event.preventDefault();
    const passwordInput = document.getElementById("passwordInput");
    console.log(passwordInput.value);
    if (passwordInput.value === "buttholedog") {
        const modal = document.getElementById("text");
        modal.classList.remove('error');
        window.location.href = "monse.html";
    }else {
        passwordInput.classList.add('error');
        passwordInput.value = "";
    }
}

const form = document.getElementById("passwordForm");
form.addEventListener("submit", validateForm);

function goToPage(url) {
    window.location.href = url;
}

function scaleImage(image) {
    image.style.transform = "scale(1.2)";
}

function resetImage(image) {
    image.style.transform = "scale(1)";
}

// Gifs functions

function changePom(image) {
    image.src = "../images/pom_eyes.png";
}

function resetPom(image) {
    image.src = "../images/pom heart eyes.png";
}

function reveal(image) {
    image.remove();
}