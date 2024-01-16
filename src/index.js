import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VerifyPhone from "./pages/VerifyPhone";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify-phone" element={<VerifyPhone />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
