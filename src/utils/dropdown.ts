export function setupDropdown(buttonId: string, dropdownId: string) {
  const button = document.getElementById(buttonId);
  const dropdown = document.getElementById(dropdownId);
  let isOpen = false;

  function toggleDropdown(open: boolean) {
    isOpen = open;
    button?.setAttribute('aria-expanded', String(open));
    button?.setAttribute('data-state', open ? 'open' : 'closed');
    
    if (open) {
      dropdown?.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
    } else {
      dropdown?.classList.add('scale-95', 'opacity-0', 'pointer-events-none');
    }
  }

  button?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(!isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!button?.contains(e.target as Node)) {
      toggleDropdown(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleDropdown(false);
    }
  });
}