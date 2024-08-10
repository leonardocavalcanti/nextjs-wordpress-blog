'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchInput({ currentSearch }: { currentSearch?: string }) {
    const [search, setSearch] = useState(currentSearch || "");

    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!search) {
            return;
        }
        
        router.push(`/search/1?search=${search}`);
    };

    const handleClearSearch = () => {
        if (currentSearch) {
            router.push("/");
        } else {
            setSearch("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl self-end">
            <div className="relative w-full">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="I'm looking for..."
                />
                {search && <button
                    type="button"
                    onClick={() => handleClearSearch()}
                    className="absolute right-4 top-4 text-gray-500"
                >
                    ✕
                </button>}
            </div>
            <button
                type="submit"
                className="btn-outline"
            >
                Search
            </button>
        </form>
    );
}