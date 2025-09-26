export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  content: string;
  // SEO properties
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  // Blog properties
  readTime?: string;
  views?: number;
  likes?: number;
  isPublished?: boolean;
  isFeatured?: boolean;
  category?: string;
};
