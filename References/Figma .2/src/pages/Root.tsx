import { Outlet, Link } from 'react-router';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

export default function Root() {
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
                <Link to="/">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Alex Morgan
                  </h2>
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/projects" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
                <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <Outlet />

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
