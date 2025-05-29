import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import rehypeMDXImportMedia from 'rehype-mdx-import-media'

const nextConfig: NextConfig = {
    experimental: {
        // mdxRs: true,
    },
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

const rehypePrettyCodeOptions: Options = {
    theme: 'one-dark-pro',
}
const withMDX = createMDX({
    // Add markdown plugins here, as desired

    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [
            [rehypePrettyCode, rehypePrettyCodeOptions],
            rehypeMDXImportMedia,
        ],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
