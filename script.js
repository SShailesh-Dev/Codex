const form = document.querySelector("#lead-form");
const message = document.querySelector("#form-message");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const concern = (data.get("concern") || "").toString();

  if (!name || !phone || !concern) {
    message.textContent = "Please fill out all fields so we can contact you quickly.";
    message.style.color = "#c62828";
    return;
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) {
    message.textContent = "Please enter a valid phone number.";
    message.style.color = "#c62828";
    return;
  }

  message.textContent = `Thanks ${name}! Your request is in. We'll call you soon.`;
  message.style.color = "#0b8f63";
  form.reset();
});
