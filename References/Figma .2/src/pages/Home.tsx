import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          Creative Developer & Designer
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Building beautiful, functional digital experiences that make a difference
        </p>
      </div>

      {/* About Me Section */}
      <div className="mb-20">
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

      {/* CTA to Projects */}
      <div className="text-center">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
        >
          View My Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
