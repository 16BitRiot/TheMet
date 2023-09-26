class TaskOrganizer {
  constructor() {
    this.pageInfo = {};
    this.display = document.getElementById('display');
    this.startButton = document.querySelector('#startButton');
    this.startButton.addEventListener('click', async () => {
      await this.handleStartClick();
      console.log('HELLO!'); // Added console.log for the button
    });
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
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.numGen()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.data = await response.json();

      if (this.data.primaryImage === '' || response.status === 404) {
        this.handleStartClick();
      } else {
        this.pageInfo.picURL = this.data.primaryImage;
        this.pageInfo.title = this.data.title;
        this.pageInfo.medium = this.data.medium;
        this.pageInfo.artistName = this.data.artistDisplayName;
        this.pageInfo.lifeSpan = this.data.artistDisplayBio;
        this.pageInfo.dimensions = this.data.dimensions;

        this.createElements();
      }
    } catch (error) {
      console.error(error);
      alert("Sorry, the artwork failed to load. Please try again.");
    }
  }

  createElements() {
    // Method to create and display HTML elements based on fetched artwork data
    // ... (rest of the code for creating elements)
  }
}

const taskOrganizer = new TaskOrganizer();
