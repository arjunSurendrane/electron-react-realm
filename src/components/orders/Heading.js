import { useDispatch, useSelector } from "react-redux";
import { setLiveOrderTab, setTakeOrder } from "../../redux/headerSlice";
import { useEffect } from "react";

function Header() {
  const { tabId } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const handleTakeOrderTab = () => {
    dispatch(setTakeOrder());
  };
  const handeLiveOrderTab = () => {
    dispatch(setLiveOrderTab());
  };

  useEffect(() => {}, []);
  return (
    <div className="flex justify-around border-b-2">
      <div
        className={`w-[50%] text-center border-r-2 px-5 py-5 ${
          tabId === 1 ? "bg-green-200" : ""
        }`}
        onClick={handleTakeOrderTab}
      >
        Take Order
      </div>
      <div
        className={`w-[50%] text-center border-r-2 px-5 py-5 ${
          tabId === 2 ? "bg-green-200" : ""
        }`}
        onClick={handeLiveOrderTab}
      >
        Live Orders
      </div>
    </div>
  );
}

export default Header;
