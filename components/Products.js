import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from '../styles/product.module.css'
import CartBtn from '../components/CartBtn'
import { useAppConext } from "./StateWrapper";

export default function Product({ item, showAs ,qty }) {

  const cart = useAppConext()

    switch(showAs){
      case 'page':
        return(
          <div className={style.containerPage}>
          <div>

                <img className={style.imgPage} src={item.url} alt={item.title} />

          </div>

          <div className={style.descriptionPage}>
           <div>
            <h5>{item.title}</h5>

            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  </p>

           </div>

            <div className={style.pricePage}>
            <h3 className={style.h31}>{`$ ${item.id}`}</h3>
            {/**Toma los estilos del mismo css*/}
            <CartBtn item={item}/>
            </div>

          </div>
        </div>
        )

      case 'list':
        return(
          <div className={style.containerList}>
            <div >
            <img className={style.imgList} src={item.url} alt={item.title} />
            </div>
            <div className={style.subcontainerList}>

            <div>${item.id}</div>
            <div>
            <div>{qty} units</div>
            <div className={style.btnsAdd}>
              <span onClick={()=> cart.addMinus(item,'+')} ><i className="bi bi-plus-circle"></i></span>
              <span onClick={()=>cart.addMinus(item,'-')} ><i className="bi bi-dash-circle"></i></span>
            </div>

            </div>
            <div>SubTotal: {qty * item.id}</div>
            <span  onClick={()=>cart.deletef(item)}  className={style.delete}><i className="bi bi-x-circle"></i></span>
            </div>
          </div>
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
        <CartBtn item={item}></CartBtn>
      </div>
    </div>
  );
}
