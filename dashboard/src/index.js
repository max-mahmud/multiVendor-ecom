import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import store from "./store/index";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#252627",
              color: "#fff",
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);


