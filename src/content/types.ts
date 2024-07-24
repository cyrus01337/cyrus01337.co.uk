import { z as zod } from "astro:content";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { blogsSchema } from "@/content/config";

export type BlogsFrontmatter = zod.infer<typeof blogsSchema>;

export interface WithFrontmatter<Frontmatter extends object> {
    frontmatter: Frontmatter;
}
