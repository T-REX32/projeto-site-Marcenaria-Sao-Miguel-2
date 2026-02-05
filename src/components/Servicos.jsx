import React from 'react'; 
import './Servicos.css';

export default function Servicos() {
    const servicos = [
        { id: 1, nome: 'Portas', emoji: '🚪' },
        { id: 2, nome: 'Mesas', emoji: '🪑' },
        { id: 3, nome: 'Armários', emoji: '🗄️' },
        { id: 4, nome: 'Prateleiras', emoji: '📚' },
        { id: 5, nome: 'Móveis Personalizados', emoji: '✨' },
        { id: 6, nome: 'Restauração', emoji: '🔧' },
    ];

    const handlePedido = (nomeServico) => {
        const mensagem = `Olá! Tenho interesse em: ${nomeServico}`;
        const numero = '5511999999999'; // Alterar com número real
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="servicos-container" id="services">
            <div className="servicos-header">
                <h2>Nossos Serviços</h2>
                <p>Confira os trabalhos e serviços que realizamos</p>
            </div>
            <div className="servicos-grid">
                {servicos.map((servico) => (
                    <div key={servico.id} className="servicos-card">
                        <div className="servicos-imageBox">
                            <span className="servicos-emoji">{servico.emoji}</span>
                        </div>
                        <h3>{servico.nome}</h3>
                        <button 
                            className="servicos-button"
                            onClick={() => handlePedido(servico.nome)}
                        >
                            Solicitar Orçamento
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}