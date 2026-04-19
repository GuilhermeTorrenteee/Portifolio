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
          Aqui você encontra todos os projetos que desenvolvi, desde aplicações em produção até projetos educacionais.
          Clique nos ícones para acessar o GitHub ou a versão online.
        </p>
      </section>

      <section className="projects-stats">
        <div className="stat-card">
          <div className="stat-value">10+</div>
          <div className="stat-label">Tecnologias Dominadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">36+</div>
          <div className="stat-label">Repositórios no GitHub</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Projetos em Produção</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3+</div>
          <div className="stat-label">Anos de Experiência</div>
        </div>
      </section>

      {selectedCategory === 'Todos' && featuredProjects.length > 0 && (
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
      )}

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

      <section className="projects-note">
        <p>
          Todos os projetos estão disponíveis em meu <a href="https://github.com/GuilhermeTorrenteee">GitHub</a>.
          Sinta-se livre para explorar, estudar o código e fazer contribuições!
        </p>
      </section>
    </div>
  );
};
