document.addEventListener("DOMContentLoaded", () => {
    const masonryGallery = document.getElementById("masonryGallery");

    // Data gambar
    const imageData = [
        { src: "https://t.if.co.id/714220046/assets/img/logo-devteam.png", alt: "Desain Logo-Devteam" },
        { src: "../../assets/img/PosterYudisium.png", alt: "Desain Poster-Yudisium" },
        { src: "../../assets/img/flyer-bootcamp.png", alt: "Desain Flyer Bootcamp" },
        { src: "../../assets/img/flyer-kulum.png", alt: "Desain Flyer Kuliah Umum" },
        { src: "../../assets/img/idcard-yudis.png", alt: "Desain ID Card" },
        { src: "../../assets/img/banner-yudis.png", alt: "Desain Banner" },
        { src: "../../assets/img/clothes-design-whites.jpg", alt: "Desain Baju Putih" },
        { src: "../../assets/img/short-film-thumbnail.jpg", alt: "Thumbnail Short Film" },
        { src: "../../assets/img/clothes-design-blacks.jpg", alt: "Desain Baju Hitam" },
    ];

    // Mengisi galeri dengan gambar dari data
    imageData.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        masonryGallery.appendChild(imgElement);
    });
});
