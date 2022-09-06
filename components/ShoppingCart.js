/**Elemento que despliega los itemes agregados al carrito */

import { useAppConext } from "./StateWrapper";
import Products from "../components/Products";
import style from "../styles/shoppingCart.module.css";

export default function ShoppingCart() {
  const cart = useAppConext();
  console.log("🚀 ~ file: ShoppingCart.js ~ line 9 ~ ShoppingCart ~ cart", cart.items)

  function getTotal(){
    
    const total = cart.items.reduce((acc,item)=>(
      acc+item.qty*item.id
    ),0)

    return total
  }

  return (
    <div
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.btn} onClick={cart.openCart}>
        Close
      </button>
      {cart.items.length == 0 ? (
        <p className={style.empty}>Cart is empty</p>
      ) : (
        <>
          <div>
            {cart.items.map((el) => (
              <Products key={el.id} item={el} showAs="list" qty={el.qty} />
            ))}
          </div>
        </>
      )}

      <div className={style.total}>Total: ${getTotal()}</div>
    </div>
  );
}
