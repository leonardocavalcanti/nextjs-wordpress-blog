import PostsList from "@/components/PostsList";
import SearchInput from "@/components/SearchInput";

export default async function Page({ params, searchParams }: { params: { page: string }, searchParams: { search: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center p-4 gap-4">
            <SearchInput currentSearch={searchParams.search} />
            <PostsList page={parseInt(params.page)} search={searchParams.search} />
        </main>
    );
}