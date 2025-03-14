import { db } from "@/prisma/db";
import DeletePostButton from "../ui/delete-post-button";

export async function generateStaticParams() {
  const posts = await db.post.findMany();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await db.post.findUnique({ where: { slug } });

  if (!post) return <main>404</main>;

  return (
    <main className="grid gap-8 p-4">
      <article key={post.id} className="grid">
        <section className="flex justify-between items-center">
          <span className="text-slate-700">
            {post.createdAt.toLocaleDateString()}
          </span>
          <DeletePostButton post={post} />
        </section>
        <h2 className="text-2xl">{post.title}</h2>
        <p className="text-slate-800">{post.content}</p>
        <p className="text-slate-700">Author: {post.author}</p>
      </article>
    </main>
  );
}
