import { getPostMedia } from "@/lib/api";
import Image from "next/image";


export default async function PostImage({ mediaId }: { mediaId: number }) {
  const media = await getPostMedia(mediaId);

  if (!media) {
    return null;
  }

  return (
    <Image
      src={media.media_details.sizes.full.source_url}
      alt=""
      width={900}
      height={400}
      className="m-auto h-auto w-auto"
      priority
    />
  );
}