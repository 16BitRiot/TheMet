import axios from 'https://unpkg.com/axios/dist/axios.js';


class TaskOrganizer {
  constructor() {
    this.pageInfo = {};
    this.display = document.getElementById('display');
    this.startButton = document.querySelector('#startButton');
    this.startButton.addEventListener('click', this.handleStartClick.bind(this));
  }

  numGen() {
    return Math.floor(Math.random() * 80000);
  }

  async handleStartClick() {
    const artbox = this.display.querySelector('#artbox');
    if (artbox) {
      this.display.removeChild(artbox);
    }

    try {
      // Make an Axios GET request to fetch artwork data
      const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.numGen()}`);
      this.data = response;

      // Check if the response is valid
      if (this.data.data.primaryImage === '' || response.status === 404) {
        this.handleStartClick();
      } else {
        // Populate pageInfo with fetched artwork data
        this.pageInfo.picURL = this.data.data.primaryImage;
        this.pageInfo.title = this.data.data.title;
        this.pageInfo.medium = this.data.data.medium;
        this.pageInfo.artistName = this.data.data.artistDisplayName;
        this.pageInfo.lifeSpan = this.data.data.artistDisplayBio;
        this.pageInfo.dimensions = this.data.data.dimensions;

        // Call the method to create and display elements
        this.createElements();
      }
    } catch (error) {
      console.log(error);
      alert("Sorry, the artwork failed to load. Please try again.");
    }
  }

  createElements() {
    // Method to create and display HTML elements based on fetched artwork data
    // ... (rest of the code for creating elements)
  }
}

// Create an instance of TaskOrganizer and start the task handling
const taskOrganizer = new TaskOrganizer();
