import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import realmLogin from "./utils/realmLogin";
import OrderPage from "./components/orders";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Realm from "realm";
// const app = new Realm.App({ id: "application-0-phlys" });
function App() {
  useEffect(() => {
    realmLogin();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <OrderPage />
      </div>
    </Provider>
  );
}

export default App;
