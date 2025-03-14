import { Metadata } from "next";
import { createPost } from "../actions";

export const metadata: Metadata = {
  title: "Create Post | Instapost",
  description: "Create your own post",
};

export default function NewPostPage() {
  return (
    <main className="p-4">
      <form action={createPost} className="grid gap-2">
        <h2 className="text-2xl">Add new post</h2>
        <input
          className="bg-slate-50 rounded px-2 py-1"
          name="title"
          type="text"
          placeholder="Add a title..."
        />
        <textarea
          className="bg-slate-50 rounded px-2 py-1"
          name="content"
          placeholder="Add your content..."
          rows={8}
        />
        <input
          className="bg-slate-50 rounded px-2 py-1"
          name="author"
          type="text"
          placeholder="Add an author..."
        />
        <button className="px-2 py-1 rounded hover:bg-slate-100 cursor-pointer">
          Save
        </button>
      </form>
    </main>
  );
}
