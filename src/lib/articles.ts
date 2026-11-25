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

export const articles: Article[] = [
  {
    slug: "sleep-duration-cardiovascular-risk-2025",
    title: "The Heart Never Sleeps — But It Depends on How You Do",
    excerpt:
      "A 2025 Mendelian randomization study suggests that short sleep may causally increase the risk of arrhythmias and cardiomyopathy, while long sleep appears protective for heart failure and myocardial infarction. The nuance matters more than the headline.",
    date: "2025-11-15",
    category: "Technical",
    tags: ["sleep", "cardiovascular", "Mendelian randomization", "prevention"],
    coverImage: {
      src: "https://cdn.pixabay.com/photo/2025/06/16/09/03/medicine-9662873_1280.png",
      alt: "Medical research illustration representing heart health and sleep science.",
    },
    content: `
For decades, cardiovascular prevention has focused on the usual suspects: lipids, blood pressure, smoking, diabetes, and family history. Sleep, by contrast, was often treated as a lifestyle afterthought — something to sacrifice in the name of productivity, or a symptom to mention only when it became unbearable. That hierarchy is quietly shifting.

In 2025, a two-sample Mendelian randomization study published in *Heart & Lung* offered some of the clearest causal evidence yet that sleep duration is not merely correlated with cardiovascular disease (CVD) but may actively shape its risk profile[reference:0]. Using genome-wide association data across multiple ancestries, the researchers examined twelve major cardiovascular conditions and found a pattern that resists easy summary: under-sleeping and over-sleeping pull the heart in different directions[reference:1].

## The Split Signal

The study reported that **over-sleeping** was negatively correlated with three conditions — heart failure, myocardial infarction, and valvular heart disease — meaning longer sleep duration was associated with *lower* risk for these outcomes[reference:2]. **Under-sleeping**, meanwhile, showed positive correlations with four conditions: cardiac arrhythmias, non-ischemic cardiomyopathy, valvular heart disease, and atrial fibrillation[reference:3]. In plain terms: too little sleep appears to raise the risk of electrical and structural heart problems, while longer sleep may offer some protection against ischemic and failure-related events.

> The finding is not a license to sleep the day away. It is a reminder that the heart responds to the *pattern* of sleep, not just the number on a wearable.

This split signal matters because it complicates the popular narrative that “seven to eight hours is optimal for everyone.” Mendelian randomization — which uses genetic variants as natural experiments to reduce confounding — suggested that the causal architecture of sleep and CVD is condition-specific[reference:4]. A person’s genetic propensity toward short sleep may tilt them toward arrhythmias; a propensity toward long sleep may tilt them away from heart failure. The same clock, different risks.

## Why This Is Not Just Another Observational Study

Most sleep–heart research has been observational. It tells us that people who sleep poorly are more likely to develop CVD, but it struggles to separate cause from consequence. Reverse causation is a real problem: early heart failure can fragment sleep; subclinical arrhythmias can wake a person repeatedly[reference:5]. Mendelian randomization does not solve every puzzle, but it strengthens the causal case by anchoring exposure to genetic variants fixed at conception.

The 2025 study also aligns with a broader shift in cardiology. In April 2025, the American Heart Association published a scientific statement defining sleep health as multidimensional — regularity, satisfaction, alertness, timing, efficiency, and duration — and reaffirmed sleep duration as the eighth metric of cardiovascular health in its Life’s Essential 8 framework[reference:6]. The message from both directions is consistent: sleep is not a soft variable. It belongs in the same conversation as blood pressure and cholesterol.

## What to Do With a Nuanced Finding

The practical takeaway is not “sleep more” or “sleep less.” It is **protect the regularity and sufficiency of sleep**, especially if you carry other cardiovascular risk factors. For clinicians, the study supports asking about sleep duration not as a checkbox but as a stratified risk marker: short sleepers may warrant closer rhythm monitoring; long sleepers should not be told to cut back without evidence of harm.

For the rest of us, the finding is a quiet corrective to hustle culture’s glorification of sleeplessness. The heart does not stop at midnight. It remodels, it repolarizes, it repairs — and it seems to do so differently depending on how long we let the body rest. The science is still young, but the direction is clear enough to take seriously.
    `.trim(),
    featured: true,
  },
];

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