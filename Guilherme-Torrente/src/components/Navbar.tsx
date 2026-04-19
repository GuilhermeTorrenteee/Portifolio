import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GT
          <span>.</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tecnologias" className="nav-link" onClick={() => setIsOpen(false)}>
              Tecnologias
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projetos" className="nav-link" onClick={() => setIsOpen(false)}>
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
