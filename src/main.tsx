import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { SidebarProvider } from "./contexts/SidebarContext";
import { store } from "./store/configureStore";

import "nprogress/nprogress.css";
import "./styles.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// நடைவளம் (Nadai Vaḷam) → “Livestock Prosperity”