import { getCategory } from "@/lib/api";

export default async function Category({ id }: { id: number }) {
    const category = await getCategory(id);

    if (!category) {
        return null;
    }

    return (
        <div className="w-full max-w-5xl">
            <h1 className="text-4xl"><strong>Category:</strong> {category.name}</h1>
        </div>
    );
}