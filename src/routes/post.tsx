import { createEffect, createSignal } from "solid-js";
import { useRouteData, RouteDataArgs, Outlet, createRouteData } from "solid-start";
import { getMetadata } from "~/utils/posts";
import { get, find, isEqual } from "lodash";
import { styled } from "solid-styled-components";
import { PostHead } from "~/components/head/PostHead";

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
`;

const Image = styled("img")`
  width: 100%;
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
      <header>
        <Image src={data()?.thumbnailUrl || ""}></Image>
        <Title>{data()?.title || ""}</Title>
      </header>
      <Outlet />
    </>
  );
}
