import { For } from "solid-js";
import { RouteDataArgs, createRouteData, useRouteData } from "solid-start";
import { PostMeta, getPosts } from "~/utils/posts";
import { styled } from "solid-styled-components";
import { Post } from "~/components/post/Post";
import { get, isEmpty, isEqual, isNumber, toNumber, range } from "lodash";
import { Posts } from "~/components/post/Posts";

export const routeData = ({ location }: RouteDataArgs) => {
  return createRouteData(async () => {
    const posts = await getPosts();
    const page = get(location, ["pathname"]).replaceAll("/", "").replace("blog", "");
    const pagedValue =
      isEqual(page, "0") || isEmpty(page) || !isNumber(toNumber(page)) ? 0 : Number(page);

    const pagedPosts: PostMeta[][] = posts.reduce((acc: PostMeta[][], curr: PostMeta) => {
      if (acc[acc.length - 1]?.length < 5) {
        acc[acc.length - 1].push(curr);
      } else {
        acc.push([curr]);
      }
      return acc;
    }, []);

    const paged = get(pagedPosts, [pagedValue]) ? pagedValue : 0;

    return { paged, pages: pagedPosts.length, posts: get(pagedPosts, [paged]) };
  });
};

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const PaginationLink = styled("a")<{ selected?: boolean }>`
  text-decoration: ${(props) => (props?.selected ? "underline" : "unset")};
`;

const PaginationArrowLink = styled("a")<{ disabled?: boolean }>`
  pointer-events: ${(props) => (props?.disabled ? "none" : "all")};
  opacity: ${(props) => (props?.disabled ? 0.7 : 1)};
`;

export default function Blog() {
  const values = useRouteData<() => () => { posts: PostMeta[]; paged: number; pages: number }>();

  console.log(values());

  return (
    <div>
      <Title>Blog</Title>
      <section>
        <Posts posts={() => values()?.posts} />
        <PaginationArrowLink
          href={`/blog/${values()?.paged - 1}`}
          disabled={isEqual(values()?.paged, 0)}
        >
          {"<"}
        </PaginationArrowLink>
        <For each={range(values()?.pages)}>
          {(paged) => (
            <PaginationLink selected={isEqual(paged, values()?.paged)} href={`/blog/${paged}`}>
              {paged}
            </PaginationLink>
          )}
        </For>
        <PaginationArrowLink
          href={`/blog/${values()?.paged + 1}`}
          disabled={isEqual(values()?.paged, values()?.pages - 1)}
        >
          {">"}
        </PaginationArrowLink>
      </section>
    </div>
  );
}
