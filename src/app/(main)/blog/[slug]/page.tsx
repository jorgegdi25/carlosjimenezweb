import { getAllPostSlugs, getPostData } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const postData = await getPostData(params.slug);
  return {
    title: `${postData.title} | Carlos Alberto Jimenez`,
    description: postData.description,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function Post(props: Props) {
  const params = await props.params;
  const postData = await getPostData(params.slug);

  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="container article-hero__grid">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>{postData.title}</h1>
            <p>{postData.description}</p>
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
          {postData.image && <img src={postData.image} alt={postData.title} />}
        </div>
      </header>
      <div className="container article-layout">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />
        <aside className="article-sidebar" aria-label="Mas articulos">
          <h2>Mas articulos</h2>
          <Link className="button button--primary" href="/blog">
            Volver al blog
          </Link>
        </aside>
      </div>
    </article>
  );
}
