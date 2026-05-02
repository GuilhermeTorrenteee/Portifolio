import { useState, useEffect } from 'react';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import './Projects.css';

type CategoryFilter = 'Todos' | Project['category'];

const CATEGORIES: CategoryFilter[] = ['Todos', 'Full-Stack', 'Backend', 'Frontend', 'HTML/CSS', 'Estudos C#', 'Estudos Java'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    selectedCategory === 'Todos' ? projects : projects.filter((p) => p.category === selectedCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  const categoryCount = (category: CategoryFilter) => {
    if (category === 'Todos') return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  return (
    <div className="projects-page">
      <section className="projects-header">
        <h1>Meus Projetos</h1>
        <p>
          Projetos em produção com clientes reais, além de estudos e projetos educacionais que demonstram minha capacidade de aprendizado contínuo.
        </p>
      </section>

      <section className="projects-stats">
        <div className="stat-card">
          <div className="stat-value">10+</div>
          <div className="stat-label">Tecnologias Dominadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">38+</div>
          <div className="stat-label">Repositórios no GitHub</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4</div>
          <div className="stat-label">Projetos em Produção</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3+</div>
          <div className="stat-label">Anos de Experiência</div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="case-studies-section">
          <div className="case-studies-header">
            <h2>🚀 Projetos em Produção</h2>
            <p>Aplicações reais que estão rodando e gerando valor para clientes/usuários</p>
          </div>
          <div className="case-studies-container">
            {projects
              .filter((p) => p.featured)
              .map((project) => {
                let theme: 'ghosttech' | 'sushi' | 'portfolio' | 'rh' = 'sushi';
                if (project.id === 1) theme = 'ghosttech';
                else if (project.id === 2) theme = 'sushi';
                else if (project.id === 3) theme = 'rh';
                else if (project.id === 32) theme = 'portfolio';
                return <CaseStudyCard key={project.id} project={project} theme={theme} />;
              })}
          </div>
        </section>
      )}

      <section className="projects-section">
        <div className="projects-section-header">
          <h2>📚 Projetos de Estudo & Aprendizado</h2>
          <p>Projetos desenvolvidos para aprender e dominar diferentes tecnologias e padrões de arquitetura</p>
        </div>

        <section className="projects-filter">
          <div className="filter-buttons">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
                <span className="count">{categoryCount(category)}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <div className="no-projects">
              <p>Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </section>
      </section>

      <section className="projects-note">
        <p>
          Todos os projetos estão disponíveis em meu <a href="https://github.com/GuilhermeTorrenteee">GitHub</a>.
          Sinta-se livre para explorar, estudar o código e fazer contribuições!
        </p>
      </section>
    </div>
  );
};
