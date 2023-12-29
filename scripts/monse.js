const toggleModal = (event) => {
    event.preventDefault();
    const passwordInput = document.getElementById("modalPasswordInput");
    console.log(passwordInput.value);
    if (passwordInput.value === "buttholedog") {
        const modal = document.getElementById("password-modal");
        modal.style.display = "none";
        modal.classList.remove('error');
    }else {
        passwordInput.classList.add('error');
        passwordInput.value = "";
    }
}

const form = document.getElementById("passwordForm");
form.addEventListener("submit", toggleModal);

function goToPage(url) {
    window.location.href = url;
}