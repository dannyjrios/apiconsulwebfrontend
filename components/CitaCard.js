import { EliminarCitaBoton } from "../components/EliminarCitaBoton.js"

const CitaCard=(cita, micita)=>

`
    <div class="card mt-3 mb-3">
        <div class="card-header mi-card">
            <div>
                ${cita.asignado ? `<div class="mi-badge-asignado">Asignada</div>` : `<div class="mi-badge-pendiente">Pendiente</div>`}
            </div>
            ${ micita ?
            `<div>
                <a href="" class="btn btn-primary btn-sm me-2">Editar</a>
                ${EliminarCitaBoton()}
            </div>`
            :""
            }
        </div>
        <div class="card-body">
            <div class="card-title">
                <a href="/cita/${cita.id}">
                   Paciente ${cita.usuario} con el  ${cita.medico}
                </a>
            </div>
            <div class="card-text">
                Observaciones: ${cita.observacion}
            </div>
            <div class="card-text">
                Fecha: ${cita.fecha}
            </div>
            <div class="card-text">
                ${cita.usuario}, ${cita.creado}
            </div>

        </div>
    </div>
`


export {CitaCard}