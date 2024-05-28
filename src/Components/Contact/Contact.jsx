import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#3E4A89]">
      <div className="text-white w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 left-3">_ Fale Conosco!</h1>
        <div className="bg-black p-8 rounded-lg shadow-lg mx-auto w-full">
          <div className="flex items-center mb-4">
            <span className="text-white mr-2">❯</span>
            <label className="text-lg font-medium" htmlFor="email">
              Adicione seu email empresarial :
            </label>
          </div>
          <div className="flex items-center relative">
            <span className="text-white mr-2">❯</span>
            <input
              className="w-full p-4 rounded-lg text-white bg-black placeholder-transparent focus:outline-none"
              type="email"
              id="email"
              placeholder="|"
              style={{ caretColor: 'transparent' }}
            />
            <span
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            >
              |
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
