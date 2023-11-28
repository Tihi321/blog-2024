import { For } from "solid-js";
import { styled } from "solid-styled-components";
import { PostMeta } from "~/utils/posts";
import { Post } from "./Post";

const Container = styled("div")`
  padding: 8px 0;
`;

export const Posts = ({ posts }: { posts: () => PostMeta[] }) => {
  return (
    <Container>
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
    </Container>
  );
};
