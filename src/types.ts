export interface Article {
  slug: string;
  title: string;
  author: string;
  date: Date;
  imageUrl?: string;
  content: string;
  excerpt?: string;
  category?: string;
}

export type SortOption = 'newest' | 'oldest' | 'title';

export interface FilterState {
  categories: string[];
  sortBy: SortOption;
}