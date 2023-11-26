import { For } from "solid-js";
import { A, createRouteData, useRouteData } from "solid-start";
import { getMetadata } from "~/utils/posts";
import { styled } from "solid-styled-components";

export const routeData = () => {
  return createRouteData(getMetadata);
};

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const Post = styled("div")`
  display: flex;
  gap: 16px;
  padding: 8px 0;
`;

const Info = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled("p")`
  line-height: 1;
  padding-bottom: 4px;
`;

const Thumbnail = styled("div")<{ src: string }>`
  width: 200px;
  height: 120px;
  background: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
`;

export default function Blog() {
  const posts = useRouteData<typeof routeData>();

  return (
    <div>
      <Title>Blog</Title>
      <section>
        <For each={posts()}>
          {(post) => (
            <A href={`/post/${post.slug}`}>
              <Post>
                <Thumbnail src={post.thumbnailUrl} />
                <Info>
                  <h3>{post.title}</h3>
                  <Description>{post.description}</Description>
                  <Description>{post.date}</Description>
                  <Description>{post.readingTime} min</Description>
                </Info>
              </Post>
            </A>
          )}
        </For>
      </section>
    </div>
  );
}
