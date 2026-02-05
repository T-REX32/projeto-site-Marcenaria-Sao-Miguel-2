import React, { useState } from 'react';
import './Contato.css';

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construir mensagem para WhatsApp
        const mensagem = `Olá! Meu nome é ${formData.nome}\n\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem:\n${formData.mensagem}`;
        const numero = '5511999999999'; // Alterar com número real
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        
        window.open(url, '_blank');
        
        // Limpar formulário
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
        setSubmitted(true);
        
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="contato-container" id="contact">
            <div className="contato-content">
                <div className="contato-header">
                    <h2>Entre em Contato</h2>
                    <p>Teremos prazer em atender você!</p>
                </div>

                <div className="contato-grid">
                    <div className="contato-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Localização</h3>
                            <p>São Miguel Paulista, São Paulo - SP</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Telefone</h3>
                            <p>(11) 9999-9999</p>
                            <p className="small">Também nos consulte por WhatsApp</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h3>Email</h3>
                            <p>contato@marcenariasaomiguel.com</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🕐</div>
                            <h3>Horário de Funcionamento</h3>
                            <p>Segunda a Sexta: 8h - 18h</p>
                            <p>Sábado: 8h - 14h</p>
                        </div>
                    </div>

                    <form className="contato-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome *</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefone">Telefone *</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                                placeholder="(11) 9999-9999"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem *</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                                placeholder="Descreva seu pedido ou dúvida..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Enviar via WhatsApp
                        </button>

                        {submitted && (
                            <div className="success-message">
                                ✓ Seu contato foi enviado com sucesso!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
