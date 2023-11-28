import { For } from "solid-js";
import { RouteDataArgs, createRouteData, useRouteData } from "solid-start";
import { PostMeta, getPosts } from "~/utils/posts";
import { styled } from "solid-styled-components";
import { Post } from "~/components/post/Post";
import { get } from "lodash";

export const routeData = ({ location }: RouteDataArgs) => {
  return createRouteData(async () => {
    const posts = await getPosts();
    const page = get(location, ["pathname"]).replace("/blog/", "");
    console.log(page);

    return posts;
  });
};

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

export default function Blog() {
  const posts = useRouteData<() => () => PostMeta[]>();

  return (
    <div>
      <Title>Blog</Title>
      <section>
        <For each={posts()}>
          {(post) => (
            <Post
              title={post.title}
              categories={post.categories}
              date={post.date}
              slug={post.slug}
              description={post.description}
              readingTime={post.readingTime}
              thumbnailUrl={post.thumbnailUrl}
            />
          )}
        </For>
      </section>
    </div>
  );
}
