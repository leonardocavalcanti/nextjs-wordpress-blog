export interface Post {
  id: number;
  author: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  categories: number[];
  tags: number[];
  date: string;
  featured_media: number;
}