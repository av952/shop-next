import Link from "next/link";
import style from "../styles/comp.module.css";
import { useAppConext } from "./StateWrapper";

export default function Menu() {
  const cart = useAppConext();
  console.log("🚀 ~ file: Menu.js ~ line 7 ~ Menu ~ cart", cart.openCart);

  return (
    <nav className={style.menuContainer}>
      <div>
        <Link href="/">
          <a className={style.link}>Hola</a>
        </Link>
        <Link href="/store">
          <a className={style.link}>Store</a>
        </Link>
        <Link href="/faq">
          <a className={style.link}>FAQ</a>
        </Link>
      </div>
      <div>
        {/**Aparecemos y desaparecemos la list de compras con el onclick */}
          <a onClick={cart.openCart}>
        <div className={style.btnCart}>
            <p>{cart.getNumberofItems()>10 ? '+9':cart.getNumberofItems()}</p>
            <i className="bi bi-basket"></i>
        </div>
          </a>
      </div>
    </nav>
  );
}
