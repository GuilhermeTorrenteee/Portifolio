import { ExternalLink, Share2 } from 'lucide-react';
import type { Project } from '../data/projects';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  project: Project;
  theme?: 'sushi' | 'ghosttech';
}

export const CaseStudyCard = ({ project, theme = 'sushi' }: CaseStudyCardProps) => {
  return (
    <div className={`case-study-card case-study-${theme}`}>
      <div className="case-study-backdrop"></div>
      
      <div className="case-study-content">
        <div className="case-study-badge">📌 CASE REAL</div>
        
        <div className="case-study-main">
          <div className="case-study-text">
            <h2>{project.name}</h2>
            <p className="case-description">{project.description}</p>
            
            <div className="case-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="case-tech-badge">{tech}</span>
              ))}
            </div>

            <div className="case-study-buttons">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-btn visit"
                >
                  <ExternalLink size={20} />
                  Visitar Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-btn github"
                >
                  <Share2 size={20} />
                  Ver Código
                </a>
              )}
            </div>
          </div>

          <div className="case-study-preview">
            <div className="preview-placeholder">
              {project.screenshot ? (
                <img 
                  src={project.screenshot} 
                  alt={`${project.name} screenshot`}
                  className="preview-image"
                />
              ) : (
                <span className="preview-emoji">
                  {theme === 'sushi' && '🍣'}
                  {theme === 'ghosttech' && '👻'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
