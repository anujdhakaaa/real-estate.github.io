import React from 'react'

export default function Navbar() {
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"href="/"> Real-estate</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"href="/">Register Here</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CITY
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">JAIPUR</a></li>
            <li><a className="dropdown-item" href="#">DELHI</a></li>
            <li><a className="dropdown-item" href="#">MUMBAI</a></li>
            <li><a className="dropdown-item" href="#">PUNE</a></li>
            <li><a className="dropdown-item" href="#">GURUGRAM</a></li>

            <li><a className="dropdown-item" href="#">BANGLORE</a></li>
            <li><a className="dropdown-item" href="#">HAYDRABAD</a></li>
            <li><a className="dropdown-item" href="#">NOIDA</a></li>
            
          </ul>
        </li>
        
          
      </ul>
      
    </div>
  </div>
</nav>




        </>
    )
}
