// Toggle the menu for mobile
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const btns = document.querySelector('.btns');
    menu.classList.toggle('active');
    btns.classList.toggle('active');
}

// Mendapatkan semua link menu
const menuLinks = document.querySelectorAll('.menu ul li a');

// Menambahkan event listener pada scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Mengecek setiap section untuk menemukan yang terlihat di layar
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Menghapus kelas 'active' dari semua menu link
    menuLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada menu yang sesuai dengan section yang sedang dilihat
    document.querySelector(`.menu ul li a[href="#${currentSection}"]`)?.classList.add('active');
});