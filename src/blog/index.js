export const blogPosts = [
  {
    title: "Lessons of the Iron: Lifting as a Mirror to Life",
    slug: "lifting-iron",
    date: "July 12, 2025",
    excerpt: "Reflections on how lifting parallels life.",
    component: () => import("./my-first-blog.mdx"),
  },
  {
    title: "The Theory behind a Rubik's cube",
    slug: "rubiks-cube-theory",
    date: "July 14, 2025",
    excerpt:
      "All of the mathematical elements hidden within the 3x3 Rubik's cube",
    component: () => import("./rubiks-cube-math.mdx"),
  },
];
