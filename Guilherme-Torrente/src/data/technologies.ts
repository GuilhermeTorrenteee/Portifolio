export interface Technology {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Patterns' | 'Cloud';
  icon: string;
  proficiency?: 'Avançado' | 'Intermediário' | 'Iniciante';
}

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', proficiency: 'Avançado' },
  { name: 'TypeScript', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', proficiency: 'Avançado' },
  { name: 'JavaScript', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', proficiency: 'Avançado' },
  { name: 'Angular', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg', proficiency: 'Intermediário' },
  { name: 'HTML5', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', proficiency: 'Avançado' },
  { name: 'CSS3', category: 'Frontend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', proficiency: 'Avançado' },

  // Backend
  { name: 'C#', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', proficiency: 'Avançado' },
  { name: '.NET Core', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg', proficiency: 'Avançado' },
  { name: 'ASP.NET Core MVC', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg', proficiency: 'Avançado' },
  { name: 'Java', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', proficiency: 'Intermediário' },
  { name: 'Spring Framework', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg', proficiency: 'Intermediário' },
  { name: 'Spring Boot', category: 'Backend', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg', proficiency: 'Intermediário' },

  // Database
  { name: 'SQL Server', category: 'Database', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', proficiency: 'Avançado' },
  { name: 'MySQL', category: 'Database', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', proficiency: 'Intermediário' },
  { name: 'Dapper', category: 'Database', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg', proficiency: 'Intermediário' },

  // Patterns & Architecture
  { name: 'MVC Pattern', category: 'Patterns', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg', proficiency: 'Avançado' },
  { name: 'Repository Pattern', category: 'Patterns', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', proficiency: 'Intermediário' },
  { name: 'Singleton', category: 'Patterns', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', proficiency: 'Iniciante' },
  { name: 'Strategy Pattern', category: 'Patterns', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', proficiency: 'Iniciante' },
  { name: 'Facade Pattern', category: 'Patterns', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', proficiency: 'Iniciante' },

  // Cloud & DevOps
  { name: 'Firebase', category: 'Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', proficiency: 'Avançado' },
  { name: 'Railway', category: 'Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg', proficiency: 'Intermediário' },
  { name: 'Git', category: 'Cloud', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', proficiency: 'Avançado' },
];

export const getCategorizedTechnologies = () => {
  return technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);
};
