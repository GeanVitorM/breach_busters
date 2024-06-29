import React, { useState, useEffect } from 'react';
import errorImg from '../../Images/erro.png';
import successImg from '../../Images/aceitaram.png';
import startImg from '../../Images/person.png'; // Adicione a imagem do início
import endImg from '../../Images/security (1).webp'; // Adicione a imagem do final
import './contact.css';

const ContactMobile = ({ handleSubmit, handleChange, formData, status, progress }) => (
  <div id="contact" className="flex justify-center items-center py-8 bg-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
    <div className="text-white max-w-md w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entre em contato com nossos especialistas!</h1>
      <div className="flex justify-center items-center mb-6">
        <img src={startImg} alt="Início" className="w-6 h-6 mr-2" />
        <div className="w-3/4 h-6 bg-gray-700 rounded-full overflow-hidden relative progressbar-container">
          <div
            className="progressbar-complete"
            style={{ width: `${progress}%` }}
          >
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress text-white text-xs md:text-sm">{progress}%</span>
        </div>
        <img src={endImg} alt="Fim" className="w-6 h-6 ml-2" />
      </div>
      <div className="bg-black p-4 rounded-lg shadow-lg" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
        <div className="text-left mb-4">
          <p className="text-base md:text-lg font-medium">
            Não precisamos convencer voce e seu time que a segurança é primordial,
            mas precisamos que voce escolha o time certo para o trabalho, insira seu
            e-mail para conversarmos sobre o escopo do nosso novo desafio!
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <label className="block text-lg font-medium mb-2 mt-2 md:mt-4" htmlFor="email">
              Qual é o seu e-mail empresarial?
            </label>
            <input
              className="w-full p-3 rounded-lg text-black bg-white border border-black placeholder-transparent focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="text-sm text-white mt-2">
              Seu e-mail seguirá os detalhes das nossas políticas de privacidade.
            </p>
            <div className="text-center text-red-500 mt-2">
              {status === 'error' && (
                <p>
                  Erro ao enviar o email. Tente novamente.
                  <img src={errorImg} alt="Erro" className="inline-block ml-1 w-4 h-4" />
                </p>
              )}
            </div>
            {status === 'sending' && (
              <p className="text-yellow-500 mt-2">
                Enviando...
              </p>
            )}
            {status === 'success' && (
              <p className="text-green-500 mt-2">
                Email enviado com sucesso!
                <img src={successImg} alt="Sucesso" className="inline-block ml-1 w-4 h-4" />
              </p>
            )}
            <button
              type="submit"
              className="glow-on-hover w-full bg-gradient-to-r from-purple-400 to-blue-400  text-white font-bold py-2 px-4 mt-3 rounded-full focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ContactDesktop = ({ handleSubmit, handleChange, formData, status, progress }) => (
  <div id="contact" className="flex justify-center items-center py-20 bg-black w-full">
    <div className="text-white max-w-5xl w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Popins , sans-serif' }}>Entre em contato com nossos especialistas!</h1>
      <div className="flex justify-between items-start mb-8">
        <div className="w-1/2 pr-8">
          <p className="text-2xl font-medium" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
            Não precisamos convencer você e
            seu time que a segurança é
            primordial, mas precisamos que
            você escolha o time certo para o
            trabalho, insira seu e-mail para
            conversarmos sobre o escopo do
            nosso novo desafio!
          </p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center mb-6">
            <img src={startImg} alt="Início" className="w-6 h-6 mr-2" />
            <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden relative progressbar-container">
              <div
                className="progressbar-complete"
                style={{ width: `${progress}%` }}
              >
                <div className="progressbar-liquid"></div>
              </div>
              <span className="progress text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Quase lá!</span>
            </div>
            <img src={endImg} alt="Fim" className="w-6 h-6 ml-2" />
          </div>
          <div className="bg-black p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <label className="block text-lg font-medium mb-2" htmlFor="email" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                Qual é o seu e-mail empresarial?
              </label>
              <input
                className="w-full p-3 rounded-lg text-black bg-white border border-black placeholder-transparent focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <a href='/Policy'>
                <p className="text-xs text-white mt-2" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                  Seu e-mail seguirá os detalhes das nossas políticas de privacidade.
                </p>
              </a>
              <div className="text-center text-red-500 mt-2">
                {status === 'error' && (
                  <p>
                    Erro ao enviar o email. Tente novamente.
                    <img src={errorImg} alt="Erro" className="inline-block ml-1 w-4 h-4" />
                  </p>
                )}
              </div>
              {status === 'sending' && (
                <p className="text-yellow-500 mt-2">
                  Enviando...
                </p>
              )}
              {status === 'success' && (
                <p className="text-green-500 mt-2">
                  Email enviado com sucesso!
                  <img src={successImg} alt="Sucesso" className="inline-block ml-1 w-4 h-4" />
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState(null);
  const [progress, setProgress] = useState(50);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://breachbusters.com.br/mail-send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '' });
        setProgress(100);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <ContactMobile
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      status={status}
      progress={progress}
    />
  ) : (
    <ContactDesktop
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      status={status}
      progress={progress}
    />
  );
};

export default Contact;
