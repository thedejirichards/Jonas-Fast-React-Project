import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantityItem({
  id,
  currentQuantity,
}: {
  id: number;
  currentQuantity: number;
}) {
  const dispatch = useDispatch();
  // const shouldDisable = useSelector(getPizzaItemQuantity(id)) === 1
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="primary" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="primary" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
