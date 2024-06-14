//Imports 
import Find from './../Images/pesquisa.png';
import Proj from './../Images/projeto.png';
import Denun from './../Images/denunciante.png';
import IconRisk from './../Images/risco.png';
import IconSecurity from './../Images/seguranca.png';
import IconCompliance from './../Images/lista-de-controle.png';
import IconCredibility from './../Images/insignia.png';
import IconDifferential from './../Images/setas-flechas.png';
import IconTrust from './../Images/confianca.png';
import IconBin from "../Images/codigo-binario.png";
import icone1 from './../Images/certificado.png';
import icone2 from './../Images/navegador-da-web.png';
import icone3 from './../Images/painel-de-controle.png';
import ampulheta from './../Images/ampulheta.png';
import foco from './../Images/foco (1).png';
import escudo from './../Images/escudo.png';
import img1 from './../Images/ataque-cibernetico.png';
import img2 from './../Images/abra-o-livro (1).png';
import img3 from './../Images/codigo-binario.png';
import img4 from './../Images/espada (1).png';
import img5 from './../Images/aviao-de-papel (1).png';
import img6 from './../Images/apoio-suporte.png';

//Main page
export const homeTitle = "Start Bust into the";
export const bgColorHome = "bg-[#34347c]";
export const bgColorHeader = "bg-[#34347c]";
export const textColorHeader = "text-white"
export const linkHeader = "#contact";
export const subTitle = "Unexplored.";
export const homeText = "Conte com profissionais dedicados para identificar brechas no seu ambiente e receba relatórios personalizados com informações relevantes para o seu negócio!";
export const soluctionCards = [
    { id: 1, title: 'Teste de intrusão', image: img1, link: '/Soluctions/teste-de-intrusao' },
    { id: 2, title: 'Treinamentos', image: img2, link: '/Soluctions/treinamentos' },
    { id: 3, title: 'Engenharia Reversa', image: img3, link: '/Soluctions/engenharia-reversa' },
    { id: 4, title: 'Red Team', image: img4, link: '/Soluctions/red-team' },
    { id: 5, title: 'Phishing', image: img5, link: '/Soluctions/phishing' },
    { id: 6, title: 'Teste de estresse', image: img6, link: '/Soluctions/teste-de-estresse' }
];

//About Page
export const aboutTitle = "Buscando um mundo digitalmente seguro...";
export const AboutbgColorHeader = "bg-[#202444]";
export const AboutBgColorHome = "bg-[#202444]";
export const textColorAbout = "text-white"
export const linkHeaderAbout = "#contact";
export const subTitleAbout = "";
export const homeTextAbout = "Conte com profissionais dedicados para identificar brechas no seu ambiente e receba relatórios personalizados com informações relevantes para o seu negócio!";

//Teste de intrusão
export const TitleHomeTI = "Teste De Intrusão.";
export const bgColorTIHeader = "bg-[#141414]";
export const bgColorTIHome = "bg-[#141414]";
export const textColorTI = "text-white"
export const linkHeaderTI = "/";
export const subTitleTI = "";
export const homeTextTI = "Ao digitalizar sua presença, você se expõe a riscos invisíveis, com potenciais vulnerabilidades sendo alvo de cibercriminosos, ameaçando seus clientes, parceiros e a operação do negócio. Para atender aos padrões regulatórios e proteger sua reputação, é crucial ter uma equipe de especialistas em segurança cibernética. Eles aplicam técnicas avançadas e conhecimento especializado para identificar e corrigir vulnerabilidades, fortalecendo sua infraestrutura digital.";

