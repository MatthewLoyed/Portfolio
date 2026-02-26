import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block rounded-full overflow-hidden w-40 h-40 border-4 border-white/20 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHByb2dyYW1tZXJ8ZW58MXx8fHwxNzcwOTIyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl mb-4 font-bold">
            Hi, I'm <span className="text-blue-400">Matthew Loyed</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            I build scalable web applications and love turning complex problems into elegant solutions. 
            Passionate about clean code, user experience, and continuous learning.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white bg-transparent hover:bg-white hover:text-slate-900 hover:border-white"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}