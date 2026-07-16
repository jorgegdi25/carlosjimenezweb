import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/blog';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Carlos Alberto Jimenez",
  description: "Articulos de Carlos Alberto Jimenez sobre ludica, aprendizaje, sexualidad, neuroeducacion, salud emocional y cultura digital.",
};

export default function BlogList() {
  const posts = getSortedPostsData();

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Mi blog</h1>
          <p>Articulos de Carlos Alberto Jimenez sobre ludica, aprendizaje, sexualidad, neuroeducacion, salud emocional y cultura digital.</p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <div className="blog-grid blog-grid--archive">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.image && (
                  <Image src={post.image} alt={post.title} width={600} height={400} />
                )}
                <div>
                  <p className="post-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <Link className="text-link" href={`/blog/${post.slug}`}>Leer mas</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
