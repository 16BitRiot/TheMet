let data = '';
let pageInfo = {};

const display = document.getElementById('display');
const picture = document.getElementById('picture');
const title = document.getElementById('title');
const artistName = document.getElementById('artistName');
const lifeSpan = document.getElementById('lifeSpan');
const medium = document.getElementById('medium');
const dimensions = document.getElementById('dimensions');

const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', handleClick);

function numGen() { return Math.floor(Math.random() * 80000) };

async function handleClick() {
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

    picture.src = pageInfo.picURL;
    title.innerHTML = pageInfo.title;
    artistName.innerHTML = pageInfo.artistName;
    lifeSpan.innerHTML = pageInfo.lifeSpan;
    medium.innerHTML = pageInfo.medium;
    dimensions.innerHTML = pageInfo.dimensions;
    }
}

