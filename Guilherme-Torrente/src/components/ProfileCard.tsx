import './ProfileCard.css';

export const ProfileCard = () => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img
            src="/foto_perfil.jpg"
            alt="Guilherme Torrente"
            className="profile-image"
          />
          <div className="profile-badge">
            <span className="badge-text">Full-Stack Developer</span>
          </div>
        </div>

        <div className="profile-info">
          <h2>Guilherme Torrente</h2>
          <p className="job-title">Full-Stack Developer</p>
          <p className="location">📍 Bauru, São Paulo - Brasil</p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">36+</span>
              <span className="stat-label">Repositórios</span>
            </div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Tecnologias</span>
            </div>
            <div className="stat">
              <span className="stat-value">3</span>
              <span className="stat-label">Em Produção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
