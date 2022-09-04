import Link from "next/link";
import style from "../styles/comp.module.css";

export default function Menu() {
  return (
    <nav className={style.menuContainer}>
      <div>
        <Link href="/">
          <a className={style.link}>Hola</a>
        </Link>
        <Link href='/store'>
            <a className={style.link}>Store</a>
        </Link>
        <Link href='/faq'>
            <a className={style.link}>FAQ</a>
        </Link>
      </div>
      <div>
        <Link href="#">
          <a className={style.link}>
            <i className="bi bi-basket"></i>
          </a>
        </Link>
      </div>
    </nav>
  );
}
