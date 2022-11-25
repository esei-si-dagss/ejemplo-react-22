import { Fragment } from 'react'
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <Fragment>
            <ul>
                <li> <Link to="/clases" > Con Clases </Link> </li>
                <li> <Link to="/hooks" > Con Funciones/Hooks </Link> </li>
                <li> <Link to="/users" > Acceso API REST con Aixos </Link> </li>
            </ul>
            <h3> Mensaje: {props.mensaje}</h3>
        </Fragment>
    );
}