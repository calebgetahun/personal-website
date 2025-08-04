import { useParams } from "react-router-dom";
import { blogPosts } from "../blog";
import { Suspense, lazy } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <p>Post not found.</p>;

  const PostComponent = lazy(post.component);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 prose prose-lg">
      <Suspense fallback={<p>Loading...</p>}>
        <PostComponent />
      </Suspense>
    </div>
  );
}
