import { EliminarCitaBoton } from "../components/EliminarCitaBoton.js"

const CitaCard=(cita, micita)=>

`
    <div class="card mt-3 mb-3">
        <div class="card-header mi-card">
            <div >
                ${cita.asignado ? `<div class="mi-badge-asignado">Asignada</div>` : `<div class="mi-badge-pendiente">Pendiente</div>`}
            </div>
            ${ micita ?
            `<div>
                <a href="" class="btn btn-primary btn-sm me-4">Editar</a>
                ${EliminarCitaBoton()}
            </div>`
            :""
            }
        </div>
        <div class="card-body">
            <div class="card-text float-md-right">
                <strong>Fecha de la cita:</strong> ${cita.fecha}
            </div>
            <div class="card-title">
                <a href="/cita/${cita.id}"><br>
                    <strong>Paciente:</strong> ${cita.usuario} <br><strong>Doctor(a):</strong>  ${cita.medico}
                </a>
            </div>
            <div class="card-text">
                <strong>Observaciones:</strong> ${cita.observacion}
            </div>
            <!-- <div class="card-text">
                <strong>Fecha de la cita:</strong> ${cita.fecha}
            </div> -->
            <div class="card-text" style="font-size: 13px;">
                <strong> Creado por</strong>  ${cita.usuario} <strong>  el </strong>  ${cita.creado}
            </div>

        </div>
    </div>
    
`


export {CitaCard}