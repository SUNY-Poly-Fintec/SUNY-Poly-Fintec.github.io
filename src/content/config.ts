import { defineCollection, z } from 'astro:content';


const events = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.string(), // ISO string (YYYY-MM-DD)
location: z.string().optional(),
link: z.string().url().optional(),
description: z.string().optional()
})
});


const officers = defineCollection({
type: 'content',
schema: z.object({
name: z.string(),
role: z.string(),
headshot: z.string().optional(),
email: z.string().email().optional(),
bio: z.string().optional()
})
});


const news = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
date: z.string(),
summary: z.string().optional()
})
});


export const collections = { events, officers, news };
