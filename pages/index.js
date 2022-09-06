import Layout from '../components/Layaout'
import Product from '../components/Products'
import { getLatestItems } from '../services/itemService'
import style from '../styles/product.module.css'


export default function Home({items}) {
  return (
    <Layout title='Bienvenido'>

        <div>
        <div className={style.bannerBackground}>

        <h1>Shop the summer</h1>
        <h3>2022 Collection</h3>
        </div>

        </div>
        <h3>Latest products</h3>

          <div className={style.productContainer}>

          {items && items.map(el=>(
            <Product key={el.id} item={el} showAs={'pelo'}/>
            ))}
          </div>
 
    </Layout>

  )
}


export async function getStaticProps(){
  const  res  = await getLatestItems()

  return{
    props:{
      items: res
    }
  }
}