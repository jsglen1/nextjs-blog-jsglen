import Link from "next/link";
import Layout from "../../Components/Layout";

export default function index({ datas }) {
  return (
    <div>
      <Layout title={"Blog"} description={"agrege un Blog ;v"}>
        <p>Blog...</p>
        {datas.map(({ id, title, body }) => (
          <div key={id}>
            <h3>
              <Link href={`/blog/${id}`}>
                <a>
                  {id}-{title}
                </a>
              </Link>
            </h3>
            <p>{body}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    const datas = await res.json();
    return {
      props: {
        datas,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
