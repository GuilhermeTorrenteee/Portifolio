import { Link } from 'react-router-dom';
import { Share2, ExternalLink, ArrowRight } from 'lucide-react';
import { ProfileCard } from '../components/ProfileCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { projects } from '../data/projects';
import './Home.css';

export const Home = () => {
  return (
    <div className="home">
      <ProfileCard />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Olá, eu sou <span>Guilherme Torrente</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Developer | C# | React | Java</p>

          <p className="hero-description">
            Desenvolvedor com experiência em múltiplas tecnologias, criando soluções inovadoras e escaláveis.
            Apaixonado por código limpo, arquitetura de software e aprendizado contínuo.
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
          <p>GhostTech e Sushi do Cabeça são exemplos de projetos em produção e funcionando</p>
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

      <section className="case-studies-section">
        <div className="case-studies-header">
          <h2>Cases Reais</h2>
          <p>Projetos que estão em produção e recebem acessos diários</p>
        </div>
        <div className="case-studies-container">
          {projects
            .filter((p) => p.featured)
            .map((project) => {
              const theme = project.id === 1 ? 'ghosttech' : 'sushi';
              return <CaseStudyCard key={project.id} project={project} theme={theme} />;
            })}
        </div>
      </section>
    </div>
  );
};
