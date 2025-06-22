document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('slider-track');
  if (!track) return;

  const slides = Array.from(track.children);
  if (slides.length <= 1) return;

  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  let current = 0;
  const interval = 4000; // 4 секунды
  const slideCount = slides.length;

  function nextSlide() {
    current++;
    const offset = current * -100;
    track.style.transition = 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';
    track.style.transform = `translateX(${offset}%)`;
  }

  track.addEventListener('transitionend', () => {
    if (current === slideCount) {
      track.style.transition = 'none';
      current = 0;
      track.style.transform = `translateX(0%)`;
    }
  });

  setInterval(nextSlide, interval);
}); 