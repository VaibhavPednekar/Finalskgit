// const style = document.querySelector('#style');
// const bgColor = document.querySelector('#bgColor');
const playerName = document.querySelector('#playerName');
const baseURL = 'https://avatars.dicebear.com/api';
const my = {
    name: localStorage.getItem('name') || '',
    avatar: localStorage.getItem('avatar') || 'https://api.dicebear.com/7.x/bottts/svg',
};

const settings = document.createElement('script');
const game = document.createElement('script');
settings.src = 'js/settings.js';
game.src = 'js/game.js';
document.body.append(settings, game);

function updateAvatar() {

    my.name = playerName.value;
    localStorage.setItem('name', playerName.value);

 }

window.onload = () => {
    
    if (localStorage.getItem('name')) playerName.setAttribute('value', localStorage.getItem('name'));
};


playerName.addEventListener('change' , updateAvatar );




