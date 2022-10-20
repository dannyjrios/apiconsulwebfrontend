const EliminarCitaBoton= ()=>{

    return (
        `
        <a href="" class="btn btn-danger btn-sm me-2" data-bs-toggle="modal" data-bs-target="#crearalerta">
            Eliminar
        </a>
        <div class="modal fade" id="crearalerta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Eliminar Cita</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  .Está seguro que desea eliminar la cita ?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        `
    )
}

export {EliminarCitaBoton}