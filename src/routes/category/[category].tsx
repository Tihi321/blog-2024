import { get } from "lodash";
import { createRouteData, useRouteData, RouteDataArgs } from "solid-start";
import { PostMeta, getCategorizedPosts } from "~/utils/posts";
import { styled } from "solid-styled-components";
import { Posts } from "~/components/post/Posts";

export function routeData({ location }: RouteDataArgs) {
  return createRouteData(async () => {
    const posts = await getCategorizedPosts();
    const category = get(location, ["pathname"]).replace("/category/", "");
    return { posts: get(posts, [category], []), category };
  });
}

const Container = styled("main")`
  padding: 48px 8px;
`;

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

export default function Category() {
  const values = useRouteData<() => () => { posts: PostMeta[]; category: string }>();

  return (
    <Container>
      <Title>{values()?.category}</Title>
      <section>
        <Posts posts={() => values()?.posts} />
      </section>
    </Container>
  );
}
