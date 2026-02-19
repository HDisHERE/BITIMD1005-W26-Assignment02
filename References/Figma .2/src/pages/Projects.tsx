import { useState } from 'react';
import { Link } from 'react-router';
import { Search } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore my portfolio of web applications and creative solutions
        </p>
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

      {/* Projects Grid */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Featured Projects ({filteredProjects.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
