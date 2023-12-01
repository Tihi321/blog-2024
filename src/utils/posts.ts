import { map, filter } from "lodash";
export interface Meta {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  categories: string[];
  featured: boolean;
}

export interface MDXMeta {
  metadata: Meta;
  default: any;
}

export interface PostMeta extends Meta {
  slug: string;
  readingTime: number;
  postDate: Date;
}

const stringToDate = (str: string) => {
  const parts = map(str.split(","), (part) => parseInt(part.trim(), 10));
  // parts[0] is the month, parts[1] is the day, and parts[2] is the year
  // Note: Month in JavaScript Date is 0-indexed, so January is 0, February is 1, and so on.
  return new Date(parts[2], parts[0] - 1, parts[1]);
};

export const getPosts = async (): Promise<PostMeta[]> => {
  const files = import.meta.glob("../routes/post/**/*.mdx");

  const posts = Object.keys(files).map(async (file) => {
    const slug = file.replace("../routes/post/", "").replace(".mdx", "");
    const module = (await files[file]()) as MDXMeta;
    const contentLength = module.default ? module.default().length : 0;
    const readingTime = Math.ceil((contentLength * 2) / 60);
    const postMeta = module.metadata as Meta;

    return { slug, readingTime, ...postMeta, postDate: stringToDate(postMeta.date) };
  });

  const output = await Promise.all(posts);

  return output.sort((a, b) => {
    return b.postDate.getTime() - a.postDate.getTime();
  });
};

export const getFeaturedPosts = async (): Promise<PostMeta[]> => {
  const posts = await getPosts();

  return filter(posts, (post) => post.featured);
};

export interface GroupedByCategory {
  [category: string]: PostMeta[];
}

export const getCategorizedPosts = async (): Promise<GroupedByCategory> => {
  const posts = await getPosts();
  return posts.reduce<GroupedByCategory>((acc, post) => {
    post.categories.forEach((category) => {
      // Initialize the category array if it doesn't exist
      if (!acc[category]) {
        acc[category] = [];
      }
      // Add the post to the appropriate category
      acc[category].push(post);
    });
    return acc;
  }, {});
};

export const generatePostUrl = (slug: string = "") => `/post/${slug}`;
export const generateCategoryUrl = (category: string = "") => `/category/${category}`;
