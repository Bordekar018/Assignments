import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import AdminPanel from "./Components/AdminPanel";
import LoginAdmin from "./Components/LoginAdmin";
import CRUDProduct from "./Components/CRUDProduct";
import HomeProduct from "./Components/HomeProduct";

function App() {
  return (
    <div className="App">
      <HomeProduct />
    </div>
  );
}

export default App;
