import { getCategory } from "@/lib/api";

export default async function PostCategories({ categories }: { categories: number[] }) {
    const categoryNames = await Promise.all(categories.map((id) => getCategory(id)));

    return (
        <div className="flex flex-wrap items-center">
            Category:
            {categoryNames.map((category) => category && (
                <a href={`/page/1?category=${category.id}`} key={category.id} className="underline">
                    <span key={category?.id} className="text-xs bg-gray-200 text-gray-800 rounded-full px-2 py-1 m-1" dangerouslySetInnerHTML={{ __html: category?.name }} />
                </a>
            ))}
        </div>
    );
}