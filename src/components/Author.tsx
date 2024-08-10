import { getUser } from "@/lib/api";

export default async function Author({ id }: { id: number }) {
    const author = await getUser(id);

    if (!author) {
        return null;
    }

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-4xl"><strong>Author:</strong> {author.name}</h1>
        </div>
    );
}