const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateForm() {
  let isValid = true;

  // 1. Name Validation (Empty check)
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  // 2. Email Validation (Regex pattern)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // 3. Password Validation (Minimum 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  // 4. Enable or Disable Submit Button based on validation status
  submitBtn.disabled = !isValid;
}

// Attach real-time input event listeners
nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);