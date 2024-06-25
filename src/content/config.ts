import { defineCollection, z as zod } from "astro:content";

export const blogsSchema = zod.object({
    title: zod.string(),
});

const blogCollection = defineCollection({
    type: "content",
    schema: blogsSchema,
});

export const collections = {
    blogs: blogCollection,
};
