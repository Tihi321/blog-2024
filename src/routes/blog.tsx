import { For } from "solid-js";
import { A, createRouteData, useRouteData } from "solid-start";
import { getMetadata } from "~/utils/posts";

export const routeData = () => {
  return createRouteData(getMetadata);
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
