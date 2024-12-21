import type { Article, SortOption } from '../types';

export function getArticleCategory(article: Article): string {
  if (article.slug.includes('election')) return 'Elections';
  if (article.slug.includes('organizing')) return 'Organizing';
  if (article.slug.includes('surveillance')) return 'Privacy';
  if (article.slug.includes('data')) return 'Technology';
  return 'Politics';
}

export function filterAndSortArticles(
  articles: Article[],
  selectedCategories: string[],
  sortBy: SortOption
): Article[] {
  let filtered = [...articles];

  // Apply category filter if any categories are selected
  if (selectedCategories.length > 0) {
    filtered = filtered.filter(article => 
      selectedCategories.includes(getArticleCategory(article))
    );
  }

  // Apply sorting
  return filtered.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.date.getTime() - a.date.getTime();
      case 'oldest':
        return a.date.getTime() - b.date.getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
}

export function getAllCategories(articles: Article[]): string[] {
  return [...new Set(articles.map(getArticleCategory))].sort();
}