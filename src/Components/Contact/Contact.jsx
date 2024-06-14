import React, { useState } from 'react';
import errorImg from '../../Images/erro.png';
import successImg from '../../Images/aceitaram.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [status, setStatus] = useState(null);
  const [progress, setProgress] = useState(50);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:8000/Server/mail-send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
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

  return (
    <div id="contact" className="flex justify-center items-center py-20 bg-black w-full">
      <div className="text-white max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Vamos realizar um pentesting.</h1>
        <div className="flex justify-center items-center mb-8">
          <div className="w-3/4 h-6 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-pink-500 flex items-center justify-end pr-2 transition-width duration-300"
              style={{ width: `${progress}%` }}
            >
              <span className="text-white text-sm">Quase lá!</span>
            </div>
          </div>
          <span className="ml-2 text-white">🔒</span>
        </div>
        <div className="bg-black p-8 rounded-lg shadow-lg flex justify-between items-center">
          <div className="text-left">
            <p className="text-lg font-medium mb-4">
              Agora que você viu a importância do pentesting para seu negócio, vamos conversar a respeito.
            </p>
          </div>
          <div className="w-1/2">
            <form className="relative" onSubmit={handleSubmit}>
              <label className="block text-lg font-medium mb-2 mt-4" htmlFor="email">
                Qual é o seu e-mail empresarial?
              </label>
              <input
                className="w-full p-4 rounded-lg text-black bg-white border border-black placeholder-transparent focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-white mt-2">
                Seu e-mail seguirá os detalhes das nossas políticas de privacidade.
              </p>
              <div className="text-center text-red-500 mt-4">
                {status === 'error' && (
                  <p>
                    Erro ao enviar o email. Tente novamente.
                    <img src={errorImg} alt="Erro" className="inline-block ml-2 w-6 h-6" />
                  </p>
                )}
              </div>
              {status === 'sending' && (
                <p className="text-yellow-500 mt-4">
                  Enviando...
                </p>
              )}
              {status === 'success' && (
                <p className="text-green-500 mt-4">
                  Email enviado com sucesso!
                  <img src={successImg} alt="Sucesso" className="inline-block ml-2 w-6 h-6" />
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
