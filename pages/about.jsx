import Link from "next/link";
import Layout from "../Components/Layout";

export default function about() {
  return (
    <div>
      <Layout title={"NOSOTROS"} description={"agrege un nostros ;v"}>
        <p>nostros...</p>
      { /* <div>
          <h1>Nostros</h1>
          <button>
            <Link href={"/"}>
              <a>Inicio con link</a>
            </Link>
          </button>
      </div> */}
      </Layout>
    </div>
  );
}
