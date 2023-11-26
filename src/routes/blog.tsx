import { For } from "solid-js";
import { A, createRouteData, useRouteData } from "solid-start";

type Meta = {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
};

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob("./post/*.mdx");

    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace("./post/", "").replace(".mdx", "");
      const meta = await files[file]();

      return { slug, ...((await meta) as Meta) };
    });

    return Promise.all(posts);
  });
};

export default function Blog() {
  const posts = useRouteData<typeof routeData>();

  return (
    <div>
      <h1>My SolidStart Blog</h1>
      <section>
        <For each={posts()}>
          {(post) => (
            <A href={`/post/${post.slug}`}>
              <div>
                <img src={post.thumbnailUrl} alt="thumbnail" loading="lazy" />
              </div>

              <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.date}</p>
              </div>
            </A>
          )}
        </For>
      </section>
    </div>
  );
}
