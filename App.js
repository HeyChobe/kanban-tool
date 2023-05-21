import { Provider } from "react-redux";
import store from "./app/store";
import Navigation from "./components/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
