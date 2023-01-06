import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { allReducers } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(allReducers);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
