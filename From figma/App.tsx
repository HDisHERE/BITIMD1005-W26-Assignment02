import { useState } from 'react';
import { Search, Mail, Phone, Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';

interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Full-stack online shopping with payment integration.',
    icon: 'ShoppingCart',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjkwOTk4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    name: 'Task Management App',
    description: 'Collaborative task tracking with real-time updates.',
    icon: 'CheckSquare',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1699570044128-b61ef113b72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NjkxMjk4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    name: 'Weather Dashboard',
    description: 'Interactive forecast app with data visualizations.',
    icon: 'Cloud',
    category: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1766203695519-f5b060b72d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBza3l8ZW58MXx8fHwxNzY5MDQ0ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    name: 'Fitness Tracker',
    description: 'Track workouts, nutrition, and health metrics.',
    icon: 'Activity',
    category: 'Health & Fitness',
    image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjkwMDM3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '5',
    name: 'Recipe Finder',
    description: 'Discover recipes with smart ingredient search.',
    icon: 'Coffee',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1635661988046-306631057df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29va2luZyUyMHJlY2lwZXN8ZW58MXx8fHwxNzY5MTI5ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    name: 'Portfolio CMS',
    description: 'Content management for creative professionals.',
    icon: 'Layout',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkxMjQ0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '7',
    name: 'Chat Application',
    description: 'Real-time messaging with file sharing and encryption.',
    icon: 'MessageCircle',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1516210938721-0703012a297a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzYWdpbmclMjBjb21tdW5pY2F0aW9uJTIwcGhvbmV8ZW58MXx8fHwxNzY5MTI5ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '8',
    name: 'Music Player',
    description: 'Sleek music streaming with playlist management.',
    icon: 'Music',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjBhdWRpb3xlbnwxfHx8fDE3NjkxMjk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '9',
    name: 'Budget Planner',
    description: 'Track expenses and analyze spending habits.',
    icon: 'DollarSign',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1764407395696-495d7fb7fc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwbW9uZXklMjBidWRnZXR8ZW58MXx8fHwxNzY5MTI5ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzY5MDg1Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Alex Morgan
                </h2>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Projects
                </a>
                <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
                  About Me
                </a>
                <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Creative Developer & Designer
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Building beautiful, functional digital experiences that make a difference
            </p>
          </div>

          {/* About Me Section */}
          <div id="about" className="mb-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbnxlbnwxfHx8fDE3MzY1MTU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Alex Morgan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl -z-10"></div>
                  </div>
                </div>

                {/* About Content */}
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    About Me
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    Hi, I'm Alex Morgan, a passionate full-stack developer and designer with over 5 years of experience creating innovative digital solutions. I specialize in building responsive web applications that combine beautiful design with powerful functionality.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    My journey in tech began with a curiosity for how things work and evolved into a career where I get to solve complex problems and bring ideas to life. I believe in writing clean, maintainable code and creating user experiences that truly make a difference.
                  </p>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Core Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'UI/UX Design', 'GraphQL', 'AWS'].map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-lg border border-blue-200 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-slate-600 mt-1">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">5+</div>
                      <div className="text-sm text-slate-600 mt-1">Years Exp</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                      <div className="text-3xl font-bold text-pink-600">30+</div>
                      <div className="text-sm text-slate-600 mt-1">Clients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="flex justify-end mt-6">
                <a 
                  href="/detailed-bio" 
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Projects Library */}
          <div id="projects">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Featured Projects ({filteredProjects.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No projects found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer id="contact" className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="mailto:alex.morgan@example.com" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" />
                    alex.morgan@example.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" />
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* About */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">About</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Passionate about creating innovative digital solutions that combine beautiful design with powerful functionality.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}