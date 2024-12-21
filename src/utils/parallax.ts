export function initParallax() {
  class ParallaxEffect {
    private element: Element | null;
    private enabled: boolean;

    constructor() {
      this.element = document.querySelector('.parallax-image');
      this.enabled = this.shouldEnableParallax();
      
      if (this.enabled) {
        this.init();
      }
    }

    private shouldEnableParallax(): boolean {
      return window.matchMedia('(prefers-reduced-motion: no-preference)').matches && 
             window.innerWidth >= 768;
    }

    private init() {
      window.addEventListener('scroll', this.handleParallax.bind(this), { passive: true });
    }

    private handleParallax() {
      if (!this.element || !this.enabled) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      requestAnimationFrame(() => {
        this.element!.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  // Initialize parallax effect
  new ParallaxEffect();
}