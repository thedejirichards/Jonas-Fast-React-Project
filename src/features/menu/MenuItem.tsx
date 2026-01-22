import type { pizzaType } from "../../types/type";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }: {pizza: pizzaType}) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  if(!id) return
  return (
    <li>

      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
