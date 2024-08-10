import { getUser } from "@/lib/api";
import Image from "next/image";

export default async function PostAuthor({ userId, date }: { userId: number, date: string }) {
    const user = await getUser(userId);

    return (
        <div className="flex gap-2 items-center">
            <Image src={user.avatar_urls[48]} alt={user.name} className="w-8 h-8 rounded-full" width={32} height={32} />
            <div className="flex flex-col">
                {user.name}
                <span className="text-gray-400 text-xs">{new Date(date).toLocaleString()}</span>
            </div>
        </div>
    );
}