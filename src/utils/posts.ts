export interface Meta {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  categories: string[];
}
export interface PostMeta extends Meta {
  slug: string;
  readingTime: number;
}

export const getPosts = async (): Promise<PostMeta[]> => {
  const files = import.meta.glob("../routes/post/**/*.mdx");

  const posts = Object.keys(files).map(async (file) => {
    const slug = file.replace("../routes/post/", "").replace(".mdx", "");
    const module = (await files[file]()) as any;
    const contentLength = module.default ? module.default().length : 0;
    const readingTime = Math.ceil((contentLength * 2) / 60);

    return { slug, readingTime, ...((await module) as Meta) };
  });

  return Promise.all(posts);
};
