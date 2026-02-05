import React from 'react';
import './Hero.css';

export default function Hero() {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Marcenaria São Miguel</h1>
                    <p className="hero-subtitle">Móveis sob medida com qualidade e precisão</p>
                    <p className="hero-description">
                        Transformamos sua visão em realidade com peças de madeira exclusivas e duráveis.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            className="hero-btn hero-btn-primary"
                            onClick={() => handleScrollTo('services')}
                        >
                            Ver Serviços
                        </button>
                        <button 
                            className="hero-btn hero-btn-secondary"
                            onClick={() => handleScrollTo('about')}
                        >
                            Conhecer Mais
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-placeholder">
                        🪵
                    </div>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <h3>+100</h3>
                    <p>Projetos Realizados</p>
                </div>
                <div className="stat">
                    <h3>10+</h3>
                    <p>Anos de Experiência</p>
                </div>
                <div className="stat">
                    <h3>100%</h3>
                    <p>Satisfação Garantida</p>
                </div>
            </div>
        </section>
    );
}
