import React from 'react';
import IconRisk from '../../Images/risco.png';
import IconSecurity from '../../Images/seguranca.png';
import IconCompliance from '../../Images/lista-de-controle.png';
import IconCredibility from '../../Images/insignia.png';
import IconDifferential from '../../Images/setas-flechas.png';
import IconTrust from '../../Images/confianca.png';

const benefitsData = [
    {
        icon: IconRisk,
        title: 'Riscos',
        description: 'Ao identificar e corrigir as vulnerabilidades descobertas durante os testes de penetração, as empresas podem diminuir as chances de suas organizações serem bem sucedidas no futuro.'
    },
    {
        icon: IconSecurity,
        title: 'Segurança',
        description: 'Realizar testes de penetração mostra um comprometimento proativo com a segurança cibernética. Identificando e corrigindo vulnerabilidades antes que invasores possam explorá-las, fortalecendo a segurança de dados.'
    },
    {
        icon: IconCompliance,
        title: 'Conformidade',
        description: 'Muitos setores têm regulamentações estritas de segurança cibernética. Realizar testes de penetração ajuda a garantir que as empresas estejam em conformidade com essas normas, demonstrando o compromisso com a segurança.'
    },
    {
        icon: IconCredibility,
        title: 'Credibilidade',
        description: 'Empresas que se submetem a testes de penetração ganham mais credibilidade com os clientes, demonstrando um compromisso com a proteção dos dados dos clientes.'
    },
    {
        icon: IconDifferential,
        title: 'Diferencial',
        description: 'Empresas que podem afirmar que seus sistemas foram testados para vulnerabilidades podem usar isso como um diferencial de mercado, aumentando a confiança dos clientes e demonstrando um compromisso com a segurança.'
    },
    {
        icon: IconTrust,
        title: 'Confiança',
        description: 'O teste de penetração destaca o objetivo de proteger dados e sistemas críticos, reforçando a confiança dos clientes existentes e ajudando a conquistar novos clientes e fortalecer os relacionamentos de confiança e fidelidade.'
    }
];

const BenefitsTdi = () => {
    return (
        <div className="bg-[#3E4A89] text-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6">Benefícios</h2>
                <p className="text-center mb-12">Ao simular ataques controlados, é possível identificar e corrigir vulnerabilidades antes que sejam exploradas por hackers maliciosos, mitigando riscos e protegendo seus dados e os de seus parceiros. Além disso, ajuda a cumprir requisitos regulatórios, proteger sua reputação e aumentar o conhecimento da equipe sobre práticas seguras de computação.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
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

export default BenefitsTdi;
