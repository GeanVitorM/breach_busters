import React, { useEffect, useState } from 'react';
import errorImg from '../../Images/erro.png';
import successImg from '../../Images/aceitaram.png';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [status, setStatus] = useState(null); // Para armazenar o status do envio

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setStatus('sending');

      try {
        const response = await fetch('https://api.example.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          setStatus('success');
          setEmail(''); // Limpa o campo de e-mail após o envio bem-sucedido
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-[#3E4A89] w-full">
      <div className="text-white max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-left">_ Fale Conosco!</h1>
        <form className="bg-black p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-white mr-2">❯</span>
            <label className="text-lg font-medium" htmlFor="email">
              Adicione seu email empresarial :
            </label>
          </div>
          <div className="flex items-center relative mb-4">
            <span className="text-white mr-2">❯</span>
            <input
              className="w-full p-4 rounded-lg text-white bg-black placeholder-transparent focus:outline-none"
              type="email"
              id="email"
              placeholder="|"
              style={{ caretColor: 'transparent' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
            <span
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            >
              |
            </span>
          </div>
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
              <img src={errorImg} alt="Enviando" className="inline-block ml-2 w-6 h-6" />
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
  );
};

export default Contact;
