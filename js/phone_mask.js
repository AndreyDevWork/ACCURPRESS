import IMask from "imask";

document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");

    const phoneMask = IMask(phoneInput, {
        mask: '{0}-(000)-000-00-00' // Define your desired mask pattern
    });
});