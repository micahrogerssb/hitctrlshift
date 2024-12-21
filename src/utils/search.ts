import type { Article } from '../types';

// Helper function to strip HTML tags from content
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Helper function to normalize text for searching
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchArticles(query: string, articles: Article[]): Article[] {
  const searchTerms = normalizeText(query).split(' ').filter(term => term.length > 0);
  
  return articles
    .map(article => {
      const normalizedTitle = normalizeText(article.title);
      const normalizedContent = normalizeText(stripHtml(article.content));
      const normalizedAuthor = normalizeText(article.author);
      
      let score = 0;
      let matches = new Set<string>();

      searchTerms.forEach(term => {
        // Title matches (highest weight)
        if (normalizedTitle.includes(term)) {
          score += 10;
          matches.add('title');
        }
        
        // Content matches
        if (normalizedContent.includes(term)) {
          score += 5;
          matches.add('content');
        }
        
        // Author matches
        if (normalizedAuthor.includes(term)) {
          score += 3;
          matches.add('author');
        }
      });

      return {
        ...article,
        searchScore: score,
        matches: Array.from(matches)
      };
    })
    .filter(article => article.searchScore > 0)
    .sort((a, b) => b.searchScore - a.searchScore);
}

export function getSearchPreview(content: string, searchTerm: string, maxLength: number = 200): string {
  const plainText = stripHtml(content);
  const normalizedContent = normalizeText(plainText);
  const normalizedTerm = normalizeText(searchTerm);
  
  // Find the first occurrence of any search term
  const searchTerms = normalizedTerm.split(' ').filter(term => term.length > 0);
  let bestIndex = -1;
  let bestTerm = '';
  
  searchTerms.forEach(term => {
    const index = normalizedContent.indexOf(term);
    if (index !== -1 && (bestIndex === -1 || index < bestIndex)) {
      bestIndex = index;
      bestTerm = term;
    }
  });
  
  if (bestIndex === -1) {
    // If no match found, return the beginning of the content
    return plainText.slice(0, maxLength) + '...';
  }
  
  // Calculate the preview window around the match
  const termLength = bestTerm.length;
  const contextBefore = Math.floor((maxLength - termLength) / 2);
  const contextAfter = maxLength - termLength - contextBefore;
  
  let start = Math.max(0, bestIndex - contextBefore);
  let end = Math.min(plainText.length, bestIndex + termLength + contextAfter);
  
  // Adjust to not break words
  while (start > 0 && /\S/.test(plainText[start - 1])) start--;
  while (end < plainText.length && /\S/.test(plainText[end])) end++;
  
  let preview = plainText.slice(start, end);
  
  // Add ellipsis if needed
  if (start > 0) preview = '...' + preview;
  if (end < plainText.length) preview = preview + '...';
  
  return preview;
}