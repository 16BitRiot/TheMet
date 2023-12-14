class TaskOrganizer {
  constructor() {
    this.pageInfo = {};
    this.display = document.getElementById('display');
    this.startButton = document.querySelector('#startButton');
    this.startButton.addEventListener('click', async () => {
      await this.handleStartClick();
      console.log('HELLO!'); // Added console.log for the button
      // debugger; // Added debugger for the button
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

        // Resize the image and artbox
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const maxWidth = Math.min(0.005 * screenWidth, 300); // 40% of screen width or max 300px
        const maxHeight = Math.min(0.005 * screenHeight, 200); // 40% of screen height or max 200px

        const canvas = document.createElement('canvas');
        const aspectRatio = maxWidth / maxHeight;
        let canvasWidth = maxWidth;
        let canvasHeight = maxWidth / aspectRatio;

        if (canvasHeight > maxHeight) {
          canvasHeight = maxHeight;
          canvasWidth = maxHeight * aspectRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.onload = function () {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          const resizedImageDataURI = canvas.toDataURL();
          artbox.src = resizedImageDataURI;
        };
        image.src = this.pageInfo.picURL;

        this.createElements();
      }
    } catch (error) {
      console.error(error);
      alert("Sorry, the artwork failed to load. Please try again.");
    }
  }

  createElements() {
    // Method to create and display HTML elements based on fetched artwork data
    const artbox = document.createElement('div');
    artbox.id = 'artbox';
    artbox.style.width = '40%'; // Set artbox width to 40%
    artbox.innerHTML = `
      <img src="${this.pageInfo.picURL}" alt="${this.pageInfo.title}" style="width: 100%; height: auto;">
      <div id="info">
        <h2>${this.pageInfo.title}</h2>
        <p>${this.pageInfo.medium}</p>
        <p>${this.pageInfo.artistName}</p>
        <p>${this.pageInfo.lifeSpan}</p>
        <p>${this.pageInfo.dimensions}</p>
      </div>
    `;
    this.display.appendChild(artbox);

    // Add event listener to the image
    const artImage = document.querySelector('#artImage');
    if (artImage) {
      artImage.addEventListener('click', () => {
        // Perform your action here
        console.log('Image clicked!');
      });
    } else {
      console.error('Image element not found');
    }
  }
}

const taskOrganizer = new TaskOrganizer();
export default taskOrganizer;
