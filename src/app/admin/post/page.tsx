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
                        className="borderTable"
                        style={{ maxWidth: '48rem' }}
                    >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Display Type</th>
                                <th>Priority</th>
                                <th>Visible</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {...posts.map(
                                ({
                                    name,
                                    slug,
                                    priority,
                                    briefSource,
                                    contentSource,
                                    visibleCondition,
                                }) => (
                                    <tr key={slug}>
                                        <td>{name}</td>
                                        <td>
                                            {briefSource
                                                ? contentSource
                                                    ? 'card + page'
                                                    : 'card'
                                                : contentSource
                                                  ? 'page'
                                                  : 'empty'}
                                        </td>
                                        <td>{priority}</td>
                                        <td>
                                            <code>{visibleCondition}</code>
                                        </td>
                                        <td>
                                            <Box direction="row" gap="0.75rem">
                                                <Link
                                                    href={`/admin/post/edit/${slug}`}
                                                >
                                                    Edit
                                                </Link>
                                                {contentSource ? (
                                                    <Link
                                                        href={`/post/${slug}`}
                                                    >
                                                        View Page
                                                    </Link>
                                                ) : undefined}
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
