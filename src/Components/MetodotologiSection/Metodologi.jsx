import React from 'react';
import img1 from '../../Images/pesquisa.png';
import img2 from '../../Images/projeto.png';
import img3 from '../../Images/denunciante.png';

const MethodologyData = [
    {
        title: 'Metodologia',
        content: [
            'Ao adotar frameworks consolidados, os profissionais de segurança podem acelerar o processo de teste, garantir uma cobertura abrangente e facilitar a automação de tarefas repetitivas. Isso resulta em uma identificação mais rápida e precisa de vulnerabilidades, permitindo que as organizações tomem medidas proativas para fortalecer suas posturas de segurança cibernética.',
            '• OWASP – Open Web Application Security Project – Organizações dedicadas à segurança de aplicações web, oferecendo diretrizes e ferramentas para proteger contra ameaças.',
            '• PTES – Penetration Testing Execution Standard – Um padrão para conduzir testes de penetração de forma consistente e abrangente.',
            '• NIST – National Institute of Standards and Technology – É um framework desenvolvido pelo Breach Busters para testes de penetração e espionagem.'
        ],
        image: img1
    },
    {
        title: 'Projeto',
        content: [
            'O funcionamento do projeto ocorre de maneiras simples para o cliente e complexas nos bastidores. Conseguimos abstrair as partes difíceis em algo simples de se entender, permitindo que nossos clientes tenham o poder de tomar uma decisão assertiva.',
            '• ESCOPO – Você irá ver quais domínios estão em avaliação de testes, reagendando horas, dias e semanas, explicando o que há em algum cenário.',
            '• AVALIAÇÃO – Avaliação de que maneira poderiam ser implementados contra uma avaliação, usando nossas próprias técnicas de implantações realística.',
            '• RESULTADO – É agendada uma data/horário para gerar, BOA e INF, demandando serem traduzidas de forma clara para torná-las com dados de decisões e debates para o time técnico.'
        ],
        image: img2
    },
    {
        title: 'Report',
        content: [
            'Os relatórios oferecem uma comunicação clara e precisa dos resultados dos testes, ajudando a identificar facilmente vulnerabilidades críticas, priorizar correções e justificar investimentos em segurança. Além disso, fornecem informações valiosas para apoiar a tomada de decisões estratégicas, promovendo a segurança da informação dentro da organização. Com relatórios abrangentes e detalhados, você terá um visão clara dos riscos enfrentados e das medidas necessárias para proteger sua organização.',
            '• Relatórios Técnicos e Gerenciais – Contendo todas as etapas dos testes e suas sugestões.',
            '• Relatórios para Tomadores de Decisão – Exclusivos para os tomadores de decisão que necessitam de informação legível e eficiente.',
            '• Relatórios em PowerPoint – Apresentação de slides para que o nosso team possa explicar o que precisa ser feito, já com etapas e atividades dentro.'
        ],
        image: img3
    }
];

const MethodologyComponent = () => {
    return (
        <div className="bg-[#3E4A89] py-16">
            <div className="container mx-auto flex flex-col gap-6">
                {MethodologyData.map((section, index) => {
                    const isReverse = index % 2 !== 0;
                    return (
                        <div key={index} className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                            <div className="w-1/3 flex justify-center">
                                <img src={section.image} alt={section.title} className="h-auto max-w-xs rounded-lg" />
                            </div>
                            <div className="w-2/3 bg-[#1A1A5C] p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
                                {section.content.map((text, idx) => (
                                    <p key={idx} className="text-white mb-2">{text}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MethodologyComponent;
