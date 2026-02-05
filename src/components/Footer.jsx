export default function Footer() {
    const handleWhatsApp = () => {
        window.open('https://wa.me/5511999999999', '_blank');
    };

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-section-content">
                    <h3>Marcenaria São Miguel</h3>
                    <p>Móveis sob medida com qualidade e precisão</p>
                    <div className="social-links">
                        <a href="#" title="Facebook" className="social-icon">f</a>
                        <a href="#" title="Instagram" className="social-icon">📷</a>
                        <a href="https://wa.me/5511999999999" title="WhatsApp" className="social-icon">💬</a>
                    </div>
                </div>

                <div className="footer-section-content">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-section-content">
                    <h4>Contato</h4>
                    <p>📍 São Miguel Paulista, SP</p>
                    <p>📞 (11) 9999-9999</p>
                    <p>✉️ contato@marcenariasaomiguel.com</p>
                </div>

                <div className="footer-section-content">
                    <h4>Horário</h4>
                    <p>Seg-Sex: 8h - 18h</p>
                    <p>Sábado: 8h - 14h</p>
                    <p>Domingo: Fechado</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Marcenaria São Miguel. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️ para você</p>
            </div>

            {/* Botão WhatsApp flutuante */}
            <button className="whatsapp-float" onClick={handleWhatsApp} title="Fale conosco via WhatsApp">
                💬
            </button>
        </footer>
    );
}