
/**Boton de compra */

import style from '../styles/product.module.css'
import { useAppConext } from './StateWrapper';

export default function CartBtn({item}) {

  const cart  = useAppConext()

  function handleClick(){
    cart.addItemCart(item)
  }

  return (
    <span onClick={ handleClick} className={style.cartPage}>
      <i className="bi bi-basket"></i>
    </span>
  );
}
