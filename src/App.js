import coffeeBean from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import React from "react";
import SetCoffeeBean from "./components/SetCoffeeBean";
function App() {
  return (
    <React.Fragment>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean />
      <SetCoffeeBean coffeeBeans={coffeeBean} />
    </React.Fragment>
  );
}

export default App;
