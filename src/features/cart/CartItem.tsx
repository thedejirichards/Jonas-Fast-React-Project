import type { CartItemType } from "../../types/type";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantityItem from "./UpdateQuantityItem";

function CartItem({ item }: {item: CartItemType}) {
  const { pizzaId, name, quantity, totalPrice } = item;
  if(!pizzaId) return //change later
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityItem id={pizzaId} currentQuantity={quantity}/>
        <DeleteItem id={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
