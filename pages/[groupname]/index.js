import { useRouter } from "next/router";
import nextConnect from "next-connect";
import { MongoClient } from "mongodb";
import Header from "../../components/Header";

export default function ({ group }) {
  const router = useRouter();

  const { query } = router.query;

  return (
    <div>
      <Header />
      <h2>{group.groupName}</h2>
      <h3>{group._id}</h3>
      <h5>{group.groupType}</h5>
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id

  const res = await fetch("http://localhost:3000/api/groups", {
    method: "GET",
  });
  const groups = await res.json();

  function getPaths() {
    return groups.data.map((group) => {
      return {
        params: {
          groupname: `${group.groupName}`,
        },
      };
    });
  }

  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();

  const group = await db
    .collection("groups")
    .findOne({ groupName: params.groupname });

  client.close();

  return {
    props: {
      group: JSON.parse(JSON.stringify(group)),
    },
  };
}
