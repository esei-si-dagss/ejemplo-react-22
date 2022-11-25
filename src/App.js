import './App.css';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./components/Home.js";
import IncrementoClases from "./components/incrementoClases";
import IncrementoHooks from "./components/incrementoHooks";
import UserListado from "./components/users/userListado";
import UserDetalle from "./components/users/userDetalle";


function App() {
    return (
        <BrowserRouter>
            <h1> Ejemplos: Hooks vs.Clases + APIs REST </h1>


            <Routes>
                <Route path="/" exact element={<Home mensaje="Hola MEI-SI"/>} />
                <Route path="clases" element={<IncrementoClases inicio="0" incremento="10" />} />
                <Route path="hooks" element={<IncrementoHooks inicio="0" incremento="10" />} />  
                <Route path="users">
                    <Route index element={<UserListado />}/>
                    <Route path=":id" element={<UserDetalle />} />
                </Route>  
                             
            </Routes>
        </BrowserRouter>
    );
}

export default App;
