import Image from "next/image";
import Link from "next/link";
import Layout from "../../Components/Layout";

export default function post1({ data }) {
  return (
    <div>
      <Layout title={"POST1"} description={"ESTE ES MI POST1XD"}>
        <p>Post1...</p>
        <h1>
          {data.id} - {data.title}
        </h1>
        <p>{data.boby}</p>
      </Layout>
    </div>
  );
}


export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();
    return {
      props: {
        data,
      }
    };
  } catch (error) {
    console.log(error);
  }
}

