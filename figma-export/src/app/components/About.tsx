import { Code2, Coffee, Zap } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">About Me</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1754548930550-be9fa88874f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzcwOTIyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-slate-700 mb-6">
                I'm a software engineer with over 5 years of experience building web applications 
                that scale. I specialize in React, Node.js, and cloud technologies, with a focus 
                on creating intuitive user experiences backed by robust architectures.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                When I'm not coding, you'll find me contributing to open source projects, writing 
                technical blog posts, or exploring the latest developments in AI and machine learning.
              </p>
              <p className="text-lg text-slate-700">
                I believe in writing clean, maintainable code and always strive to stay at the 
                forefront of modern development practices.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Clean Code</h3>
              <p className="text-slate-600">
                Writing maintainable, scalable code that stands the test of time
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Fast Performance</h3>
              <p className="text-slate-600">
                Optimizing applications for speed and efficiency at scale
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                <Coffee className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">Problem Solver</h3>
              <p className="text-slate-600">
                Turning complex challenges into elegant, simple solutions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
