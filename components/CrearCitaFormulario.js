const CrearCitaFormulario= ()=>
`
<form >
    <div class="row">
        <div class="col col-md-6 col-lg-12">
            <label for="fecha" class="form-label">Fecha</label>
            <input type="date" class="form-control" id="fecha">
        </div>
    </div>
    <div class="row">
        <div class="col col-md-6 col-lg-12">
            <div class="mb-3 mb-lg-3">
                <label for="usuario" class="form-label">Usuario</label>
                <select name="" id="usuario" class="form-select">
                    <option selected>Seleccione</option>
                    <option value="1">Daniel</option>
                    <option value="2">Juan</option>
                    <option value="3">María</option>
                    <option value="4">Lucia</option>
                    <option value="5">Pedro</option>
                </select>
            </div>
        </div>
    
        <div class="col col-md-6 col-lg-12">
        <div class="mb-3 mb-lg-3">
            <label for="medico" class="form-label">Médico</label>
            <select name="" id="usuario" class="form-select">
                <option selected>Seleccione</option>
                <option value="1">Dr. Daniel</option>
                <option value="2">Dr. Juan</option>
                <option value="3">Dr. María</option>
                <option value="4">Dr. Lucia</option>
                <option value="5">Dr. Pedro</option>
            </select>
        </div>
    </div>
</div>
<div class="row">
    <div class="col col-md-6 col-lg-12">
        <div class="mb-3 mb-lg-3">
            <label for="observacion" class="form-label">Observación</label>
            <select name="" id="observacion" class="form-select">
        </div>
    </div>
</div>
    <button type="submit" class="btn btn-primary mt-3">Crear Cita</button>
</form>
`
export {CrearCitaFormulario}