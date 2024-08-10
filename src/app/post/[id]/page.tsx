import PostContent from "@/components/PostContent";
import { getPost, getPostMedia } from "@/lib/api";
import { notFound } from "next/navigation";

type Params = {
    params: {
        id: number;
    };
};

export default async function Post({ params }: Params) {
    const post = await getPost(params.id);

    if (!post) {
        return notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <PostContent post={post} />
        </main>
    );
}

export async function generateMetadata({ params }: Params) {
    const post = await getPost(params.id);

    if (!post) {
        return notFound();
    }

    const media = !!post.featured_media ? await getPostMedia(post.featured_media) : null;

    if (!post) {
        return notFound();
    }

    const title = post.title.rendered;

    return {
        title,
        openGraph: {
            title,
            images: media ? [media.media_details.sizes.full, media.media_details.sizes.medium, media.media_details.sizes.thumbnail] : [],
        },
    };
}