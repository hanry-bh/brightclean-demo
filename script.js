// BrightClean Home Services — small interactions, no libraries needed.

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

// Mobile navigation: open/close with a button and close after choosing a link.
if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    });
  });
}

// Keep the footer year current automatically.
const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// DEMO FORM ONLY:
// This intentionally does not send, save, or upload form data.
// For a real client website, connect a secure form service or backend and
// update the notice above the form so it accurately describes what happens.
const inquiryForm = document.querySelector("#inquiry-form");
const formStatus = document.querySelector("#form-status");

if (inquiryForm && formStatus) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!inquiryForm.checkValidity()) {
      inquiryForm.reportValidity();
      return;
    }

    const name = inquiryForm.elements.name.value.trim();
    const service = inquiryForm.elements.service.value;

    // Do not print or transmit the user's email/message: this is just a demo.
    formStatus.textContent =
      `Thanks, ${name || "there"}! This is a demo preview for "${service}". ` +
      "Nothing was sent or saved. A real website would need a configured form service.";
  });
}
