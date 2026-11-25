export interface Article {
  /** URL slug. Auto-derived from title if omitted. */
  slug?: string;
  /** Article title shown everywhere. */
  title: string;
  /** One- or two-sentence summary shown on cards and in OG metadata. */
  excerpt: string;
  /** ISO date string, e.g. "2025-01-15". Used for sorting and display. */
  date: string;
  /** Optional override; if omitted, auto-computed from word count (~200 wpm). */
  readingTime?: string;
  /** Optional category for grouping: "Essay", "Reflection", "Story", "Technical". */
  category?: string;
  /** Optional tags. */
  tags?: string[];
  /** Optional cover image; drop files into /public/writing/ and reference here. */
  coverImage?: { src: string; alt: string };
  /**
   * Body of the article.
   * Plain text with blank lines between paragraphs.
   * Lightweight structure also supported on their own lines:
   *   "## Heading"
   *   "### Subheading"
   *   "> Pull quote"
   */
  content: string;
  /** Pin this article to the homepage writing teaser. */
  featured?: boolean;
}

/**
 * Real articles only.
 *
 * To add a new article, append an object to this array.
 * - `slug` is optional (auto-derived from `title` if omitted).
 * - `date` must be an ISO string.
 * - Set `featured: true` on one article to pin it to the homepage teaser.
 */
export const articles: Article[] = [
  {
    title: "The first time a patient taught me something medicine had not",
    slug: "first-lesson-from-a-patient",
    excerpt:
      "A short reflection on the moment clinical training cracks you open — and what it taught me about listening.",
    date: "2025-01-15",
    category: "Reflection",
    content: `I still remember the pause before she spoke.

## What the file did not say
The notes were clean, the vitals were stable, the plan was already written. And yet, when she finally said what she had been holding back, none of it was in the file.

> Medicine is not the practice of knowing everything. It is the practice of noticing what you were not looking for.

### What I took from that
I did not fix anything that day. But I learned to leave room for the sentence that comes after the pause.`,
    featured: true,
  },
];