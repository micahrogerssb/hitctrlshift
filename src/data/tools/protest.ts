import type { Tool } from './types';

export const protestTools: Tool[] = [
  {
    name: 'Know Your Rights',
    description: 'Essential guide for protesters: rights, responsibilities, and legal protections during demonstrations',
    href: 'https://www.aclu.org/know-your-rights/protesters-rights',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7zM12 3c-4 0-7.3 3.3-7.3 7.3 0 5.4 7.3 10.7 7.3 10.7s7.3-5.3 7.3-10.7c0-4-3.3-7.3-7.3-7.3z" />
    </svg>`
  },
  {
    name: 'Legal Support Network',
    description: 'Connect with legal observers and find pro bono representation for activists',
    href: 'https://www.nlg.org/massdefense/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>`
  }
];