document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    
    // Coba memutar audio
    audio.play().catch(error => {
        console.log('Autoplay diblokir oleh browser:', error);
        
        // Jika autoplay diblokir, tambahkan tombol untuk meminta interaksi pengguna
        const playButton = document.createElement('button');
        playButton.textContent = 'Klik untuk Memutar Musik';
        playButton.style.position = 'fixed';
        playButton.style.top = '20px';
        playButton.style.left = '20px';
        playButton.style.padding = '10px 20px';
        playButton.style.background = '#1BBC9B';
        playButton.style.color = '#fff';
        playButton.style.border = 'none';
        playButton.style.borderRadius = '5px';
        playButton.style.cursor = 'pointer';
        
        document.body.appendChild(playButton);

        // Ketika tombol diklik, audio mulai diputar
        playButton.addEventListener('click', () => {
            audio.play();
            playButton.remove(); // Hapus tombol setelah audio mulai diputar
        });
    });
});
