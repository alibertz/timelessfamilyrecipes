export default function Posts({ posts }) {
  return (
    <div>
      <ul>
        {posts.data.map((post) => (
          <li key={`post-${post._id}`}>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
          </li>
        ))}
        <button onClick={() => console.log(posts)}>click</button>
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts", { method: "GET" });
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
