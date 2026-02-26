import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Get In Touch</h2>
        <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href="mailto:matthew.loyed@example.com" className="text-slate-600 hover:text-blue-600">
                    matthew.loyed@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-slate-600 hover:text-blue-600">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h3 className="text-xl mb-2">Let's Build Something Amazing</h3>
              <p className="text-blue-100">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
            </Card>
          </div>
          <Card className="p-6 h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="flex-1 resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}