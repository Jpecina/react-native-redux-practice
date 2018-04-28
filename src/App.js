import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { HeaderComponent } from "./Components/Common";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <HeaderComponent headerTitle="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
