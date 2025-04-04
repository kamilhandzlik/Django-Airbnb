import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginModalProvider } from "./components/hooks/LoginModalContext.jsx";
import { SignUpModalProvider } from "./components/hooks/SignUpModalContext.jsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SignUpModalProvider>
      <LoginModalProvider>
        <App />
      </LoginModalProvider>
    </SignUpModalProvider>
  </React.StrictMode>
);
