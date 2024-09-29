import Link from 'next/link'

import { Box } from '@/components/Box'
import clientPromise from '@/lib/db'
import type { Post } from '@/lib/db/models/Post'
import logger from '@/lib/logger'

export default async function Post() {
    try {
        const client = await clientPromise
        const posts = await client
            .db()
            .collection<Post>('posts')
            .find({}, { sort: { priority: 'ascending' } })
            .toArray()
        return (
            <Box direction="column">
                <div className="flex py-3">
                    <Link
                        className="bg-blue-500 rounded-sm text-white p-2 no-underline font-bold hover:opacity-45"
                        href="/admin/post/new"
                    >
                        Create a new post
                    </Link>
                </div>
                {posts.length ? (
                    <table
                        className="borderTable bg-slate-100 text-slate-950 border border-slate-200 rounded-lg shadow-lg"
                        style={{ maxWidth: '60rem', width: '100%', overflow: 'hidden' }}
                    >
                        <thead className="bg-yellow-300"> {/* Apply yellow background to the entire header row */}
                            <tr>
                                <th className="p-4 border-b border-slate-300">Name</th>
                                <th className="p-4 border-b border-slate-300">Display Type</th>
                                <th className="p-4 border-b border-slate-300">Priority</th>
                                <th className="p-4 border-b border-slate-300">Visible</th>
                                <th className="p-4 border-b border-slate-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(
                                ({
                                    name,
                                    slug,
                                    priority,
                                    briefSource,
                                    contentSource,
                                    visibleCondition,
                                }) => (
                                    <tr
                                        key={slug}
                                        className="hover:bg-slate-200 transition-all duration-200 ease-in-out cursor-pointer"
                                    >
                                        {/* Bold the Name column in each row */}
                                        <td className="p-4 border-b border-slate-200 font-bold">{name}</td>
                                        <td className="p-4 border-b border-slate-200">
                                            {briefSource
                                                ? contentSource
                                                    ? 'card + page'
                                                    : 'card'
                                                : contentSource
                                                    ? 'page'
                                                    : 'empty'}
                                        </td>
                                        <td className="p-4 border-b border-slate-200">{priority}</td>
                                        <td className="p-4 border-b border-slate-200">
                                            <code>{visibleCondition}</code>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <Box direction="row" gap="0.75rem">
                                                <Link
                                                    href={`/admin/post/edit/${slug}`}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    Edit
                                                </Link>
                                                {contentSource ? (
                                                    <Link
                                                        href={`/post/${slug}`}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        View Page
                                                    </Link>
                                                ) : null}
                                            </Box>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ) : undefined}
            </Box>
        )
    } catch (e) {
        logger.error(e, '[/admin/post]')
        throw e
    }
}
