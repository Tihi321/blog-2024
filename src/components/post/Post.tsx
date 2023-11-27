import { For } from "solid-js";
import { styled } from "solid-styled-components";

const Container = styled("div")`
  display: flex;
  gap: 16px;
  padding: 8px 0;
`;

const Info = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

const Categories = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Description = styled("p")`
  line-height: 1;
  padding-bottom: 0;
`;

const Thumbnail = styled("div")<{ src: string }>`
  width: 200px;
  height: 100%;
  background: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
`;

export const Post = ({
  slug,
  title,
  thumbnailUrl,
  description,
  date,
  readingTime,
  categories,
}: {
  slug: string;
  title: string;
  thumbnailUrl: string;
  description: string;
  date: string;
  readingTime: number;
  categories: string[];
}) => {
  return (
    <Container>
      <a href={`/post/${slug}`}>
        <Thumbnail src={thumbnailUrl} />
      </a>
      <Info>
        <a href={`/post/${slug}`}>
          <h3>{title}</h3>
        </a>
        <Description>{description}</Description>
        <Description>{date}</Description>
        <Description>{readingTime} min</Description>
        <Categories>
          <For each={categories}>
            {(category) => (
              <a href={`/category/${category}`}>
                <span>{category}</span>
              </a>
            )}
          </For>
        </Categories>
      </Info>
    </Container>
  );
};
