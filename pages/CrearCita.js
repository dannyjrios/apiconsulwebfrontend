import { CrearCitaFormulario } from "../components/CrearCitaFormulario.js"

const CrearCita = ()=>

    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="col col-sm-12 col-md-8 col-lg-6">
                    <div class="card-body">
                        <h3 class="text-center">Crear Cita</h3>
                        ${CrearCitaFormulario()}
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `

export {CrearCita} 