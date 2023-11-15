import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import realmLogin, { app, user } from "./utils/realmLogin";
import OrderPage from "./components/orders";
import { useDispatch } from "react-redux";
import Realm from "realm";
import { setMenuItems } from "./redux/menuItemSlice";
// const app = new Realm.App({ id: "application-0-phlys" });
function App() {
  const dispatch = useDispatch();
  const realmLogin = async () => {
    const app = new Realm.App({ id: "application-0-phlys" });
    const credentials = Realm.Credentials.anonymous();
    try {
      user = await app.logIn(credentials);
      const items = await user.functions.getMenuItems();
      const data = JSON.stringify(items);
      console.log({ data });
      dispatch(setMenuItems(JSON.parse(data)));
    } catch (error) {
      console.error("Failed to login:", error.message);
    }
  };
  useEffect(() => {
    realmLogin();
  }, []);
  return (
    <div className="App">
      <OrderPage />
    </div>
  );
}

export default App;
