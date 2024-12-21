export function handleScroll(callback: (isScrolled: boolean) => void) {
  let lastScrollY = window.scrollY;
  let ticking = false;

  function update() {
    const isScrolled = window.scrollY > 0;
    callback(isScrolled);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  update();
}