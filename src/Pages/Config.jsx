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

//Main page
export const homeTitle = "Start Bust into the Unexplored";
export const bgColorHome = "bg-[#202444]";
export const bgColorHeader = "bg-[#202444]";
export const linkHeader = "#contact";
export const subTitle = "Unexplored.";
export const homeText = "Conte com profissionais dedicados para identificar brechas no seu ambiente e receba relatórios personalizados com informações relevantes para o seu negócio!";

//About Page
export const aboutTitle = "Buscando um mundo digitalmente seguro...";
export const AboutbgColorHeader = "bg-[#202444]";
export const AboutBgColorHome = "bg-[#202444]";
export const linkHeaderAbout = "#contact";
export const subTitleAbout = "";
export const homeTextAbout = "Conte com profissionais dedicados para identificar brechas no seu ambiente e receba relatórios personalizados com informações relevantes para o seu negócio!";

//Teste de intrusão
export const TitleHomeTI = "Teste De Intrusão.";
export const bgColorTIHeader = "bg-[#141414]";
export const bgColorTIHome = "bg-[#141414]";
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

