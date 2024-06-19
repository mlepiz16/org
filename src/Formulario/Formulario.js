import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../componentes/CampoTexto/";
import ListaOpciones from "../componentes/ListaOpciones";
import Boton from "../componentes/Boton";

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
                
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarFoto} 
                
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario