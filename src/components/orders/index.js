import { useSelector } from "react-redux";
import Header from "./Heading";
import LiveOrder from "./liveorders";
import TakeOrder from "./takeorder";

function OrderPage() {
  const { tabId } = useSelector((state) => state.header);
  return (
    <div>
      <div>
        <Header />
      </div>
      {tabId === 1 ? <TakeOrder /> : <LiveOrder />}
    </div>
  );
}

export default OrderPage;
