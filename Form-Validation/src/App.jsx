import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";

function App() {
    return (
        <BrowserRouter>
            <div className="">
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
