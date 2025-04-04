import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginModalProvider } from "./components/hooks/LoginModalContext.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LoginModalProvider>
      <App />
    </LoginModalProvider>
  </React.StrictMode>
);
