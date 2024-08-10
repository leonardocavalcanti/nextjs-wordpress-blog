import { getPosts } from "@/lib/api";
import PostPreview from "./PostPreview";
import Pagination from "./Pagination";

export default async function PostsList({ page, search }: { page: number, search?: string }) {
  const posts = await getPosts(page, search);

  if (!posts) {
    return (
      <div className="flex flex-col h-full items-center justify-center mt-12">
        <p className="text-2xl">Something went wrong</p>
        <p className="text-gray-400">Please check the address you're trying to access or come back later</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {posts.data.length === 0 && (
        <div className="flex flex-col h-full items-center justify-center mt-12">
          <p className="text-2xl">Sorry, we couldn't find any posts {search ? `with the term "${search}"` : "here"}</p>
          <p className="text-gray-400">Try searching for something else or come back later</p>
        </div>
      )}
      {posts.data.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
      <Pagination page={page} totalPages={posts.totalPages} search={search} />
    </div>
  );
}