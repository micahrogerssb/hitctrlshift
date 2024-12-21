// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

// Minimum reading time in minutes
const MIN_READ_TIME = 1;

export function calculateReadingTime(text: string): string {
  if (!text) return `${MIN_READ_TIME} min read`;
  
  // Remove HTML tags and trim whitespace
  const cleanText = text.replace(/<[^>]*>/g, '').trim();
  
  // Count words (split by whitespace)
  const words = cleanText.split(/\s+/).length;
  
  // Calculate reading time
  const minutes = Math.max(MIN_READ_TIME, Math.ceil(words / WORDS_PER_MINUTE));
  
  return `${minutes} min read`;
}