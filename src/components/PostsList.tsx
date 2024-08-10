import { getPosts } from "@/lib/api";
import PostPreview from "./PostPreview";
import Pagination from "./Pagination";

export default async function PostsList({ page, search }: { page: number, search?: string }) {
  const posts = await getPosts(page, search);

  return (
    <div className="flex flex-col gap-8">
      {posts.data.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
      <Pagination page={page} totalPages={posts.totalPages} search={search} />
    </div>
  );
}