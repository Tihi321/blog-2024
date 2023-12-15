import { useRouteData, RouteDataArgs, Outlet, createRouteData } from "solid-start";
import { PostMeta, getPosts } from "~/utils/posts";
import { get, find, isEqual } from "lodash";
import { styled } from "solid-styled-components";
import { PostHead } from "~/components/head/PostHead";

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const Container = styled("main")`
  padding: 48px 8px;
`;

const HeaderImage = styled("div")<{ src: string }>`
  width: 100%;
  height: 400px;
  background: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
`;

const Header = styled("header")`
  padding-bottom: 32px;
`;

const HeaderInfo = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export function routeData({ location }: RouteDataArgs) {
  return createRouteData(async () => {
    const posts = await getPosts();
    const slug = get(location, ["pathname"]).replace("/post/", "");
    const post = find(posts, (values) => isEqual(get(values, ["slug"]), slug));
    return post;
  });
}

export default function Post() {
  const post = useRouteData<() => () => PostMeta>();
  return (
    <Container>
      <PostHead title={post()?.title || ""} description={post()?.description || ""} />
      <Header>
        <Title>{post()?.title || ""}</Title>
        <HeaderImage src={post()?.thumbnailUrl || ""}></HeaderImage>
        <HeaderInfo>
          <div>{post()?.date || ""}</div>
          <div>{post()?.readingTime || "0"} min</div>
        </HeaderInfo>
      </Header>
      <Outlet />
    </Container>
  );
}
