// Selecting elements
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

// Music
const songs = [
      {
            name: 'jacinto-1',
            displayName: 'Electric Chill Machine',
            artist: 'Jacinto Design'
      },
      {
            name: 'jacinto-2',
            displayName: 'Seven Nation Army (Remix)',
            artist: 'Jacinto Design'
      },
      {
            name: 'jacinto-3',
            displayName: 'Goodnight, Disco Queen',
            artist: 'Jacinto Design'
      },
      {
            name: 'metric-1',
            displayName: 'Front Row (Remix)',
            artist: 'Metric/Jacinto Design'
      },
];

// Check if playing
let isPlaying = false;


// Play
function playSong() {
      isPlaying = true;
      playBtn.classList.replace('fa-play', 'fa-pause');
      playBtn.setAttribute('title', 'Pause');
      music.play();
}
// Pause
function pauseSong() {
      isPlaying = false;
      playBtn.classList.replace('fa-pause', 'fa-play');
      playBtn.setAttribute('title', 'Play');
      music.pause();
}

// Play or pause the song
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Title
function loadSong(song) {
      title.textContent = song.displayName;
      artist.textContent = song.artist;
      music.src = `music/${song.name}.mp3`;
      image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Next Song
function nextSong() {
      songIndex++;
      if (songIndex > songs.length - 1) {
            songIndex = 0;
      }
      loadSong(songs[songIndex]);
      playSong();
}

// Previous Song
function prevSong() {
      songIndex--;
      if (songIndex < 0) {
            songIndex = songs.length - 1;
      }
      loadSong(songs[songIndex]);
      playSong();
}

// Select first song
loadSong(songs[songIndex]);

// On clicking the prev button
prevBtn.addEventListener('click', prevSong);

// On clicking the next button
nextBtn.addEventListener('click', nextSong);
