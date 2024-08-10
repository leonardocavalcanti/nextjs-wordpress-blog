import Author from "@/components/Author";
import Category from "@/components/Category";
import PostsList from "@/components/PostsList";
import SearchInput from "@/components/SearchInput";
import Tag from "@/components/Tag";

export default async function Page({ params, searchParams }: { params: { page: string }, searchParams: { search?: string, category?: number, tag?: number, author?: number } }) {
    return (
        <main className="flex min-h-screen flex-col items-center p-4 gap-4">
            <SearchInput currentSearch={searchParams.search} />
            {!!searchParams.category && <Category id={searchParams.category} />}
            {!!searchParams.tag && <Tag id={searchParams.tag} />}
            {!!searchParams.author && <Author id={searchParams.author} />}
            <PostsList page={parseInt(params.page)} search={searchParams.search} category={searchParams.category} tag={searchParams.tag} author={searchParams.author} />
        </main>
    );
}