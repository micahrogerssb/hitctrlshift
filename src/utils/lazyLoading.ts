// Utility to handle lazy loading and caching of images
export class AssetManager {
  private static loadedAssets = new Set<string>();
  private static observer: IntersectionObserver;

  static init() {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              this.loadedAssets.add(img.dataset.src);
              this.observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );
  }

  static observe(element: HTMLImageElement) {
    if (!element.dataset.src) return;
    
    // If already loaded, set src directly
    if (this.loadedAssets.has(element.dataset.src)) {
      element.src = element.dataset.src;
      return;
    }

    this.observer.observe(element);
  }

  static isAssetLoaded(src: string): boolean {
    return this.loadedAssets.has(src);
  }
}