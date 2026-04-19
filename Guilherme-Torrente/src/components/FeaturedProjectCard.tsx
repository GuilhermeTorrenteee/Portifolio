import { Share2, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import './FeaturedProjectCard.css';

interface FeaturedProjectCardProps {
  project: Project;
}

export const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <div className="featured-project-card">
      <div className="featured-badge">🚀 EM PRODUÇÃO</div>
      
      <div className="featured-content">
        <div className="featured-header">
          <h2>{project.name}</h2>
          <div className="featured-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-link-btn external"
                title="Ver ao vivo"
              >
                <ExternalLink size={24} />
                <span>Visitar</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-link-btn github"
                title="Ver no GitHub"
              >
                <Share2 size={24} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        <p className="featured-description">{project.description}</p>

        <div className="featured-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="featured-tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured-category">
          <span className="category-label">{project.category}</span>
        </div>
      </div>
    </div>
  );
};
