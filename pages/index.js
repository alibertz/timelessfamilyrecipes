import { getSession, signOut } from "next-auth/react";
import Header from "../components/Header";
import styles from "../styles/Pages/Home/Home.module.scss";
import Sort from "../components/Sort";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

export default function Home({ user, posts }) {
  return (
    <div className={styles.maincontainer}>
      <Header />

      <main>
        <Landing />
        <Sort />
        {posts ? (
          <Feed posts={posts} />
        ) : (
          <h2 className={styles.loginMsg}>Log in to see posts</h2>
        )}
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/posts", { method: "GET" });
  const posts = await res.json();
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user, posts },
  };
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/posts", { method: "GET" });
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
