export class SearchManager {
  private dialog: HTMLElement | null;
  private input: HTMLInputElement | null;
  private resultsContainer: HTMLElement | null;
  private debounceTimeout: number | null = null;

  constructor() {
    this.dialog = document.getElementById('search-dialog');
    this.input = document.getElementById('search-input') as HTMLInputElement;
    this.resultsContainer = document.getElementById('search-results');
    
    this.init();
  }

  private init() {
    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle(true);
      } else if (e.key === 'Escape') {
        this.toggle(false);
      }
    });

    // Handle input changes
    this.input?.addEventListener('input', (e) => {
      this.handleSearch((e.target as HTMLInputElement).value);
    });

    // Handle backdrop clicks
    this.dialog?.addEventListener('click', (e) => {
      if (e.target === this.dialog) {
        this.toggle(false);
      }
    });

    // Expose toggle method globally
    window.toggleSearch = this.toggle.bind(this);
  }

  private handleSearch(query: string) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = window.setTimeout(() => {
      // Implement search logic here
    }, 300);
  }

  public toggle(open?: boolean) {
    const isOpen = open ?? !this.isVisible();

    if (this.dialog) {
      this.dialog.classList.toggle('opacity-0', !isOpen);
      this.dialog.classList.toggle('pointer-events-none', !isOpen);
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      this.input?.focus();
    } else {
      document.body.style.overflow = '';
      if (this.input) {
        this.input.value = '';
      }
    }
  }

  private isVisible(): boolean {
    return !this.dialog?.classList.contains('opacity-0');
  }
}