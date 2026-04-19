import { Share2, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{project.name}</h3>
        <div className="card-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-btn external"
              title="Ver ao vivo"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link-btn github"
              title="Ver no GitHub"
            >
              <Share2 size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="card-description">{project.description}</p>

      <div className="card-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="card-category">
        <span className={`category-tag ${project.category.toLowerCase().replace(/\s+/g, '-')}`}>
          {project.category}
        </span>
      </div>
    </div>
  );
};
