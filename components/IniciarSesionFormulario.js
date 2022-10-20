const IniciarSesionFormulario= ()=>
`
<form >
    <div class="mb-3" mb-lg-3>
        <label for="usuario" class="form-label">usuario</label>
        <input type="text" class="form-control" id="usuario" >
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary mt-3">Iniciar Sesión</button>
</form>
`
export {IniciarSesionFormulario}