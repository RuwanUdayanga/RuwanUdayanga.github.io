import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Profile from "./Profile";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Contacts from "./Contacts";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Profile />
    <About />
    <Work />
    <Education />
    <Contacts />
  </React.StrictMode>
);
