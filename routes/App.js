import { Nav } from "../layouts/Nav.js"
import { Footer } from "../layouts/Footer.js"
import { CitasCreadas } from "../pages/CitasCreadas.js"
import { Registrarse } from "../pages/Registrarse.js"
import { IniciarSesion } from "../pages/IniciarSesion.js"
import { Error404 } from "../pages/Error404.js" 
import getHash from "../connections/helpers/getHash.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"
import { CitasUsuario } from "../pages/CitasUsuario.js"
import { CrearCita } from "../pages/CrearCita.js"


const Rutas={
    "/":CitasCreadas,
    "/registrarse": Registrarse,
    "/iniciarsesion": IniciarSesion,
    "/citasusuario": CitasUsuario,
    "/crearcita": CrearCita,
    // "/citadetalle": CitaDetalle,
    // "/actualizarcita": ActualizarCita
        
}

const App =  async()=>{

    const header=document.querySelector("header")
    const main=document.querySelector("main")
    const footer=document.querySelector("footer")

    header.innerHTML= await Nav()
    //main.innerHTML= await Nav()
    footer.innerHTML= await Footer()

    let ruta= await resolverRutas(getHash())
    let pagina= (Rutas[ruta]) ? Rutas[ruta] : Error404

    main.innerHTML= await pagina()

}

export {App}