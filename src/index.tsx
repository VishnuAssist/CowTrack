import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 createRoot
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "nprogress/nprogress.css";
import App from "src/App";
import { SidebarProvider } from "src/contexts/SidebarContext";
import * as serviceWorker from "src/serviceWorker";

import { Provider } from "react-redux"; // ✅ Import Redux Provider
import { store } from "../src/store/configureStore"; // ✅ Import your Redux store

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

serviceWorker.unregister();
