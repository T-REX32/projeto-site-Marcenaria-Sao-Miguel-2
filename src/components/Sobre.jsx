import React from 'react';
import './Sobre.css';

export default function Sobre() {
    const diferenciais = [
        { icon: '🎯', titulo: 'Qualidade', descricao: 'Produtos de alta qualidade com acabamento perfeito' },
        { icon: '⚡', titulo: 'Rapidez', descricao: 'Cumprimento de prazos com precisão' },
        { icon: '💰', titulo: 'Preço Justo', descricao: 'Melhor custo-benefício do mercado' },
        { icon: '🛠️', titulo: 'Expertise', descricao: 'Mais de 10 anos de experiência' },
    ];

    return (
        <section className="sobre" id="about">
            <div className="container">
                <div className="sobre-header">
                    <h2>Sobre a Marcenaria São Miguel</h2>
                    <p>Conheça a nossa história e valores</p>
                </div>
                
                <div className="conteudo-sobre">
                    <div className="sobre-texto">
                        <div className="sobre-bloco">
                            <h3>Quem Somos</h3>
                            <p>
                                Somos uma empresa familiar dedicada à produção de móveis e peças em madeira 
                                com qualidade e precisão. Com mais de 10 anos no mercado, construímos uma reputação 
                                sólida através de trabalho honesto e compromisso com a satisfação de nossos clientes.
                            </p>
                        </div>

                        <div className="sobre-bloco">
                            <h3>Nossa Missão</h3>
                            <p>
                                Transformar a visão de nossos clientes em realidade, criando móveis personalizados 
                                que combinam beleza, funcionalidade e durabilidade. Buscamos sempre a excelência 
                                em cada detalhe.
                            </p>
                        </div>

                        <div className="sobre-bloco">
                            <h3>Por Que Este Site Foi Criado</h3>
                            <p>
                                Este site foi desenvolvido para:
                            </p>
                            <ul>
                                <li>Apresentar nossos serviços e portfólio ao mercado</li>
                                <li>Facilitar o contato entre clientes e nossa equipe</li>
                                <li>Mostrar a qualidade dos trabalhos realizados</li>
                                <li>Proporcionar uma experiência digital moderna e acessível</li>
                                <li>Aumentar a visibilidade da marcenaria no mercado local e digital</li>
                            </ul>
                        </div>
                    </div>

                    <div className="diferenciais">
                        <h3>Nossos Diferenciais</h3>
                        <div className="diferenciais-grid">
                            {diferenciais.map((item, index) => (
                                <div key={index} className="diferencial-card">
                                    <div className="diferencial-icon">{item.icon}</div>
                                    <h4>{item.titulo}</h4>
                                    <p>{item.descricao}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}