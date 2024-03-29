// Import the TaskOrganizer class from taskOrganizer.js
import TaskOrganizer from './taskorganizer.js';

// Create an instance of TaskOrganizer and start the task handling
const taskOrganizer = new TaskOrganizer();

// Use the handleStartClick method from TaskOrganizer when startButton is clicked
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
  taskOrganizer.handleStartClick();
});

