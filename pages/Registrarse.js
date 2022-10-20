import { RegistrarseFormulario } from "../components/RegistrarseFormulario.js"

const Registrarse= ()=>
    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h3 class="text-center">Registrar usuario</h3>
                    ${RegistrarseFormulario()}
                    <div class="mt-3">
                        <a href="#/iniciarsesion/">¿Ya tienes una cuenta? Iniciar sesion aqui.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

export {Registrarse}