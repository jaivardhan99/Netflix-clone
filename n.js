function redirectToSignIn() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'sigin.html';
    }, 5000); 
  }
  document.querySelectorAll('.post').forEach(post => {
    const video = post.querySelector('video');

    post.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Restart video from the beginning
        video.play();
    });

    post.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video when not hovered
    });
});

