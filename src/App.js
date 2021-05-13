import coffeeBean from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean />
    </ React.Fragment>
  );
}

export default App;