export const benefitsData = [
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

export const MethodologiesDataER = [
    {
        title: 'Metodologia',
        content: [
            'Ao adotar frameworks consolidados, os profissionais de segurança podem acelerar o processo de teste, garantir uma cobertura abrangente e facilitar a automação de tarefas repetitivas. Isso resulta em uma identificação mais rápida e precisa de vulnerabilidades, permitindo que as organizações tomem medidas proativas para fortalecer suas posturas de segurança cibernética.',
            '• OWASP – Open Web Application Security Project – Organizações dedicadas à segurança de aplicações web, oferecendo diretrizes e ferramentas para proteger contra ameaças.',
            '• PTES – Penetration Testing Execution Standard – Um padrão para conduzir testes de penetração de forma consistente e abrangente.',
            '• NIST – National Institute of Standards and Technology – É um framework desenvolvido pelo Breach Busters para testes de penetração e espionagem.'
        ],
        image: Find
    },
    {
        title: 'Projeto',
        content: [
            'O funcionamento do projeto ocorre de maneiras simples para o cliente e complexas nos bastidores. Conseguimos abstrair as partes difíceis em algo simples de se entender, permitindo que nossos clientes tenham o poder de tomar uma decisão assertiva.',
            '• ESCOPO – Você irá ver quais domínios estão em avaliação de testes, reagendando horas, dias e semanas, explicando o que há em algum cenário.',
            '• AVALIAÇÃO – Avaliação de que maneira poderiam ser implementados contra uma avaliação, usando nossas próprias técnicas de implantações realística.',
            '• RESULTADO – É agendada uma data/horário para gerar, BOA e INF, demandando serem traduzidas de forma clara para torná-las com dados de decisões e debates para o time técnico.'
        ],
        image: Proj
    },
    {
        title: 'Report',
        content: [
            'Os relatórios oferecem uma comunicação clara e precisa dos resultados dos testes, ajudando a identificar facilmente vulnerabilidades críticas, priorizar correções e justificar investimentos em segurança. Além disso, fornecem informações valiosas para apoiar a tomada de decisões estratégicas, promovendo a segurança da informação dentro da organização. Com relatórios abrangentes e detalhados, você terá um visão clara dos riscos enfrentados e das medidas necessárias para proteger sua organização.',
            '• Relatórios Técnicos e Gerenciais – Contendo todas as etapas dos testes e suas sugestões.',
            '• Relatórios para Tomadores de Decisão – Exclusivos para os tomadores de decisão que necessitam de informação legível e eficiente.',
            '• Relatórios em PowerPoint – Apresentação de slides para que o nosso team possa explicar o que precisa ser feito, já com etapas e atividades dentro.'
        ],
        image: Denun
    }
];

export const ethicalHackingContent = {
    title: "APIs e a facilidade de hackear.",
    description: "Entenda por que as APIs facilitam a vida dos agentes maliciosos. Se uma vez era normal realizar toda uma sequência de passos para obter informação sensível, hoje basta uma requisição.",
    buttonText: "VEJA COMO AS APIS SÃO ALVOS FÁCEIS",
    buttonLink: "https://exemplo.com/detalhes",
    backgroundLeft: "black",
    backgroundRight: "linear-gradient(to right, #3E4A89, #6B468C)"
};

export const bannerItems = [
    {
        icon: icone1,
        title: 'Visibilidade',
        description: 'Garanta total visibilidade sobre seus ativos digitais e suas vulnerabilidades.'
    },
    {
        icon: icone2,
        title: 'Segurança',
        description: 'Proteja seus dados e aplicativos com as soluções de segurança mais avançadas.'
    },
    {
        icon: icone3,
        title: 'Controle',
        description: 'Tenha controle total sobre sua infraestrutura de segurança com nossas ferramentas de gestão.'
    }
];

//Engenharia reversa
export const TitleHomeER = "Engenharia Reversa.";
export const bgColorERHeader = "bg-[#141414]";
export const bgColorERHome = "bg-[#141414]";
export const textColorER = "text-white"
export const linkHeaderER = "/contact";
export const subTitleER = "";
export const homeTextER = "Ao aplicar a engenharia reversa, é possível desmontar e analisar cuidadosamente sistemas e softwares existentes, revelando seu funcionamento interno e identificando possíveis vulnerabilidades. Essa abordagem estratégica oferece uma compreensão profunda das tecnologias utilizadas em sua infraestrutura digital, permitindo que você fortaleça suas defesas contra potenciais ataques cibernéticos.Além disso, ao entender os sistemas de dentro para fora, você pode desenvolver e implementar soluções de segurança mais eficazes e adaptadas às necessidades específicas de sua organização. A engenharia reversa não apenas ajuda a proteger seus dados e operações, mas também contribui para o cumprimento de regulamentações e padrões de segurança, garantindo a integridade e confiabilidade de seu ambiente digital.";


export const benefitsDataER = [
    {
        icon: IconBin,
        title: 'Verificação Antecipada ',
        description: 'Ao realizar engenharia reversa, é possível identificar antecipadamente possíveis vulnerabilidades nos sistemas, o que permite que sejam corrigidas antes de serem exploradas por atacantes.'
    },
    {
        icon: IconSecurity,
        title: 'Melhoria da segurançaa',
        description: 'A realização de testes de segurança específicos por meio da engenharia reversa pode atestar aos stakeholders que a aplicação foi submetida a um processo de avaliação rigoroso antes do lançamento do produto, aumentando a confiança na segurança do mesmo.'
    },
    {
        icon: IconCompliance,
        title: 'Conformidade regulatória',
        description: 'A engenharia reversa contribui para o cumprimento de regulamentações e padrões de segurança, garantindo que a organização esteja em conformidade com as exigências legais.'
    }
];

export const MethodologiesData = [
    {
        title: 'Metodologia',
        content: [
            'MITRE ATT&CK - Uma base de conhecimento detalhada que mapeia táticas, técnicas e procedimentos usados por adversários em ciberataques. Ele ajuda as equipes Red Team a replicar ataques reais com precisão, oferecendo uma visão abrangente das potenciais ameaças.',
            'CBEST - Um framework desenvolvido pelo Bank of England que oferece uma abordagem padronizada para realizar testes Red Team em instituições financeiras. Ele foca em ameaças reais e ajuda a identificar fraquezas significativas na infraestrutura de segurança.',
            'OSSTMM - Open Source Security Testing Methodology Manual, um framework desenvolvido pelo Institute for Security and Open Methodologies (ISECOM).'
        ],
        image: Find
    },
    {
        title: 'Projeto',
        content: [
            'O funcionamento do projeto ocorre de maneira simples para o cliente e complexa nos bastidores. Conseguimos abstrair as partes difíceis em algo simples de se entender, permitindo que nossos clientes tenham o poder de tomar uma decisão assertiva.',
            'ESCOPO - Você e sua equipe definem quais são os artefatos de testes, regulando horas, dias, servidores, aplicações e o que mais julgarem necessário.',
            'OPERAÇÃO - Nosso time de especialistas realiza o pentesting mantendo contato sobre o andamento da operação e demais informações necessárias.',
            'RESULTADO - É agendada uma data final para entrega do RAT, ROC e HF, demonstrando com exatidão de forma clara para tomadores de decisões e detalhada para o time técnico.'
        ],
        image: Proj
    },
    {
        title: 'Report',
        content: [
            'Os relatórios oferecem uma comunicação clara e precisa dos resultados dos testes, ajudando a identificar facilmente vulnerabilidades críticas, priorizar correções e justificar investimentos em segurança. Além disso, fornecem informações valiosas para apoiar a tomada de decisões estratégicas, promovendo transparência e responsabilidade em todo o processo. Com relatórios abrangentes em mãos, você terá uma visão clara das ameaças enfrentadas e das medidas necessárias para proteger sua organização.',
            'RAT - Relatório de Análise Técnica - Confeccionado para o time que faz o seu negócio acontecer, mostrando detalhes bit a bit.',
            'ROC - Resumo de Operações Cibernéticas - Exclusivo para os tomadores de decisão que precisam da informação rápida e precisa.',
            'HF - Highlight Founds - Uma apresentação com seu time e o nosso para explicar o que foi encontrado e tirar eventuais dúvidas.'
        ],
        image: Denun
    }
];

export const ethicalHackingContentER = {
    title: "APIs e a facilidade de hackear.",
    description: "Entenda por que as APIs facilitam a vida dos agentes maliciosos. Se uma vez era normal realizar toda uma sequência de passos para obter informação sensível, hoje basta uma requisição.",
    buttonText: "VEJA COMO AS APIS SÃO ALVOS FÁCEIS",
    buttonLink: "https://exemplo.com/detalhes",
    backgroundLeft: "black",
    backgroundRight: "linear-gradient(to right, #3E4A89, #6B468C)"
};

//Red Team
export const TitleHomeRT = "Red Team";
export const bgColorRTHeader = "bg-[#141414]";
export const bgColorRTHome = "bg-[#141414]";
export const linkHeaderRT = "/contact";
export const textColorRT = "text-white"
export const subTitleRT = "";
export const homeTextRT = "Ao realizar ataques simulados, a Red Team identifica pontos fracos em sua infraestrutura de segurança, proporcionando uma visão realista das ameaças. Essa abordagem proativa não só protege seus clientes, parceiros e operações, mas também assegura o cumprimento de padrões regulatórios. Com técnicas sofisticadas e expertise em cibersegurança, a Red Team trabalha para antecipar possíveis ataques, permitindo a implementação de medidas defensivas eficazes e reforçando a segurança do seu ambiente digital.";

export const bannerItemsRT = [
    {
        icon: ampulheta,
        title: '60%',
        description: 'é o percentual reduzido para a detecção de ataques cibernéticos reais.'
    },
    {
        icon: foco,
        title: '30%',
        description: 'de aumento na maturidade de todo seu ecosistema envolvendo segurança.'
    },
    {
        icon: escudo,
        title: '78%',
        description: 'a mais de resiliência organizacional contra ataques cibernéticos.'
    }
];

export const benefitsDataRT = [
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

export const MethodologiesDataRT = [
    {
        title: 'Metodologia',
        content: [
            'Ao adotar frameworks consolidados, os profissionais de segurança podem acelerar o processo de teste, garantir uma cobertura abrangente e facilitar a automação de tarefas repetitivas. Isso resulta em uma identificação mais rápida e precisa de vulnerabilidades, permitindo que as organizações tomem medidas proativas para fortalecer suas posturas de segurança cibernética.',
            '• OWASP – Open Web Application Security Project – Organizações dedicadas à segurança de aplicações web, oferecendo diretrizes e ferramentas para proteger contra ameaças.',
            '• PTES – Penetration Testing Execution Standard – Um padrão para conduzir testes de penetração de forma consistente e abrangente.',
            '• NIST – National Institute of Standards and Technology – É um framework desenvolvido pelo Breach Busters para testes de penetração e espionagem.'
        ],
        image: Find
    },
    {
        title: 'Projeto',
        content: [
            'O funcionamento do projeto ocorre de maneiras simples para o cliente e complexas nos bastidores. Conseguimos abstrair as partes difíceis em algo simples de se entender, permitindo que nossos clientes tenham o poder de tomar uma decisão assertiva.',
            '• ESCOPO – Você irá ver quais domínios estão em avaliação de testes, reagendando horas, dias e semanas, explicando o que há em algum cenário.',
            '• AVALIAÇÃO – Avaliação de que maneira poderiam ser implementados contra uma avaliação, usando nossas próprias técnicas de implantações realística.',
            '• RESULTADO – É agendada uma data/horário para gerar, BOA e INF, demandando serem traduzidas de forma clara para torná-las com dados de decisões e debates para o time técnico.'
        ],
        image: Proj
    },
    {
        title: 'Report',
        content: [
            'Os relatórios oferecem uma comunicação clara e precisa dos resultados dos testes, ajudando a identificar facilmente vulnerabilidades críticas, priorizar correções e justificar investimentos em segurança. Além disso, fornecem informações valiosas para apoiar a tomada de decisões estratégicas, promovendo a segurança da informação dentro da organização. Com relatórios abrangentes e detalhados, você terá um visão clara dos riscos enfrentados e das medidas necessárias para proteger sua organização.',
            '• Relatórios Técnicos e Gerenciais – Contendo todas as etapas dos testes e suas sugestões.',
            '• Relatórios para Tomadores de Decisão – Exclusivos para os tomadores de decisão que necessitam de informação legível e eficiente.',
            '• Relatórios em PowerPoint – Apresentação de slides para que o nosso team possa explicar o que precisa ser feito, já com etapas e atividades dentro.'
        ],
        image: Denun
    }
];

export const ethicalHackingContentRT = {
    title: "APIs e a facilidade de hackear.",
    description: "Entenda por que as APIs facilitam a vida dos agentes maliciosos. Se uma vez era normal realizar toda uma sequência de passos para obter informação sensível, hoje basta uma requisição.",
    buttonText: "VEJA COMO AS APIS SÃO ALVOS FÁCEIS",
    buttonLink: "https://exemplo.com/detalhes",
    backgroundLeft: "black",
    backgroundRight: "linear-gradient(to right, #3E4A89, #6B468C)"
};

//Terms
export const bgColorTerms = "bg-[#f8f4f4]";
export const linkContactTerms = "/";
export const textColorTerms = "black";
export const titleBannerTerms = "Termos."
export const DataTerms = `
1. Do Termo

1.1 Este documento não constitui o termo final. O termo final será confeccionado de acordo com as especificações e pedidos do cliente.

1.2 Qualquer dúvida ou solicitação de esclarecimento deve ser encaminhada para compliance@breachbusters.com.br.

2. Dos Serviços

2.1 Os serviços ofertados podem não estar disponíveis no momento da contratação.

2.2 A maioria dos serviços é realizada manualmente por profissionais autorizados e certificados.

2.3 Não repassamos o trabalho para terceiros, exceto em casos onde utilizamos produtos licenciados de outros fornecedores.

2.4 Os valores dos serviços variam e devem ser consultados diretamente com o time comercial.

3. Do Quadro

3.1 O quadro de profissionais é certificado e composto por um time preparado e credenciado pela Breach Busters.

3.2 Não existe vínculo com terceiros para a realização dos serviços, a não ser que explicitamente descrito em contrato ou solicitado pelo cliente.

4. Da Propriedade Intelectual

4.1 Todos os dados recuperados do cliente são utilizados exclusivamente para a execução do trabalho ou serviço contratado.

4.2 Esses dados não são vendidos ou repassados a terceiros e são devidamente descartados após a conclusão do trabalho, salvo em casos de reteste acordado com o cliente.

4.3 A manipulação dos dados é coberta pela nossa política de privacidade e pelas leis locais aplicáveis.

5. Das Licenças

5.1 Os produtos utilizados em nossos serviços são licenciados, de código aberto ou desenvolvidos internamente pela Breach Busters.

5.2 Não utilizamos softwares ilegais ou suspeitos.

5.3 As informações fornecidas a ferramentas não intrusivas e que não necessitam de conhecimento do ambiente são anonimizadas.

6. Da Confidencialidade

6.1 A confidencialidade do projeto é mantida de ponta a ponta.

6.2 Não divulgamos informações sobre nossos clientes, salvo os casos previamente autorizados para campanhas de marketing, como a disposição de testemunhos no site.

6.3 Todos os dados são tratados de acordo com uma política de privacidade rígida e específica.
`;

//Privace
export const bgColorPrivace = "bg-[#f8f4f4]";
export const linkContactPrivace = "/";
export const textColorPrivace = "black";
export const titleBannerPrivace = "Privacidade."
export const textPrivace = ``;

//Policy
export const bgColorPolicy = "bg-[#f8f4f4]";
export const linkContactPolicy = "/";
export const textColorPolicy = "black";
export const titleBannerPolicy = "Politica."
export const textPolicy = `A Breach Busters está comprometida em operar em conformidade com todas as leis, regulamentos e normas aplicáveis. Reconhecemos a importância da conformidade legal para manter a confiança dos clientes, parceiros e partes interessadas.
1.Entendemos a importância da proteção de dados pessoais e reconhecemos nossas responsabilidades sob a Lei Geral de Proteção de Dados (LGPD). Estamos comprometidos em proteger os dados pessoais dos nossos clientes e funcionários e em garantir que o tratamento desses dados seja realizado de acordo com os princípios estabelecidos na LGPD.
2.Estamos em processo de busca pela certificação ISO 27001, que é uma norma internacionalmente reconhecida para sistemas de gestão de segurança da informação (SGSI). Nosso objetivo é implementar e manter um SGSI eficaz, que garanta a confidencialidade, integridade e disponibilidade das informações da organização.
3.Estamos também em busca da certificação ISO 27701, que estende os requisitos do SGSI da ISO 27001 para incluir o gerenciamento da privacidade de informações pessoais. Nosso compromisso é garantir que as informações pessoais dos nossos clientes e funcionários sejam protegidas de acordo com os requisitos estabelecidos na ISO 27701.
4.A administração da empresa assume a responsabilidade pelo estabelecimento, implementação, manutenção e melhoria contínua dos processos relacionados à conformidade, proteção de dados e segurança da informação. Comprometemo-nos a fornecer os recursos necessários e o apoio adequado para alcançar esses objetivos.
5.Nosso compromisso com a conformidade, proteção de dados e segurança da informação será monitorado e revisado regularmente para garantir que continuemos a atender aos requisitos regulamentares e normativos aplicáveis e a manter os mais altos padrões de excelência em todas as nossas operações.
6.Compliance

Conduta

Privacidade

7. Todos os profissionais da nossa empresa passam por treinamentos regulares em ética empresarial. Esses treinamentos visam fornecer orientação sobre as políticas, procedimentos e práticas éticas da empresa, bem como promover a conscientização sobre dilemas éticos comuns no ambiente de trabalho.
8. Todos os profissionais são obrigados a assinar termos de comprometimento ético, nos quais concordam em aderir aos padrões éticos estabelecidos pela empresa. Esses termos destacam a importância da integridade, honestidade, transparência e respeito nas interações profissionais.
9. A conduta ética dos profissionais é avaliada constantemente como parte do nosso processo de gestão de desempenho. Através de avaliações regulares, monitoramos o cumprimento dos padrões éticos e identificamos oportunidades de melhoria.
10. Cada profissional é responsável por sua própria conduta ética, bem como por promover um ambiente de trabalho ético e respeitoso para seus colegas. Encorajamos a comunicação aberta e a denúncia de quaisquer comportamentos antiéticos ou violações das políticas da empresa.
11. Violações das políticas éticas da empresa são levadas a sério e podem resultar em medidas disciplinares, incluindo advertências, suspensões ou rescisões de contrato, conforme a gravidade da infração.
12. Nossa empresa reafirma seu compromisso com a conduta ética e espera que todos os profissionais ajam com integridade, ética e responsabilidade em todas as suas atividades profissionais.
Ético
Profissionais
13. Todos os profissionais da nossa empresa passam por treinamentos regulares em ética empresarial. Esses treinamentos visam fornecer orientação sobre as políticas, procedimentos e práticas éticas da empresa, bem como promover a conscientização sobre dilemas éticos comuns no ambiente de trabalho.
14. Todos os profissionais são obrigados a assinar termos de comprometimento ético, nos quais concordam em aderir aos padrões éticos estabelecidos pela empresa. Esses termos destacam a importância da integridade, honestidade, transparência e respeito nas interações profissionais.
15. A conduta ética dos profissionais é avaliada constantemente como parte do nosso processo de gestão de desempenho. Através de avaliações regulares, monitoramos o cumprimento dos padrões éticos e identificamos oportunidades de melhoria.
16. Cada profissional é responsável por sua própria conduta ética, bem como por promover um ambiente de trabalho ético e respeitoso para seus colegas. Encorajamos a comunicação aberta e a denúncia de quaisquer comportamentos antiéticos ou violações das políticas da empresa.
17. Violações das políticas éticas da empresa são levadas a sério e podem resultar em medidas disciplinares, incluindo advertências, suspensões ou rescisões de contrato, conforme a gravidade da infração.
18. Todos os colaboradores são obrigados a agir em conformidade com as leis e regulamentações aplicáveis, bem como as normas éticas e do mercado.
19. Não toleramos qualquer forma de conduta ilegal ou antiética por parte dos nossos colaboradores
20 Espera-se que os colaboradores ajam com integridade e transparência em todas as suas interações profissionais
20.1 Não permitimos o uso de má fé ou comportamento desonesto por parte dos nossos colaboradores.
21. Os colaboradores são instruídos a realizar apenas as atividades que estão dentro do escopo contratado e apropriado para suas funções.
22. Qualquer atividade fora do escopo contratado deve ser explicitamente autorizada pela empresa.
23. Os colaboradores que violarem estas diretrizes serão sujeitos a advertências e medidas disciplinares, conforme necessário.
24. A conduta dos colaboradores é monitorada regularmente para garantir conformidade com estas diretrizes.
25. Os colaboradores são orientados a seguir rigorosamente os termos e condições estabelecidos nos contratos firmados com clientes e parceiros.
26. Nenhuma atividade deve ser realizada sem autorização prévia ou explicitamente definida no contrato.
27. A nossa empresa reafirma o compromisso com a conduta profissional e legal de todos os colaboradores.
28. Esperamos que todos os colaboradores ajam com integridade, respeito e responsabilidade em todas as suas atividades profissionais.
29. Reconhecemos a importância da privacidade dos dados e estamos comprometidos em proteger as informações confidenciais dos nossos colaboradores, clientes e parceiros.
29.1 Todos os dados pessoais e informações sensíveis serão tratados com o mais alto nível de confidencialidade e segurança.
30. Os dados pessoais e informações dos colaboradores, clientes e parceiros serão coletados apenas para fins específicos e legítimos, e serão utilizados apenas conforme necessário para o cumprimento de contratos e obrigações legais.
30.1 Não compartilharemos, venderemos ou alugaremos informações pessoais ou sensíveis a terceiros sem o consentimento explícito dos titulares dos dados.
31. Os dados pessoais serão armazenados de forma segura e protegidos contra acesso não autorizado, uso indevido ou divulgação.
31.1 Implementaremos medidas técnicas e organizacionais adequadas para garantir a segurança dos dados e prevenir violações de segurança.
31.2 Os titulares dos dados têm o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais, conforme permitido por lei.
31.3 Envidaremos todos os esforços razoáveis para garantir que os titulares dos dados possam exercer esses direitos de forma eficaz.
32. Forneceremos transparência sobre nossas práticas de coleta, uso e compartilhamento de dados, e comunicaremos de forma clara e transparente sobre quaisquer mudanças em nossa política de privacidade.
33. Comprometemo-nos a cumprir todas as leis e regulamentos aplicáveis relacionados à proteção de dados, privacidade e segurança da informação.
34. A privacidade dos dados é uma prioridade para nossa empresa e estamos comprometidos em proteger as informações pessoais e sensíveis dos nossos colaboradores, clientes e parceiros.
35. Continuaremos a revisar e aprimorar nossas práticas de privacidade e proteção de dados para garantir conformidade com as melhores práticas e padrões do setor.

Não negociamos.

Respeitamos.

Seus dados usados somente para nosso trabalho e só!`;