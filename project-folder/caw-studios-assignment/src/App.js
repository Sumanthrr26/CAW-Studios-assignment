import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainScreen from "./components/MainScreen";

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
