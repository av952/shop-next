import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from '../styles/product.module.css'

export default function Product({ item, showAs }) {


    switch(showAs){
      case 'page':
        return(
          <div className={style.containerPage}>
          <div>

                <img className={style.imgPage} src={item.url} alt={item.title} />

          </div>

          <div className={style.descriptionPage}>
           <div>
            <h5>Your product</h5>

            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  </p>

           </div>

            <div className={style.pricePage}>
            <h3 className={style.h31}>{`$ ${item.id}`}</h3>
            <span className={style.cartPage}><i className="bi bi-basket"></i></span>
            </div>

          </div>
        </div>
        )

      case 'list':
        return(
          <h3>List</h3>
        )
    }


  return (
    <div className={style.container}>
      <div>
        <Link href= {`/store/${convertToPath(item.title)}`} >
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
