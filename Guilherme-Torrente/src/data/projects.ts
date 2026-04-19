export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  category: 'Full-Stack' | 'Backend' | 'Frontend' | 'HTML/CSS' | 'Estudos C#' | 'Estudos Java';
  github?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // FULL-STACK PROJECTS (6)
  {
    id: 1,
    name: 'GhostTech',
    description: 'Site de assistência técnica especializada com serviços, depoimentos de clientes e integração WhatsApp. Plataforma profissional para agendamento de reparos.',
    technologies: ['React', 'HTML', 'CSS', 'Firebase'],
    category: 'Full-Stack',
    link: 'https://ghosttech-decae.web.app/',
    featured: true,
  },
  {
    id: 2,
    name: 'Sushi do Cabeça',
    description: 'Plataforma de pedidos de sushi com cardápio completo, carrinho de compras e sistema de login de clientes. Integração com Firebase para gerenciamento de dados.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    category: 'Full-Stack',
    link: 'https://sushi-do-cabeca.web.app/',
    featured: true,
  },
  {
    id: 3,
    name: 'Lanche-Mac',
    description: 'Site de lancheria desenvolvido com ASP.NET Core MVC. Demonstra conhecimento em desenvolvimento web backend com C# e .NET.',
    technologies: ['C#', 'HTML', 'CSS', 'ASP.NET Core MVC'],
    category: 'Full-Stack',
    github: 'https://github.com/GuilhermeTorrenteee/Lanche-Mac',
  },
  {
    id: 4,
    name: 'PSN-STORE',
    description: 'Loja virtual de jogos PS5 desenvolvida com React e TypeScript, demonstrando habilidades em frontend moderno.',
    technologies: ['React', 'TypeScript', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/GuilhermeTorrenteee/PSN-STORE',
  },

  // BACKEND PROJECTS (5)
  {
    id: 5,
    name: 'Acesso de dados com .NET, C#, Dapper e SQL Server',
    description: 'Projeto focado em acesso a dados utilizando Dapper como ORM e SQL Server como banco de dados relacional.',
    technologies: ['C#', '.NET Core', 'Dapper', 'SQL Server', 'T-SQL'],
    category: 'Backend',
    github: 'https://github.com/GuilhermeTorrenteee/-Acesso-dados-com-.NET-C-Dapper-e-SQL-Server',
  },
  {
    id: 6,
    name: 'Projeto Spring',
    description: 'Implementação de padrões de design com Java e Spring Framework (Singleton, Strategy/Repository, Facade).',
    technologies: ['Java', 'Spring Framework', 'Padrões de Design'],
    category: 'Backend',
    github: 'https://github.com/GuilhermeTorrenteee/Projeto-Spring',
  },
  {
    id: 7,
    name: 'Santander DevWeek 2023',
    description: 'API REST desenvolvida em Java com Spring Boot 3 e Java 17, publicada na nuvem usando Railway.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Railway'],
    category: 'Backend',
    github: 'https://github.com/GuilhermeTorrenteee/santander-dev-week-2023',
  },
  {
    id: 8,
    name: 'CRUD Pessoa Form',
    description: 'Aplicação de gerenciamento de pessoas com operações CRUD implementada em C# com Windows Forms.',
    technologies: ['C#', '.NET Framework'],
    category: 'Backend',
    github: 'https://github.com/GuilhermeTorrenteee/CrudPessoaForm',
  },
  {
    id: 9,
    name: 'Fundamentos do SQL Server',
    description: 'Projeto educacional focado em fundamentos e boas práticas de T-SQL e SQL Server.',
    technologies: ['T-SQL', 'SQL Server'],
    category: 'Backend',
    github: 'https://github.com/GuilhermeTorrenteee/-Fundamentos-do-SQL-Server',
  },

  // FRONTEND PROJECTS (3)
  {
    id: 10,
    name: 'Angular THE FLASH Blog',
    description: 'Blog baseado em layout do Dribbble desenvolvido com Angular, TypeScript, HTML e CSS moderno.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/GuilhermeTorrenteee/Angular-THE-FLASH-blog',
  },
  {
    id: 11,
    name: 'Miniblog React',
    description: 'Pequeno blog desenvolvido com React usando Create React App, JavaScript, HTML e CSS.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com/GuilhermeTorrenteee/Miniblog-React',
  },
  {
    id: 12,
    name: 'React Router',
    description: 'Projeto educacional focado em aprendizado de React Router e navegação em aplicações React.',
    technologies: ['React', 'React Router', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/GuilhermeTorrenteee/React_Router',
  },

  // HTML/CSS PROJECTS (5)
  {
    id: 13,
    name: 'Pokedex',
    description: 'Projeto Pokedex desenvolvido com CSS puro, consumindo dados de API externa para exibir Pokémons.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'HTML/CSS',
    github: 'https://github.com/GuilhermeTorrenteee/Pokedex',
  },
  {
    id: 14,
    name: 'Site Agência',
    description: 'Site de agência desenvolvido com HTML e CSS, baseado em aula prática de desenvolvimento web.',
    technologies: ['HTML', 'CSS'],
    category: 'HTML/CSS',
    github: 'https://github.com/GuilhermeTorrenteee/Site-agencia',
  },
  {
    id: 15,
    name: 'Formulário Venda de Carro',
    description: 'Formulário interativo para venda de carros desenvolvido com HTML e CSS básicos.',
    technologies: ['HTML', 'CSS'],
    category: 'HTML/CSS',
    github: 'https://github.com/GuilhermeTorrenteee/Formulario-venda-carro',
  },
  {
    id: 16,
    name: 'Tributo Silvio',
    description: 'Primeiro projeto HTML/CSS - página tributo desenvolvida como exercício inicial de web.',
    technologies: ['HTML', 'CSS'],
    category: 'HTML/CSS',
    github: 'https://github.com/GuilhermeTorrenteee/Tributo-Silvio',
  },
  {
    id: 17,
    name: 'Alterando Tema',
    description: 'Projeto de tema claro/escuro desenvolvido com CSS, demonstrando manipulação de estilos dinâmicos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'HTML/CSS',
    github: 'https://github.com/GuilhermeTorrenteee/alterando-tema',
  },

  // C# STUDIES (12)
  {
    id: 18,
    name: 'Xadrez',
    description: 'Implementação completa do jogo de xadrez em C# com orientação a objetos, incluindo todas as regras e movimentos.',
    technologies: ['C#', 'OOP'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Xadrez',
  },
  {
    id: 19,
    name: 'Calculadora de Combustível',
    description: 'Aplicação para cálculo de consumo de combustível desenvolvida em C# com conceitos de OOP.',
    technologies: ['C#', 'OOP'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Calculadora-de-Combustivel-',
  },
  {
    id: 20,
    name: 'Lambda',
    description: 'Projeto educacional focado em estudos de expressões Lambda em C# e programação funcional.',
    technologies: ['C#', 'Lambda', 'LINQ'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Lambda',
  },
  {
    id: 21,
    name: 'Interfaces',
    description: 'Projeto demonstrando implementação e uso de Interfaces em C#, padrões de design com interfaces.',
    technologies: ['C#', 'Interfaces', 'OOP'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Interfaces',
  },
  {
    id: 22,
    name: 'Exceptions',
    description: 'Projeto focado em tratamento de exceções em C#, demonstrando try-catch e boas práticas de erro.',
    technologies: ['C#', 'Exception Handling'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Exceptions',
  },
  {
    id: 23,
    name: 'Enums',
    description: 'Projeto educacional sobre uso de enumerações em C# e como utilizá-las em aplicações reais.',
    technologies: ['C#', 'Enums'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Enums',
  },
  {
    id: 24,
    name: 'Encapsulamento',
    description: 'Projeto focado em princípios de encapsulamento em C#, modificadores de acesso e propriedades.',
    technologies: ['C#', 'Encapsulamento', 'OOP'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Encapsulamento',
  },
  {
    id: 25,
    name: 'Orientação a Objetos',
    description: 'Projeto educacional com fundamentos de programação orientada a objetos em C#.',
    technologies: ['C#', 'OOP'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Orientacao-a-objetos',
  },
  {
    id: 26,
    name: 'Editor HTML',
    description: 'Editor de HTML desenvolvido em C# com interface gráfica para edição de documentos HTML.',
    technologies: ['C#', '.NET Framework', 'GUI'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Editor-HTML',
  },
  {
    id: 27,
    name: 'Cronômetro',
    description: 'Aplicação cronômetro/timer desenvolvida em C# com Windows Forms e tratamento de eventos.',
    technologies: ['C#', '.NET Framework', 'Windows Forms'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Cronometro',
  },
  {
    id: 28,
    name: 'Text Editor',
    description: 'Editor de texto em C# demonstrando manipulação de arquivos e interface de usuário.',
    technologies: ['C#', '.NET Framework'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/Text-Editor',
  },
  {
    id: 29,
    name: 'Calculadora',
    description: 'Aplicação calculadora desenvolvida em C# com operações matemáticas básicas e avançadas.',
    technologies: ['C#', '.NET Framework'],
    category: 'Estudos C#',
    github: 'https://github.com/GuilhermeTorrenteee/calculadora',
  },

  // JAVA STUDIES (2)
  {
    id: 30,
    name: 'Desafio Classes iPhone',
    description: 'Desafio de modelagem orientada a objetos em Java, simulando classes de um iPhone.',
    technologies: ['Java', 'OOP'],
    category: 'Estudos Java',
    github: 'https://github.com/GuilhermeTorrenteee/Desafio-Classes-Iphone',
  },
  {
    id: 31,
    name: 'Contador',
    description: 'Desafio do bootcamp implementando um contador com Java e orientação a objetos.',
    technologies: ['Java', 'OOP'],
    category: 'Estudos Java',
    github: 'https://github.com/GuilhermeTorrenteee/Contador',
  },

  // PORTFOLIO (1)
  {
    id: 32,
    name: 'Portfólio Pessoal',
    description: 'Portfólio profissional desenvolvido com React, TypeScript e Vite. Showcasing de projetos, tecnologias e habilidades.',
    technologies: ['React', 'TypeScript', 'Vite', 'Firebase', 'CSS3'],
    category: 'Full-Stack',
    github: 'https://github.com/GuilhermeTorrenteee/Portifolio',
    link: 'https://guilherme-torrente.web.app/',
    featured: true,
  },
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter((p) => p.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((p) => p.featured);
};
