(() => {
  const section = document.getElementById('carousel-section');
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carousel-track');

  if (!section || !carousel || !track) return;

  const cards = Array.from(track.querySelectorAll('.project-card'));
  if (!cards.length) return;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  let maxTranslate = 0;

  const measure = () => {
    const viewportH = window.innerHeight;
    const firstCard = cards[0];
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const sidePadding = Math.max(18, (carousel.clientWidth - cardWidth) / 2);

    track.style.paddingInline = `${sidePadding}px`;

    // Recalculate after padding so the first and last cards can sit near center.
    maxTranslate = Math.max(0, track.scrollWidth - carousel.clientWidth);

    const scrollRoom = maxTranslate + viewportH * 1.2;
    section.style.height = `${Math.max(viewportH * 1.4, scrollRoom + carousel.clientHeight * 0.35)}px`;
  };

  const updateCardStates = () => {
    const carouselRect = carousel.getBoundingClientRect();
    const centerX = carouselRect.left + carouselRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    const distances = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return Math.abs((rect.left + rect.width / 2) - centerX);
    });

    distances.forEach((distance, index) => {
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const nearThreshold = carouselRect.width * 0.32;

    cards.forEach((card, index) => {
      card.classList.toggle('is-center', index === closestIndex);
      card.classList.toggle('is-near', index !== closestIndex && distances[index] <= nearThreshold);
    });
  };

  const render = () => {
    const viewportH = window.innerHeight;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    const start = sectionTop;
    const end = sectionTop + Math.max(1, sectionHeight - viewportH);
    const progress = clamp((window.scrollY - start) / Math.max(1, end - start), 0, 1);

    const x = -maxTranslate * progress;
    track.style.transform = `translate3d(${x}px, -50%, 0)`;

    updateCardStates();
  };

  let ticking = false;
  const requestRender = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      render();
    });
  };

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    render();
  });

  measure();
  render();
})();