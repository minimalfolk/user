// Load the saved user profile information from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function() {
  loadProfile();
  loadMemories();
});

// Load profile data from localStorage
function loadProfile() {
  const name = localStorage.getItem('name');
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('profileImage');

  if (name) {
    document.getElementById('name').value = name;
  }
  
  if (username) {
    document.getElementById('username').value = username;
  }

  if (profileImage) {
    document.getElementById('profile-image').src = profileImage;
  }
}

// Handle profile picture upload
function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    document.getElementById('profile-image').src = e.target.result;
    localStorage.setItem('profileImage', e.target.result);
  };
  
  reader.readAsDataURL(file);
}

// Handle form submission for profile edits
document.getElementById('profile-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;

  // Check if the username is available (basic check for existing username)
  if (isUsernameAvailable(username)) {
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);

    alert('Profile updated successfully!');
    loadProfile(); // Reload profile data
  } else {
    alert('Username is already taken, please choose another one.');
  }
});

// Basic check for existing usernames (you can expand this to check with a real database)
function isUsernameAvailable(username) {
  // Simulate existing usernames with an array
  const existingUsernames = ['johnDoe', 'janeDoe', 'admin'];
  
  return !existingUsernames.includes(username);
}

// Load memories from localStorage (if any)
function loadMemories() {
  const memories = JSON.parse(localStorage.getItem('memories')) || [];
  const memoriesList = document.getElementById('memories-list');

  memories.forEach(memory => {
    const memoryElement = document.createElement('div');
    memoryElement.classList.add('memory-card');
    memoryElement.innerHTML = `
      <h3>${memory.category}</h3>
      <p><strong>${memory.topic}</strong></p>
      <p>${memory.details}</p>
    `;
    memoriesList.appendChild(memoryElement);
  });
}
