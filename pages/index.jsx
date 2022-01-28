import Layout from "../Components/Layout";
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout title={"home | next.sj"} description={"esta es el home principal"} home>
      <section className={utilStyles.headingMd}>
        <p>[hola soy jesus glen cordial saludo]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
