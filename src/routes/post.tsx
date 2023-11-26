import { useRouteData, RouteDataArgs, Outlet, createRouteData } from "solid-start";
import { getMetadata } from "~/utils/posts";
import { get, find, isEqual } from "lodash";
import { styled } from "solid-styled-components";
import { PostHead } from "~/components/head/PostHead";

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
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
    const metadatas = await getMetadata();
    const slug = get(location, ["pathname"]).replace("/post/", "");
    const metadata = find(metadatas, (values) => isEqual(get(values, ["slug"]), slug));
    return metadata;
  });
}

export default function Post() {
  const data = useRouteData<typeof routeData>();
  return (
    <>
      <PostHead title={data()?.title || ""} description={data()?.description || ""} />
      <Header>
        <Title>{data()?.title || ""}</Title>
        <HeaderImage src={data()?.thumbnailUrl || ""}></HeaderImage>
        <HeaderInfo>
          <div>{data()?.date || ""}</div>
          <div>{data()?.readingTime || ""} min</div>
        </HeaderInfo>
      </Header>
      <Outlet />
    </>
  );
}
