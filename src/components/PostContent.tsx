import { Post } from "@/interfaces/Post";
import PostImage from "./PostImage";
import PostAuthor from "./PostAuthor";
import PostCategories from "./PostCategories";
import PostTags from "./PostTags";

export default function PostContent({ post }: { post: Post }) {
    return (
        <article className="flex flex-col gap-4 max-w-5xl">
            <h1 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <PostAuthor userId={post.author} date={post.date} />
            {!!post.featured_media && <PostImage mediaId={post.featured_media} />}
            <div className="flex flex-col gap-2 text-justify" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <PostCategories categories={post.categories} />
            <PostTags tags={post.tags} />
        </article>
    );
}