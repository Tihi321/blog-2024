import { createRouteData, useRouteData } from "solid-start";
import { PostMeta, generatePostUrl, getFeaturedPosts } from "~/utils/posts";
import { createMemo } from "solid-js";
import { styled } from "solid-styled-components";
import { map } from "lodash";

export const routeData = () => {
  return createRouteData(async () => {
    const posts = await getFeaturedPosts();

    return posts;
  });
};

const Container = styled("h1")`
  padding: 48px 8px;
  height: 100vh;
`;

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const Footer = styled("footer")`
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #ccc;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export default function Home() {
  const values = useRouteData<() => () => PostMeta[]>();

  const posts = createMemo(() =>
    map(values(), (post, index) => {
      if (index < 3) {
        return post;
      }
    })
  );

  return (
    <Container>
      <Title>Home</Title>
      <Footer>
        {map(posts(), (values) => (
          <a href={generatePostUrl(values?.slug)}>
            <div>{values?.title}</div>
          </a>
        ))}
      </Footer>
    </Container>
  );
}
