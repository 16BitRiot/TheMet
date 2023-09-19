// taskOrganizer.js

class TaskOrganizer {
    // ... (previously defined code)
  
    createElements() {
      // Create img element
      let picture = document.createElement('img');
      picture.src = this.pageInfo.picURL;
      picture.onclick = function() {
        window.open(this.pageInfo.picURL, '_blank');
      };            
      picture.id = 'picture';
      picture.style.width = '50%';
      picture.style.height = '100%';
      picture.style.objectFit = 'contain';
      picture.style.marginRight = '10px';
      picture.style.border = '1px solid #a6a6a6';
  
      // Create div element
      let info = document.createElement('div');
      info.id = 'info';
      info.style.width = '50%';
      info.style.height = '100%';
      info.style.backgroundColor = '#e6e6e6';
      info.style.padding = '10px';
      info.style.textAlign = 'left';
      info.style.border = '1px solid #a6a6a6';
  
      // Create h2 element
      let title = document.createElement('h2');
      title.innerHTML = this.pageInfo.title;
      title.style.fontSize = '1.5em';
      title.style.lineHeight = '1.2';
      title.style.margin = '0';
      title.style.padding = '5px';
  
      // Create h3 element
      let artistName = document.createElement('h3');
      artistName.innerHTML = this.pageInfo.artistName;
      artistName.style.fontSize = '1.2em';
      artistName.style.lineHeight = '1.2';
      artistName.style.margin = '0';
      artistName.style.padding = '5px';
  
      // Create p elements
      let lifeSpan = document.createElement('p');
      lifeSpan.innerHTML = this.pageInfo.lifeSpan;
      lifeSpan.style.fontSize = '1em';
      lifeSpan.style.lineHeight = '1.2';
      lifeSpan.style.margin = '0';
      lifeSpan.style.padding = '5px';
  
      let medium = document.createElement('p');
      medium.innerHTML = this.pageInfo.medium;
      medium.style.fontSize = '1em';
      medium.style.lineHeight = '1.2';
      medium.style.margin = '0';
      medium.style.padding = '5px';
  
      let dimensions = document.createElement('p');
      dimensions.innerHTML = this.pageInfo.dimensions;
      dimensions.style.fontSize = '1em';
      dimensions.style.lineHeight = '1.2';
      dimensions.style.margin = '0';
      dimensions.style.padding = '5px';
  
      // Create an "artbox" div to hold picture and info box
      let artBox = document.createElement('div')
      artBox.setAttribute('id', 'artbox')
      artBox.style.width = '50%';
      artBox.style.height = '50%';
      artBox.style.alignItems = 'center';
  
      // Append elements to the display div
      info.appendChild(title);
      info.appendChild(artistName);
      info.appendChild(lifeSpan);
      info.appendChild(medium);
      info.appendChild(dimensions);
      artBox.appendChild(picture);
      artBox.appendChild(info);
      this.display.appendChild(artBox);
    }
  }
  
  // Create an instance of TaskOrganizer and start the task handling
  const taskOrganizer = new TaskOrganizer();
  