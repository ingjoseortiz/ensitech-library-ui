import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/menu/Menu.js";
import PermanentDrawerLeft from "./components/drawer/Drawer.js";

//routing

function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <hr></hr>
    </div>
  );
}

export default App;
