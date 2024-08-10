import { Post } from "@/interfaces/Post";
import PostImage from "./PostImage";
import PostAuthor from "./PostAuthor";

export default async function PostPreview({ post }: { post: Post }) {
    return (
        <article className="flex flex-col gap-4 max-w-5xl">
            <a href={`/post/${post.id}`} className="hover:underline">
                <h2 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </a>
            <PostAuthor userId={post.author} date={post.date} />
            {!!post.featured_media && <a href={`/post/${post.id}`}><PostImage mediaId={post.featured_media} /></a>}
            <div className="flex flex-col gap-2 text-md text-justify" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={`/post/${post.id}`} className="btn-outline">
                Read more
            </a>
        </article>
    );
}