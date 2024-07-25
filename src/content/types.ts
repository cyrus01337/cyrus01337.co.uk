import type { z as zod } from "astro:content";

import type { blogsSchema } from "@/content/config";

export type BlogsFrontmatter = zod.infer<typeof blogsSchema>;

export interface WithFrontmatter<Frontmatter extends object> {
    frontmatter: Frontmatter;
}
