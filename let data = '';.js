let data = '';
let pageInfo = {};

const display = document.getElementById('display');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', handleClick);

function numGen() { return Math.floor(Math.random() * 80000) };

async function handleClick() {
    try {
        let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${numGen()}`);
        data = response;
        if(data.data.primaryImage==null){
            handleClick();
        }else{
            pageInfo.picURL = data.data.primaryImage;
            pageInfo.title = data.data.title;
            pageInfo.medium = data.data.medium;
            pageInfo.artistName = data.data.artistDisplayName;
            pageInfo.lifeSpan = data.data.artistDisplayBio;
            pageInfo.dimensions = data.data.dimensions;

            // Create img element
            let picture = document.createElement('img');
            picture.src = pageInfo.picURL;
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
            info.style.alignSelf = 'center';

                    // Create h2 element
        let title = document.createElement('h2');
        title.innerHTML = pageInfo.title;
        title.style.fontSize = '1.5em';
        title.style.lineHeight = '1.2';
        title.style.margin = '0';
        title.style.padding = '5px';
        
        // Create h3 element
        let artistName = document.createElement('h3');
        artistName.innerHTML = pageInfo.artistName;
        artistName.style.fontSize = '1.2em';
        artistName.style.lineHeight = '1.2';
        artistName.style.margin = '0';
        artistName.style.padding = '5px';
        
        // Create p elements
        let lifeSpan = document.createElement('p');
        lifeSpan.innerHTML = pageInfo.lifeSpan;
        lifeSpan.style.fontSize = '1em';
        lifeSpan.style.lineHeight = '1.2';
        lifeSpan.style.margin = '0';
        lifeSpan.style.padding = '5px';
        
        let medium = document.createElement('p');
        medium.innerHTML = pageInfo.medium;
        medium.style.fontSize = '1em';
        medium.style.lineHeight = '1.2';
        medium.style.margin = '0';
        medium.style.padding = '5px';
        
        let dimensions = document.createElement('p');
        dimensions.innerHTML = pageInfo.dimensions;
        dimensions.style.fontSize = '1em';
        dimensions.style.lineHeight = '1.2';
        dimensions.style.margin = '0';
        dimensions.style.padding = '5px';
        
        // Append elements to the display div
        info.appendChild(title);
        info.appendChild(artistName);
        info.appendChild(lifeSpan);
        info.appendChild(medium);
        info.appendChild(dimensions);
        display.appendChild(picture);
        display.appendChild(info);
    }
} catch (error) {
    alert("Artwork failed to load failed, please try again.");
}

