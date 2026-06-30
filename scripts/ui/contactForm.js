export function initContactForm(contactForm) {
    if (!contactForm) {
        return;
    }

    const formStatus = contactForm.querySelector(".form-status");
    const requiredFields = contactForm.querySelectorAll("[required]");

    const setFormStatus = (message, isSuccess = false) => {
        if (!formStatus) {
            return;
        }

        formStatus.textContent = message;
        formStatus.classList.toggle("form-status--success", isSuccess);
        formStatus.classList.toggle("form-status--error", !isSuccess);
    };

    requiredFields.forEach((field) => {
        field.addEventListener("input", () => {
            if (formStatus && formStatus.textContent) {
                formStatus.textContent = "";
                formStatus.classList.remove("form-status--success", "form-status--error");
            }
        });
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            setFormStatus("Provjeri obavezna polja prije slanja.");
            contactForm.reportValidity();
            return;
        }

        setFormStatus("Poruka je uspješno poslana. Javit ćemo vam se uskoro.", true);
        contactForm.reset();
    });
}
