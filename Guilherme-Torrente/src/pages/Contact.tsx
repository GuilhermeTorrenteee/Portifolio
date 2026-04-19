import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Entre em Contato</h1>
        <p>Vamos conversar! Estou sempre aberto para novas oportunidades e parcerias.</p>
      </section>

      <section className="contact-methods">
        <div className="contact-card">
          <div className="contact-icon">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
          </div>
          <h3>LinkedIn</h3>
          <p>Conecte comigo no LinkedIn para ver meu perfil profissional e experiências.</p>
          <a
            href="https://www.linkedin.com/in/guilherme-torrente-093406173/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Visitar LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" />
          </div>
          <h3>GitHub</h3>
          <p>Explore meus repositórios e veja o código de todos os meus projetos.</p>
          <a href="https://github.com/GuilhermeTorrenteee" target="_blank" rel="noopener noreferrer" className="contact-link">
            Visitar GitHub
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" alt="Email" />
          </div>
          <h3>Email</h3>
          <p>Envie-me um email para discussões mais detalhadas sobre projetos e oportunidades.</p>
          <a href="mailto:guilhermetorrente@outlook.com" className="contact-link">
            Enviar Email
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="#25D366"/>
              <path d="M50 15c-19.33 0-35 15.67-35 35 0 6.16 1.62 12.15 4.69 17.32L15 87l21.65-6.9c5.05 2.77 10.78 4.23 16.65 4.23 19.33 0 35-15.67 35-35S69.33 15 50 15zm0 64c-5.6 0-11.06-1.41-15.9-4.09L35 75.5l-7.55 2.42 2.35-7.65c-2.95-5.04-4.65-10.81-4.65-16.92 0-16.57 13.43-30 30-30s30 13.43 30 30-13.43 30-30 30z" fill="white"/>
              <path d="M69.82 57.35c-0.91-0.45-5.37-2.65-6.2-2.96-0.82-0.3-1.42-0.45-2.02 0.45-0.6 0.9-2.32 2.92-2.84 3.52-0.52 0.6-1.04 0.68-1.95 0.23-0.91-0.45-3.82-1.4-7.28-4.48-2.69-2.4-4.51-5.36-5.03-6.26-0.52-0.9-0.06-1.39 0.39-1.84 0.41-0.41 0.91-1.05 1.36-1.57 0.45-0.52 0.6-0.9 0.9-1.5 0.3-0.6 0.15-1.13-0.08-1.58-0.22-0.45-2.03-4.89-2.78-6.7-0.73-1.75-1.48-1.51-2.03-1.54-0.52-0.03-1.13-0.03-1.73-0.03-0.6 0-1.58 0.23-2.4 1.13-0.82 0.9-3.15 3.08-3.15 7.52 0 4.44 3.23 8.73 3.68 9.33 0.45 0.6 6.37 9.73 15.4 13.6 2.15 0.93 3.82 1.48 5.14 1.9 2.15 0.69 4.12 0.59 5.67 0.36 1.73-0.26 5.33-2.18 6.08-4.3 0.75-2.12 0.75-3.94 0.52-4.3-0.22-0.38-0.82-0.6-1.73-1.05z" fill="white"/>
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <p>Pode me chamar no WhatsApp para conversas mais rápidas e informais.</p>
          <a href="https://api.whatsapp.com/send/?phone=5514997203912&text" target="_blank" rel="noopener noreferrer" className="contact-link">
            Abrir WhatsApp
          </a>
        </div>
      </section>

      <section className="contact-info">
        <div className="info-box">
          <h3>Informações Adicionais</h3>
          <ul>
            <li>
              <strong>Localização:</strong> Bauru, São Paulo - Brasil
            </li>
            <li>
              <strong>Disponibilidade:</strong> Aberto para projetos e oportunidades
            </li>
            <li>
              <strong>Resposta:</strong> Geralmente respondo em até 24 horas
            </li>
            <li>
              <strong>Interesse:</strong> Full-Stack, APIs REST, Cloud, Padrões de Design
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
