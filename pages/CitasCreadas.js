import { CitaCard } from "../components/CitaCard.js"
import getCitas from "../connections/helpers/getCitas.js"


const CitasCreadas = async()=>{

    const citas=await getCitas()

    return (

    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="col col-sm-12 col-md-8 col-lg-6">
                    <div class="card-body">
                        <h3 class="text-center">Citas Creadas</h3>
                        ${
                            citas.map(cita=>
                        
                            CitaCard(cita, true)
                            // `
                            // <img src="${partido.image}" alt="">
                            // `
                            )
                        }
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `)
                    }
export {CitasCreadas} 