document.querySelector('.profile-glow').addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 0 80px rgba(0, 128, 0, 1)';
    this.style.transform = 'scale(1.3)';
});

document.querySelector('.profile-glow').addEventListener('mouseleave', function () {
    this.style.boxShadow = '0 0 60px rgba(128, 0, 128, 1)';
    this.style.transform = 'scale(1)';
});





