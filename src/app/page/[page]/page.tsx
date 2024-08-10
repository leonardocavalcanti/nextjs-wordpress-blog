import PostsList from "@/components/PostsList";
import SearchInput from "@/components/SearchInput";

export default async function Page({ params }: { params: { page: string } }) {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
            <SearchInput />
            <PostsList page={parseInt(params.page)} />
        </main>
    );
}
