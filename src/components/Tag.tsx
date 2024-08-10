import { getTag } from "@/lib/api";

export default async function Tag({ id }: { id: number }) {
    const tag = await getTag(id);

    if (!tag) {
        return null;
    }

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-4xl"><strong>Tag:</strong> {tag.name}</h1>
        </div>
    );
}