import Image from "next/image";
import Layout from "../../components/Layaout";
import Product from "../../components/Products";
import { getItems } from "../../services/itemService";
import style from '../../styles/product.module.css'

/*Aca se carga la paágina principal en principio con 7 elementos */
export default function index({ items }) {

  const item2 = items
    .map((el) => (
            <Product key={el.id} item={el} showAs='default'/>

    )).slice(0,7)

  return (
    <Layout>
      <h1>Store</h1>
      <div className={style.productContainer}>

      {item2}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
// export async function getServerSideProps() {
//     const res = await getItems();
  
//     console.log(res);
  
//     return {
//       props: {
//         items: res,
//       },
//     };
//   }
  