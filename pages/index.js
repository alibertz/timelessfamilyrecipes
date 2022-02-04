import { getSession, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";

export default function Home({ user }) {
  if (!user) return <Login />;
  return (
    <div>
      <Head>
        <title>Timeless Family Recipes</title>
        <meta name="description" content="Timeless Family Recieps" />
      </Head>

      {/* Header */}

      <main>
        {/* Sorting */}
        {/* Feed */}
        {/* Sidebar */}
      </main>

      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
