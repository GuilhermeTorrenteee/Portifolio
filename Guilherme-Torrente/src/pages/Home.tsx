import { Link } from 'react-router-dom';
import { Share2, ExternalLink, ArrowRight } from 'lucide-react';
import { ProfileCard } from '../components/ProfileCard';
import './Home.css';

export const Home = () => {
  return (
    <div className="home">
      <ProfileCard />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Guilherme Torrente
          </h1>
          <p className="hero-subtitle">Desenvolvedor Full Stack</p>

          <p className="hero-description">
            Desenvolvedor Full Stack dedicado à criação de interfaces modernas, que geram impacto
             e sistemas escaláveis. Especialista em React, C# e Firebase, atuo desde a concepção
              visual até a implementação de regras de negócio e banco de dados para soluções reais.
          </p>

          <div className="hero-cta">
            <Link to="/projetos" className="cta-button primary">
              Ver meus projetos
              <ArrowRight size={20} />
            </Link>
            <Link to="/tecnologias" className="cta-button secondary">
              Explorar tecnologias
            </Link>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/GuilhermeTorrenteee"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <Share2 size={24} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-torrente-093406173/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <ExternalLink size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <div className="highlight-icon">📚</div>
          <h3>Aprendizado Contínuo</h3>
          <p>Sempre buscando aprender novas tecnologias e melhorar minhas habilidades</p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h3>Projetos em Produção</h3>
          <p>GhostTech, Sushi do Cabeça e RH-Modelo são exemplos de projetos em produção e funcionando</p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">💼</div>
          <h3>Full-Stack</h3>
          <p>Experiência completa: Frontend, Backend, Banco de Dados e DevOps</p>
        </div>

        <div className="highlight-card">
          <div className="highlight-icon">🎯</div>
          <h3>Soluções Customizadas</h3>
          <p>Desenvolvendo soluções personalizadas que atendem às necessidades reais</p>
        </div>
      </section>
    </div>
  );
};
