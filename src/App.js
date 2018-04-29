import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { HeaderComponent } from "./Components/Common";
import LibraryListComponent from "./Components/LibraryListComponent";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <HeaderComponent headerTitle="Tech Stack" />
        <LibraryListComponent />
      </View>
    </Provider>
  );
};

export default App;
