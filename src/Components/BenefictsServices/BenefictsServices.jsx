import React from 'react';

const BenefictsServices = ({ benefitsData }) => {
    return (
        <div className="bg-[#38347c] text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6">Benefícios</h2>
                <p className="text-center mb-12">Ao simular ataques controlados, é possível identificar e corrigir vulnerabilidades antes que sejam exploradas por hackers maliciosos, mitigando riscos e protegendo seus dados e os de seus parceiros. Além disso, ajuda a cumprir requisitos regulatórios, proteger sua reputação e aumentar o conhecimento da equipe sobre práticas seguras de computação.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                            <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
                            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />
                            <p className="text-center">{benefit.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full">
                        BECOME BREACHLESS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BenefictsServices;
