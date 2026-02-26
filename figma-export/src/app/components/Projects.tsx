import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and advanced filtering. Features drag-and-drop interface and notifications.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'WebSockets'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard for monitoring application metrics, user behavior, and system performance. Includes customizable widgets and data export.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'Redis', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social media platform handling millions of requests daily. Features include authentication, rate limiting, and advanced caching strategies.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using natural language processing. Features include multiple output formats, tone customization, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['React', 'Python', 'OpenAI', 'FastAPI', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'DevOps Pipeline Tool',
      description: 'Automated CI/CD pipeline management tool with integration for major cloud providers. Features include deployment tracking and rollback capabilities.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Go', 'Kubernetes', 'Terraform', 'Jenkins'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Featured Projects</h2>
        <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in building full-stack applications
        </p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-500 hover:bg-blue-600"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
