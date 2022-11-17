

const buttonPlay = document.createElement('div');
buttonPlay.id = 'testandoJS'
buttonPlay.setAttribute('class','video-play-button');
buttonPlay.style.width = '50px';
buttonPlay.style.height = '50px';
buttonPlay.style.background = 'red';


document.body.appendChild(buttonPlay);

function TogglePlay(){

console.log('cliquei no Play');

}

buttonPlay.addEventListener('click',TogglePlay,false);


