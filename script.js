// script.js

const medicationForm = document.getElementById('medicationForm');
const reminderList = document.getElementById('reminderList');

medicationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const medicationName = document.getElementById('medicationName').value;
  const dosage = document.getElementById('dosage').value;
  const frequency = document.getElementById('frequency').value;
  const reminderTime = document.getElementById('reminderTime').value;

  // Store medication data locally (e.g., in browser storage)
  localStorage.setItem(medicationName, JSON.stringify({ dosage, frequency, reminderTime }));

  // Schedule reminder using setTimeout or setInterval
  scheduleReminder(medicationName, reminderTime);

  // Display the reminder in the list
  const listItem = document.createElement('li');
  listItem.textContent = `${medicationName}: ${dosage} ${frequency} at ${reminderTime}`;
  reminderList.appendChild(listItem);

  medicationForm.reset();
});

function scheduleReminder(medicationName, reminderTime) {
  // Convert reminderTime to milliseconds
  const reminderTimeMs = new Date(reminderTime).getTime();

  // Calculate the time difference between now and the reminder time
  const timeDiff = reminderTimeMs - Date.now();

  // Schedule the reminder using setTimeout
  setTimeout(() => {
    // Display a notification or alert
    alert(`Reminder: Take ${medicationName}`);

    // You can also send SMS or email notifications here using a backend server and API integrations.
  }, timeDiff);
}