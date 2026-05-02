import { useEffect } from 'react';
import { getCategorizedTechnologies } from '../data/technologies';
import { TechBadge } from '../components/TechBadge';
import './Technologies.css';

export const Technologies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categorizedTechs = getCategorizedTechnologies();

  const categoryLabels: Record<string, string> = {
    Frontend: '🎨 Frontend',
    Backend: '⚙️ Backend',
    Database: '🗄️ Banco de Dados',
    Patterns: '🏛️ Padrões & Arquitetura',
    Cloud: '☁️ Cloud & DevOps',
  };

  return (
    <div className="technologies-page">
      <section className="tech-header">
        <h1>Tecnologias & Habilidades</h1>
        <p>
          Conheça as tecnologias que estudo, domino e utilizo em meus projetos. Aqui você encontra um resumo
          completo do meu stack técnico e nível de proficiência.
        </p>
      </section>

      <section className="tech-stats">
        <div className="stat-card">
          <div className="stat-number">10+</div>
          <p>Tecnologias Dominadas</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">38+</div>
          <p>Repositórios no GitHub</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">4</div>
          <p>Projetos em Produção</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <p>Anos de Experiência</p>
        </div>
      </section>

      <section className="tech-content">
        {Object.entries(categorizedTechs).map(([category, techs]) => (
          <div key={category} className="tech-category">
            <h2 className="category-title">{categoryLabels[category] || category}</h2>
            <div className="tech-grid">
              {techs.map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
