import { get, filter, includes } from "lodash";
import { For } from "solid-js";
import { createRouteData, useRouteData, RouteDataArgs } from "solid-start";
import { PostMeta, getPosts } from "~/utils/posts";
import { styled } from "solid-styled-components";
import { Post } from "~/components/post/Post";

export function routeData({ location }: RouteDataArgs) {
  return createRouteData(async () => {
    const posts = await getPosts();
    const category = get(location, ["pathname"]).replace("/category/", "");
    console.log({
      posts,
      category,
    });
    return { posts: filter(posts, (post) => includes(post.categories, category)), category };
  });
}

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

export default function Category() {
  const data = useRouteData<() => () => { posts: PostMeta[]; category: string }>();

  return (
    <div>
      <Title>{data()?.category}</Title>
      <section>
        <For each={data()?.posts}>
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
