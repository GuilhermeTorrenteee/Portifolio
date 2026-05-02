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
        </div>

        <div className="profile-info">
          <h2>Guilherme Torrente</h2>
          <p className="job-title">Desenvolvedor Full Stack</p>
          <p className="location">📍 Bauru, São Paulo - Brasil</p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">38+</span>
              <span className="stat-label">Repositórios</span>
            </div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Tecnologias</span>
            </div>
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">Em Produção</span>
            </div>
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
