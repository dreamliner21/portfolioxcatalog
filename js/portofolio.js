document.addEventListener("DOMContentLoaded", function () {
    const showProjectsBtn = document.getElementById("showProjects");
    const projectsSection = document.getElementById("projects");
    const cards = document.querySelectorAll('.card-square');

    showProjectsBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah scrolling ke ID

        // Menampilkan section proyek
        projectsSection.style.display = 'block'; // Tampilkan section
        setTimeout(() => {
            projectsSection.style.opacity = '1'; // Ubah opacity
            projectsSection.style.transform = 'translateY(0)'; // Kembalikan posisi
        }, 10); // Menunggu sejenak agar efek transisi berfungsi

        // Tampilkan kartu satu per satu
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1'; // Menampilkan kartu
                card.style.transform = 'translateY(0)'; // Mengembalikan posisi
            }, index * 300); // Penundaan untuk animasi tiap kartu
        });
    });
});
