import { Link } from "react-router-dom";
import { blogPosts } from "../blog";

export default function Writing() {
  return (
    <div className="max-w-4xl mx-auto  py-10">
      <h1 className="text-4xl font-bold mb-2">Musings</h1>
      <h2 className="text-xl text-gray-600 mb-8">
        Writing on the walls of my brain
      </h2>
      <ul className="space-y-8">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/writing/${post.slug}`}
              className="text-2xl text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {post.title}
            </Link>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className="text-gray-300">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
