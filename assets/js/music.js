// Data Spotify
const spotifyData = [
    {
        src: "https://open.spotify.com/embed/track/0h3HfPOl6iBmJveXvK9qc7?si=txWFlnY_Q6GoOLS_GVYqzw",
    },
    {
        src: "https://open.spotify.com/embed/track/45Nh1LwSpviSZ5hDWPFNUo?si=kkMV56PiQ4Ca3g58kX-89w",
    },
    {
        src: "https://open.spotify.com/embed/track/1Oaalx5qRFeK2vUrwGjWWJ?si=yAjkJx55Tn-4SOF60WxqTA",
    }
];

// Data YouTube
const youtubeData = [
    {
        src: "https://www.youtube.com/embed/9qQPubXs3Po",
        title: "Usai Disini"
    },
    {
        src: "https://www.youtube.com/embed/W-7KAyXjpjc",
        title: "Mindless"
    },
    {
        src: "https://www.youtube.com/embed/LC3TDAFwfkE",
        title: "Fake Frnds"
    }
];

// Data Audio Upload
const audioData = [
    {
        src: "../../assets/audio/GrandDeFuture.mp3",
        title: "Grand De Future",
        description: "Musik Orkestra Klasik untuk memandu acara"
    },
    {
        src: "../../assets/audio/GrandOpening.mp3",
        title: "Grand Opening",
        description: "Musik Orkestra Klasik untuk pembukaan acara"
    },
    {
        src: "../../assets/audio/Solo.mp3",
        title: "Solo - RnB type beat",
        description: "Musik dengan aliran RnB"
    },
];

// Fungsi untuk membuat Spotify Cards secara dinamis
function generateSpotifyCards() {
    const gallery = document.getElementById("spotify-gallery");
    gallery.innerHTML = ''; // Kosongkan gallery sebelumnya

    spotifyData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("spotify-card");

        card.innerHTML = `
            <iframe src="${item.src}" width="300" height="80"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;

        gallery.appendChild(card);
    });
}

// Fungsi untuk membuat YouTube Cards secara dinamis
function generateYouTubeCards() {
    const gallery = document.getElementById("youtube-gallery");
    gallery.innerHTML = ''; // Kosongkan gallery sebelumnya

    youtubeData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("youtube-card");

        card.innerHTML = `
            <iframe src="${item.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="${item.src}" target="_blank">${item.title}</a>
        `;

        gallery.appendChild(card);
    });
}

// Memanggil fungsi untuk menampilkan YouTube cards
generateYouTubeCards();


// Fungsi untuk membuat Audio Cards secara dinamis
function generateAudioCards() {
    const gallery = document.getElementById("audio-gallery");
    gallery.innerHTML = ''; // Kosongkan gallery sebelumnya

    audioData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("audio-card");

        card.innerHTML = `
            <audio controls>
                <source src="${item.src}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
            <p>${item.title}</p>
            <p>${item.description}</p>
        `;

        gallery.appendChild(card);
    });
}

// Panggil fungsi untuk menambahkan cards saat halaman dimuat
window.onload = () => {
    generateSpotifyCards();
    generateYouTubeCards();
    generateAudioCards();
};
