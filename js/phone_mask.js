import IMask from "imask";

document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");

    if(phoneInput) {
        const phoneMask = IMask(phoneInput, {
            mask: '{0}-(000)-000-00-00' // Define your desired mask pattern
        });
    }
});