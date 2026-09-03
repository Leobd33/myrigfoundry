import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/articles",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryName: z.string(),
    categoryUrl: z.string(),
    updated: z.string(),
  }),
});

export const collections = {
  articles,
};