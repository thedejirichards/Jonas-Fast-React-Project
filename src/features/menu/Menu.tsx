import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import type { pizzaType } from "../../types/type";

function Menu() {
  const menu = useLoaderData() as pizzaType[]
  console.log(menu)
  return <ul className="divide-y divide-stone-200 px-2">{menu.map(item=> <MenuItem pizza={item} key={item.id}/>)}</ul>;
}


// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu;
