import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2023 - Present',
      description: [
        'Lead a team of 5 engineers in developing a cloud-based SaaS platform serving 100K+ users',
        'Architected and implemented microservices infrastructure reducing response times by 40%',
        'Mentored junior developers and conducted technical interviews'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions LLC',
      period: 'Mar 2021 - Dec 2022',
      description: [
        'Built and maintained multiple client-facing web applications using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
        'Collaborated with UX team to improve user engagement by 60%'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'StartupHub',
      period: 'Jun 2019 - Feb 2021',
      description: [
        'Developed RESTful APIs and integrated third-party services for a fintech platform',
        'Optimized database queries resulting in 50% faster page load times',
        'Participated in agile development process and daily stand-ups'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-lg">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-700 flex gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
