import Image from "next/image";
import Layout from "../../components/Layaout";
import { getItems } from "../../services/itemService";

export default function index({ items }) {

  const item2 = items
    .map((el, index) => (
        <div key={index}>
      <img
        alt={el.title}
        src={el.thumbnailUrl}
        ></img>
        <p>{el.id}</p>
        </div>
    )).slice(0,3)

  return (
    <Layout>
      <h1>Store</h1>
      {item2}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  console.log(res);

  return {
    props: {
      items: res,
    },
  };
}
