import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "../../page/HomePage/HomePage";
import AppBar from "../AppBar/AppBar";
import RegisterPage from "../../page/Register page/RegisterPage";
import LoginPage from "../../page/LoginPage/LoginPage";
import ContactPage from "../../page/ContactPage/ContactPage";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/contacts" element={<ContactPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
