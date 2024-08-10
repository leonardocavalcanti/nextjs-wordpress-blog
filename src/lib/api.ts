import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import { User } from "@/interfaces/User";

const apiUrl = process.env.WORDPRESS_API_URL;

const apiUser = process.env.WORDPRESS_USER;
const apiPass = process.env.WORDPRESS_PASS;

async function apiFetch<T>(path: string, options?: RequestInit) {
  const uri = `${apiUrl}${path}`;

  const res = await fetch(uri, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Basic ${btoa(`${apiUser}:${apiPass}`)}`,
    },
  });

  if (!res.ok) {
    let error;

    try {
      const { detail } = await res.json();

      error = detail;
    } catch {
      error = res.statusText;
    }

    throw new Error(error);
  }

  // Check if response headers contain pagination data
  const total = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  if (total && totalPages) {
    const data = await res.json();

    return {
      data,
      total: parseInt(total, 10),
      totalPages: parseInt(totalPages, 10),
    } as T;
  }

  return res.json() as Promise<T>;
}

export async function getPosts(page: number = 1, search?: string) {
  return apiFetch<{data:Post[]} & {
    total: number;
    totalPages: number;
  }>(`/posts?page=${page}&search=${search || ""}`);
}

export async function getPostMedia(id: number) {
  return apiFetch<Media>(`/media/${id}`);
}

export async function getPost(id: number) {
  return apiFetch<Post>(`/posts/${id}`);
}

export async function getUser(id: number) {
  return apiFetch<User>(`/users/${id}`);
}