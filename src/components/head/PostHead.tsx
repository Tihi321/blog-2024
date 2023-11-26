import { Head, Title, Meta } from "solid-start";

type PostHeadProps = {
  title: string;
  description: string;
};

export const PostHead = ({ title, description }: PostHeadProps) => {
  return (
    <Head>
      <Title>{title} - Solid Blog</Title>
      <Meta name="description" content={description} />
      <Meta property="og:title" content={`${title} - Blog`} />
      <Meta property="og:description" content={description} />
    </Head>
  );
};
