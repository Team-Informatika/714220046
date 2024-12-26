// Menunggu halaman sepenuhnya dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function () {
    // Memilih elemen grid untuk masonr
    const grid = document.querySelector('.masonry-gallery');
    
    // Jika elemen ditemukan, inisialisasi Masonry
    if (grid) {
        const masonry = new Masonry(grid, {
            itemSelector: 'img',        // Selector untuk item grid
            columnWidth: '.masonry-gallery',  // Lebar kolom grid
            percentPosition: true,      // Menyusun elemen dengan persentase
            gutter: 15                  // Jarak antar elemen
        });

        // Menggunakan library imagesLoaded untuk memastikan layout setelah gambar dimuat
        const imagesLoaded = window.imagesLoaded || require('imagesloaded');
        imagesLoaded(grid).on('progress', function() {
            masonry.layout(); // Menyusun ulang layout jika gambar baru dimuat
        });
    }
});
