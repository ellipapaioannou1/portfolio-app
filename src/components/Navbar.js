import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {setExpandNavbar(false);},[location] );

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
          <button onClick={() => {setExpandNavbar((prev) => !prev);}}><FontAwesomeIcon icon={faBars} style={{color: "#b3b3b3",}} /></button>
        </div>
        <div className='links'>
          <Link to='/'> Home </Link>
          <Link to='/projects'> Projects </Link>
          <Link to='/experience'> Experience </Link>

        </div>
       
    </div>
  );
}


export default Navbar;