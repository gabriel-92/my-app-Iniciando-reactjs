import React from "react";

import Contador from "./components/Contador";
import NavBar from "./components/NavBar";
function App() {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="App">
                    <h1 className="m-t5">Hola mundo</h1>
                    <Contador />
                </div>
            </div>
        </>
    );
}

export default App;
