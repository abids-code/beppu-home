// Scroll reveals for pages that opt in with motion={true}.
// Plain CSS and IntersectionObserver are enough here: each block rises once as it enters the
// viewport, and the hero crop is a CSS keyframe (see global.css). GSAP is not used, because
// nothing on the site needs choreographed timelines; its boot cost slowed first render on phones.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (reduce || !('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

export {};
