export default function Pagination({ page, totalPages, search }: { page: number; totalPages: number, search?: string }) {
    return totalPages > 1 && (
        <nav className="flex gap-4">
            {page > 1 && (
                <a href={`/page/${page - 1}${search ? `?search=${search}` : ''}`} className="underline">
                    Previous
                </a>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a key={p} href={`/page/${p}${search ? `?search=${search}` : ''}`} className={p === page ? "font-bold" : "underline"}>
                    {p}
                </a>
            ))}
            {page < totalPages && (
                <a href={`/page/${page + 1}${search ? `?search=${search}` : ''}`} className="underline">
                    Next
                </a>
            )}
        </nav>
    );
}