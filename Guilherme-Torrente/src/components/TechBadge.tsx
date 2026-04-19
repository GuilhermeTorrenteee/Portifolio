import type { Technology } from '../data/technologies';
import './TechBadge.css';

interface TechBadgeProps {
  tech: Technology;
  size?: 'small' | 'medium' | 'large';
}

export const TechBadge = ({ tech, size = 'medium' }: TechBadgeProps) => {
  return (
    <div className={`tech-badge-container ${size}`}>
      <div className="tech-icon">
        <img src={tech.icon} alt={tech.name} />
      </div>
      <div className="tech-info">
        <h4>{tech.name}</h4>
        {tech.proficiency && <span className="proficiency">{tech.proficiency}</span>}
      </div>
    </div>
  );
};
