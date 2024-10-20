// Daftar video yang tersedia (nama file harus sesuai dengan yang ada di direktori)
const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4',
    'video5.mp4',
    'video6.mp4',
    'video7.mp4',
    'video8.mp4'
]; // Sesuaikan dengan nama file video Anda

// Event listener untuk menampilkan catalog
document.getElementById('showCatalog').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const catalogSection = document.getElementById('catalog');
    
    // Tampilkan bagian katalog
    catalogSection.classList.remove('hidden');
    catalogSection.classList.add('show');

    // Trigger opacity transition
    setTimeout(function() {
        catalogSection.classList.remove('opacity-0');
    }, 50); 
});

// Menyimpan video yang sedang diputar
let activeVideo = null;
let activeCard = null;
let videoInterval = null;

// Event listener untuk memutar video saat card diklik
const cards = document.querySelectorAll('.card-square');

cards.forEach(card => {
    card.addEventListener('click', function() {
        // Jika sudah ada video aktif, tidak lakukan apa-apa
        if (activeVideo) {
            return;
        }

        // Buat elemen video baru
        const video = document.createElement('video');
        video.classList.add('video-overlay');
        video.controls = false; // Hilangkan kontrol
        video.autoplay = true; // Autoplay video
        video.muted = false; // Pastikan suara tidak dimute
        video.volume = 1.0; // Set volume penuh

        // Fungsi untuk memilih dan memutar video
        const playRandomVideo = () => {
            // Pilih video secara random yang tidak sedang aktif
            const remainingVideos = videos.filter(v => v !== activeVideo); // Hanya ambil video yang tidak aktif
            const randomVideo = remainingVideos[Math.floor(Math.random() * remainingVideos.length)];

            // Set source video dan tampilkan video
            video.src = `../uploads/${randomVideo}`;
            card.appendChild(video);
            activeVideo = randomVideo; // Simpan video aktif
            activeCard = card; // Simpan card yang sedang aktif
            video.play();  // Video autoplay
        };

        // Panggil fungsi untuk memutar video pertama
        playRandomVideo();

        // Event listener untuk menghapus video setelah selesai
        video.addEventListener('ended', function() {
            card.removeChild(video);  // Hapus video dari card setelah selesai
            activeVideo = null; // Reset video aktif
            activeCard = null; // Reset card aktif
            clearInterval(videoInterval); // Hentikan interval jika video selesai
        });

        // Set interval untuk mengganti video setiap 30 detik
        videoInterval = setInterval(() => {
            if (activeCard) { // Pastikan video masih diputar
                video.currentTime = 0; // Mulai dari awal
                card.removeChild(video); // Hapus video yang lama
                playRandomVideo(); // Putar video baru
            }
        }, 30000); // 30 detik
    });
});
