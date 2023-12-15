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

const Container = styled("div")`
  padding: 48px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled("h1")`
  text-align: center;
  margin: 8px 0;
  font-weight: bold;
`;

const FeaturedTitle = styled("h3")`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 8px 0;
  font-weight: bold;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid currentColor;
  }

  &::before {
    margin-right: 0.5em;
  }

  &::after {
    margin-left: 0.5em;
  }
`;

const Featured = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
`;

const HomeImage = styled("img")`
  border: none;
  width: 100%;
  filter: drop-shadow(2px 2px 4px black);
`;

const Content = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Footer = styled("footer")`
  text-align: center;
  padding: 16px;
  border-radius: 0 0 24px 24px;
  border-top: 10px solid ${(props) => props?.theme?.colors.ui1};
  background-color: ${(props) => props?.theme?.colors.ui2};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  margin-top: auto;
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
      <Content>
        <HomeImage src="/assets/homer-reading.png" />
      </Content>

      <Footer>
        <Title>Blog</Title>
        <div>
          I'm a passionate futurist with a deep interest in physics and science. A professional
          programmer and coder specializing in innovative applications. My fascination with
          artificial intelligence extends to my hobbies, where I constantly explore AI in various
          forms and engage in philosophical discussions. My enthusiasm for technology and its
          potential impact on the future shapes both my career and personal pursuits.
        </div>
        <FeaturedTitle>Featured</FeaturedTitle>
        <Featured>
          {map(posts(), (values) => (
            <a href={generatePostUrl(values?.slug)}>{values?.title}</a>
          ))}
        </Featured>
      </Footer>
    </Container>
  );
}
