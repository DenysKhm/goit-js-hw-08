import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(Number(currentTime));

console.log(typeof currentTime);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
