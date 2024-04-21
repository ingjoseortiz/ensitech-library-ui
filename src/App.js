import logo from "./logo.svg";
import "./App.css";

import Menu from "./components/menu/Menu.js";
import PermanentDrawerLeft from "./components/drawer/Drawer.js";
import LoginForm from "./components/login/login.js";

//routing

function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") && (
        <PermanentDrawerLeft></PermanentDrawerLeft>
      )}
      {!localStorage.getItem("token") && <LoginForm></LoginForm>}
      <hr></hr>
    </div>
  );
}

export default App;
