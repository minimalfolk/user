// script.js

// Get modal element
var modal = document.getElementById("profile-modal");

// Get open modal button
var profileIcon = document.getElementById("profile-icon");

// Get close button
var closeModal = document.getElementById("close-modal");

// Listen for open click
profileIcon.addEventListener("click", openModal);

// Listen for close click
closeModal.addEventListener("click", closeModalFunction);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModalFunction() {
  modal.style.display = "none";
}

// Close modal if outside click
window.addEventListener("click", outsideClick);

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
