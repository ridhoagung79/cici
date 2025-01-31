// Menambahkan interaksi tombol
document.getElementById('loveButton').addEventListener('click', function () {
    const specialMessage = document.getElementById('specialMessage');
    specialMessage.classList.remove('hidden');

    // Mengubah teks tombol setelah diklik
    this.textContent = "💖 I LOVE YOUUUUUUUUUUUUU MUACHHHHHHHHH 💖";
    this.disabled = true;
});
