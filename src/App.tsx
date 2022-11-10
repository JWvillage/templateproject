import React from "react";
import "./App.css";
import { LoginView, Main, RegistView } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  React.useEffect(() => {}, []);

  return (
    // <>
    //   <LoginView />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<LoginView />} />
        <Route path={"/regist"} element={<RegistView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
