function toggleEditMode() {
  document.getElementById('edit-profile-form').style.display = 'block';
  document.getElementById('user-name').style.display = 'none';
  document.getElementById('user-username').style.display = 'none';
  document.querySelector('button').style.display = 'none';
}

function cancelEdit() {
  document.getElementById('edit-profile-form').style.display = 'none';
  document.getElementById('user-name').style.display = 'inline';
  document.getElementById('user-username').style.display = 'inline';
  document.querySelector('button').style.display = 'inline';
}

function saveChanges() {
  const newName = document.getElementById('edit-name').value;
  const newUsername = document.getElementById('edit-username').value;
  const newPic = document.getElementById('edit-pic').value;

  document.getElementById('user-name').textContent = newName;
  document.getElementById('user-username').textContent = newUsername;
  document.getElementById('profile-picture').src = newPic;

  cancelEdit(); // Close the form after saving
}
