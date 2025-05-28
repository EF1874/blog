import { BlogPostData, getBlogPost } from '@/app/blogs/[slug]/page'
import fs from 'node:fs/promises'
import path from 'node:path'

/* ... */

export const listBlogPosts = async (): Promise<
    Omit<BlogPostData, 'component'>[]
> => {
    const files = await fs.readdir(path.join(process.cwd(), 'src/content'))

    return Promise.all(
        files.map(async (file) => {
            const slug = file.replace(/\.mdx$/, '')
            const { metadata } = await getBlogPost(slug)
            return {
                slug,
                metadata,
            }
        }),
    )
}
