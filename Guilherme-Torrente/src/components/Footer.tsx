import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Guilherme Torrente</h3>
          <p>Full-Stack Developer | C# | React | Java</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/tecnologias">Tecnologias</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://github.com/GuilhermeTorrenteee" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-torrente-093406173/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:guilhermetorrente@outlook.com" title="Email">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" alt="Email" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5514997203912&text" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#25D366"/>
                <path d="M50 15c-19.33 0-35 15.67-35 35 0 6.16 1.62 12.15 4.69 17.32L15 87l21.65-6.9c5.05 2.77 10.78 4.23 16.65 4.23 19.33 0 35-15.67 35-35S69.33 15 50 15zm0 64c-5.6 0-11.06-1.41-15.9-4.09L35 75.5l-7.55 2.42 2.35-7.65c-2.95-5.04-4.65-10.81-4.65-16.92 0-16.57 13.43-30 30-30s30 13.43 30 30-13.43 30-30 30z" fill="white"/>
                <path d="M69.82 57.35c-0.91-0.45-5.37-2.65-6.2-2.96-0.82-0.3-1.42-0.45-2.02 0.45-0.6 0.9-2.32 2.92-2.84 3.52-0.52 0.6-1.04 0.68-1.95 0.23-0.91-0.45-3.82-1.4-7.28-4.48-2.69-2.4-4.51-5.36-5.03-6.26-0.52-0.9-0.06-1.39 0.39-1.84 0.41-0.41 0.91-1.05 1.36-1.57 0.45-0.52 0.6-0.9 0.9-1.5 0.3-0.6 0.15-1.13-0.08-1.58-0.22-0.45-2.03-4.89-2.78-6.7-0.73-1.75-1.48-1.51-2.03-1.54-0.52-0.03-1.13-0.03-1.73-0.03-0.6 0-1.58 0.23-2.4 1.13-0.82 0.9-3.15 3.08-3.15 7.52 0 4.44 3.23 8.73 3.68 9.33 0.45 0.6 6.37 9.73 15.4 13.6 2.15 0.93 3.82 1.48 5.14 1.9 2.15 0.69 4.12 0.59 5.67 0.36 1.73-0.26 5.33-2.18 6.08-4.3 0.75-2.12 0.75-3.94 0.52-4.3-0.22-0.38-0.82-0.6-1.73-1.05z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Guilherme Torrente. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
