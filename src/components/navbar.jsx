
import appLogo from "../pages/icon.png";
import Button from '@mui/material/Button';
function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm bg-white">
      <div className="container justify-content-center">
          <img src={appLogo} width="50px" height="50px" alt="logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse justify-content-center  navbar-brand" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#DEE1E3', border: 'none', borderRadius: 0+'px' }}>
                <li><a className="dropdown-item" href="#">Security Verification</a></li>
                <li><a className="dropdown-item" href="#">Federal Solution</a></li>
                <li><a className="dropdown-item" href="#" style={{backgroundColor: '#0086D3', color: '#ffffff'}}>
                    <i class="fa-solid fa-clock"></i>  Limited Time Offer <i style={{color: '#ffffff'}} class="fa-solid fa-arrow-right"></i>    
                </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#DEE1E3', border: 'none', borderRadius: 0+'px' }}>
                <li><a className="dropdown-item" href="#">UseCases</a></li>
                <li><a className="dropdown-item" href="#">White Paper</a></li>
                <li><a className="dropdown-item" href="#">Videos</a></li>
                <li><a className="dropdown-item" href="#" style={{backgroundColor: '#0086D3', color: '#ffffff'}}>
                <i class="fa-solid fa-hand-holding-dollar"></i>  Limited Time Offer <i style={{color: '#ffffff'}} class="fa-solid fa-arrow-right"></i>    
                </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#DEE1E3', border: 'none', borderRadius: 0+'px' }}>
                <li><a className="dropdown-item" href="#">About Us</a></li>
                <li><a className="dropdown-item" href="#">Leadersip</a></li>
                <li><a className="dropdown-item" href="#">Careers</a></li>
                <li><a className="dropdown-item" href="#" style={{backgroundColor: '#0086D3', color: '#ffffff'}}>
                <i class="fa-solid fa-user-nurse"></i>  Customer Reviews <i style={{color: '#ffffff'}} class="fa-solid fa-arrow-right"></i>    
                </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#DEE1E3', border: 'none', borderRadius: 0+'px' }}>
                <li><a className="dropdown-item" href="#">Security Verification</a></li>
                <li><a className="dropdown-item" href="#">Federal Solution</a></li>
                <li><a className="dropdown-item" href="#" style={{backgroundColor: '#0086D3', color: '#ffffff'}}>
                    <i class="fa-solid fa-podcast"></i>  Limited Time Offer <i style={{color: '#ffffff'}} class="fa-solid fa-arrow-right"></i>    
                </a></li>
              </ul>
            </li>
            <li className="nav-item mx-md-3">
            <Button variant="contained" color="primary">
                See Demo
            </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     );
}

export default Navbar;

