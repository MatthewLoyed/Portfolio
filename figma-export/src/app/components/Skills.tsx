import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      title: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Jenkins', 'Terraform', 'Linux']
    },
    {
      title: 'Other',
      skills: ['REST APIs', 'Microservices', 'Agile', 'Testing', 'WebSockets', 'OAuth', 'SEO']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Skills & Technologies</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl mb-4 text-slate-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-sm py-1.5 px-3 bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
