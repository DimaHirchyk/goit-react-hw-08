import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "../../page/HomePage/HomePage";
import AppBar from "../AppBar/AppBar";
import RegisterPage from "../../page/Register page/RegisterPage";
import LoginPage from "../../page/LoginPage/LoginPage";
import ContactPage from "../../page/ContactPage/ContactPage";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selector";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <Suspense fallback={null}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/contacts" element={<ContactPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
