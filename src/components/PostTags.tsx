import { getTag } from "@/lib/api";

export default async function PostTags({ tags }: { tags: number[] }) {
    const tagNames = await Promise.all(tags.map((id) => getTag(id)));

    return (
        <div className="flex flex-wrap items-center">
            Tag:
            {tagNames.map((tag) => tag && (
                <a href={`/page/1?tag=${tag.id}`} key={tag.id} className="underline">
                    <span key={tag?.id} className="text-xs bg-gray-200 text-gray-800 rounded-full px-2 py-1 m-1" dangerouslySetInnerHTML={{ __html: tag?.name }} />
                </a>
            ))}
        </div>
    );
}