import React from 'react';
import errorImage from '../../Images/Pull request-rafiki.png';
const ErrorComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <img src={errorImage} alt="Erro" className="mx-auto mb-8 w-64 h-64 object-contain" />
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ops! Ainda estamos preparando tudo por aqui. Aguarde.
                </h1>
            </div>
        </div>
    );
};

export default ErrorComponent;
