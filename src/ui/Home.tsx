import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import type { RootState } from "../store";
import Button from "./Button";

function Home() {
  const userName = useSelector((state: RootState) => state.user.username)
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl text-stone-700 font-semibold md:text-3xl px-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === ""? <CreateUser/>: <Button to="menu" type="primary">Menu</Button>}
    </div>
  );
}

export default Home;