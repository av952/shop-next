import Link from "next/link";
import style from '../styles/product.module.css'

export default function Product({ item, showAs }) {
  console.log("🚀 ~ file: Products.js ~ line 5 ~ Product ~ item", item)
  return (
    <div className={style.container}>
      <div>
        <Link href= {`/store/${item.id}`} >
          <a onClick={(el)=>console.log(item.id)}>
            <img className={style.img} src={item.url} alt={item.title} />
          </a>
        </Link>
      </div>
      <div className={style.title}>
        <h5>{item.title.slice(0,5)}</h5>
      </div >
      <div className={style.description}>
        <h3 className={style.h31}>{`$ ${item.id}`}</h3>
        <span className={style.cart}><i className="bi bi-basket"></i></span>
      </div>
    </div>
  );
}
