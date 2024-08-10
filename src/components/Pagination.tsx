export default function Pagination({ page, totalPages, search, category, tag, author }: { page: number, totalPages: number, search?: string, category?: number, tag?: number, author?: number }) {
    const params = new URLSearchParams();

    if (search) {
        params.set("search", search);
    }

    if (category) {
        params.set("categories", category.toString());
    }

    if (tag) {
        params.set("tags", tag.toString());
    }

    if (author) {
        params.set("author", author.toString());
    }

    return totalPages > 1 && (
        <nav className="flex gap-4">
            {page > 1 && (
                <a href={`/page/${page - 1}${params.toString() ? `?${params}` : ''}`} className="underline">
                    Previous
                </a>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a key={p} href={`/page/${p}${params.toString() ? `?${params}` : ''}`} className={p === page ? 'font-bold' : 'underline'}>
                    {p}
                </a>
            ))}
            {page < totalPages && (
                <a href={`/page/${page + 1}${params.toString() ? `?${params}` : ''}`} className="underline">
                    Next
                </a>
            )}
        </nav>
    );
}