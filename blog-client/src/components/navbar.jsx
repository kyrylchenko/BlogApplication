import { render } from "@testing-library/react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return (<>
<nav className="navbar bg-dark-color navigation-logo navigation opacity-100 nav-top d-flex flex-column justify-content-center">
      <div className="d-flex flex-column justify-content-center">
        <div className="navbar-collapse d-flex flex-row justify-content-around" id="navbarSupportedContent">
        <Link className="nav-link text-large color-light" aria-current="page" to="/">Explore</Link>
        <Link className="nav-link bg-torqoise-primary text-large color-light me-3" to="/check">Check</Link>
          <Link className="nav-link bg-torqoise-primary text-large color-light" to="/create">Create</Link>
        </div>
        <div className="line"></div>
        <img className="nav-img align-self-center" src="drawable/logowithTextlight.png"></img>
      </div>
</nav>


    <nav className="navbar bg-dark-colo navigation opacity-100 position-fixed start-0 top-0 w-100 nav-top-second">
        <div className="navbar-collapse d-flex flex-row justify-content-center gap-5" id="navbarSupportedContent">
          <Link className="nav-link text-large color-light" aria-current="page" to="/">Explore</Link>
          <Link className="nav-link bg-torqoise-primary text-large color-light" to="/check">Check</Link>
          <Link className="nav-link bg-torqoise-primary text-large color-light" to="/create">Create</Link>
        </div>    
    </nav>
</>

    );
}

export default Navbar