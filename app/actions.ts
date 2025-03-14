"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!title || !content || !author) throw new Error("400");

  await db.post.create({
    data: { title, content, author, slug: encodeURI(title) },
  });
  revalidatePath("/");
  redirect("/");
}

export async function deletePost(id: number) {
  await db.post.delete({ where: { id: id } });
  revalidatePath("/");
}
