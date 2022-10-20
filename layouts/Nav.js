const Nav = ()=> 

    `

    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">CONSULWEB<img src="./assets/img/logocw.png" alt="" width="40px" align="right"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-home"></i>
                Inicio
                <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/registrarse/">
                <i class="fa fa-pencil-square-o" style="color: Dodgerblue">
                  <span class="badge badge-danger"></span>
                </i>
                Registrarse
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#/iniciarsesion/">
                <!-- <a class="nav-link disabled" href="#"> -->
                <i class="fa fa-sign-in" style="color: Dodgerblue">
                  <span class="badge badge-warning"></span>
                </i>
                Iniciar Sesión
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user-circle" style="color: Dodgerblue">
                  <span class="badge badge-primary"></span>
                </i>
                Usuario
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#/citasusuario/">Mis Citas</a>
                <!-- <a class="dropdown-item" href="#">Another action</a> -->
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Cerrar Sesión</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link" href="#/crearcita/">
                <i class="fa fa-calendar-o" style="color: rgb(167, 50, 29)">
                  <span class="badge badge-info"></span>
                </i>
                Crear Cita
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="">
                    <!-- <i class="fa fa-globe"> -->
                  <span class="badge badge-success"></span>
                </i>
                
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="buscar">
            <button class=" btn btn-primary" type="submit">Buscar</button>
            <!-- <button class=" btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> -->
          </form>

          <!-- <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Buscar por..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
            </div>
        </form> -->

        </div>
      </nav>


    `

export {Nav} 