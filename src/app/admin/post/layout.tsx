export default async function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <div className="w-auto text-3xl font-bold">
                    <span>Posts</span>
                </div>
            </div>
            {children}
        </div>
    )
}
