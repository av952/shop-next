import Layout from "../../components/Layaout";
import Product from "../../components/Products";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Product item={productInfo.data} showAs="list" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const path = await getPathsFromIds();

  return {
    paths: path,
    fallback: false,
    // si una ruta no existe nos manda a 404 por defecto
  };
}

export async function getStaticProps({ params }) {
  const id = await params.id;

  const product = await getItemData(id);
  console.log(
    "🚀 ~ file: [id].js ~ line 32 ~ getStaticProps ~ product",
    product
  );

  return {
    props: {
      //este valor es retornado para ser usado como prop en la función principal de este archivo
      productInfo: product,
    },
  };
}
