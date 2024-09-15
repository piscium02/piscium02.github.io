let currentImageIndex = 0;
const images = [
    "images/myimage.jpg", // Đường dẫn đến ảnh của bạn
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3"
];
let slideshowInterval;

function startSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById("slideshow").src = images[currentImageIndex];
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    const playlistItems = document.querySelectorAll('#playlist li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const song = this.getAttribute('data-src');
            playSong(song);
        });
    });

    function playSong(song) {
        audioSource.src = song;
        audio.load();
        audio.play();
    }
});

playlistContainer.style.display = 'none';

 togglePlaylistButton.addEventListener('click', function() {
        if (playlistContainer.style.display === 'none') {
            playlistContainer.style.display = 'block';
            togglePlaylistButton.textContent = 'Hide Playlist';
        } else {
            playlistContainer.style.display = 'none';
            togglePlaylistButton.textContent = 'Show Playlist';
        }
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const song = this.getAttribute('data-src');
            playSong(song);
        });
    });

    function playSong(song) {
        audioSource.src = song;
        audio.load();
        audio.play();
    };