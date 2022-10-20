
const RegistrarseFormulario= ()=>
`
<form >
    <div class="form-group row ">
    <div class="mb-3 mb-lg-3 ">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" >
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" >
    </div>
    <div class="mb-3">
        <label for="usuario" class="form-label">usuario</label>
        <input type="text" class="form-control" id="usuario" >
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary mt-3">Registrar</button>
</div>
</form>
`
export {RegistrarseFormulario}
