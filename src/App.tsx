import React from "react";
import "./App.css";
import {
  LoginView,
  Main,
  MyMenu,
  SelfVarificationCheck,
  RegistView,
  SitterMain
} from "./components";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  React.useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<LoginView />} />
        <Route path={"/beforeRegist"} element={< SelfVarificationCheck urlPath={"/regist"}/>}/>
        <Route path={"/regist"} element={<RegistView />} />
        <Route path={"/adopt"} element={<Main />} />
        <Route path={"/sitter"} element={<SitterMain />} />
        <Route path={"/shop"} element={<Main />} />
        <Route path={"/myMenu"} element={<MyMenu />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
