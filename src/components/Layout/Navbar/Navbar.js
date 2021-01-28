import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
         <div className="container">
            <Link to="/" className="navbar-brand">
                <img alt="Menüzz" title="Menüzz" src={process.env.PUBLIC_URL + '/logo.png'} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link to="/about" className="nav-link"><i className="fas fa-home"></i> Kezdőlap</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
    )
}


export default Navbar;