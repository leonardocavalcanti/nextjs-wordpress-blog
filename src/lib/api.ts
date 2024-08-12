import { Category } from "@/interfaces/Category";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import { Tag } from "@/interfaces/Tag";
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
  }

  // Check if response headers contain pagination data
  const total = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  try {
    const data = await res.json();

    if (total && totalPages) {

      return {
        data,
        total: parseInt(total, 10),
        totalPages: parseInt(totalPages, 10),
      } as T;
    }

    return data as Promise<T>;
  } catch {
    return null;
  }
}

type PostsResponse = {
  data: Post[];
  total: number;
  totalPages: number;
};

export async function getPosts(page: number = 1, search?: string, category?: number, tag?: number, author?: number): Promise<PostsResponse | null> {
  const params = new URLSearchParams();

  params.set("page", page.toString());

  if (search) {
    params.set("search", search);
  }

  if (category) {
    params.set("categories", category.toString());
  }

  if (tag) {
    params.set("tags", tag.toString());
  }

  if (author) {
    params.set("author", author.toString());
  }

  return apiFetch<PostsResponse>(`/posts?${params}`);
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

export async function getCategory(id: number) {
  return apiFetch<Category>(`/categories/${id}`);
}

export async function getTag(id: number) {
  return apiFetch<Tag>(`/tags/${id}`);
}