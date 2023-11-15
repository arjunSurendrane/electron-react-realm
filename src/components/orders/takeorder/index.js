import Cart from "./Cart";
import MenuItemList from "./MenuItemList";

function TakeOrder() {
  return (
    <div className="flex justify-around">
      <MenuItemList />
      <Cart />
    </div>
  );
}

export default TakeOrder;
