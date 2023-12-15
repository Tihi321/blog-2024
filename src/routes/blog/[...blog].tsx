import { For } from "solid-js";
import { RouteDataArgs, createRouteData, useRouteData } from "solid-start";
import { PostMeta, getPosts } from "~/utils/posts";
import { styled } from "solid-styled-components";
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

const Container = styled("main")`
  padding: 48px 8px;
`;

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const Pagination = styled("div")`
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const PaginationLink = styled("a")<{ selected?: boolean }>`
  filter: ${(props) => (props?.selected ? "brightness(0.5)" : "brightness(1)")};
`;

const PaginationArrowLink = styled("a")<{ disabled?: boolean }>`
  pointer-events: ${(props) => (props?.disabled ? "none" : "all")};
  opacity: ${(props) => (props?.disabled ? 0.7 : 1)};
`;

export default function Blog() {
  const values = useRouteData<() => () => { posts: PostMeta[]; paged: number; pages: number }>();

  return (
    <Container>
      <Title>Blog</Title>
      <section>
        <Posts posts={() => values()?.posts} />
        <Pagination>
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
        </Pagination>
      </section>
    </Container>
  );
}
