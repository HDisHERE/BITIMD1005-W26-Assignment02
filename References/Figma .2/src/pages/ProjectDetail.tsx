import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Button */}
      <Link 
        to="/projects"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Project Image */}
          <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">
                  {project.name}
                </h1>
                <p className="text-xl text-slate-600">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-4 mb-8">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
              </div>
            )}

            {/* Detailed Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Project</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-lg border border-blue-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Projects CTA */}
      <div className="text-center">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
        >
          View More Projects
        </Link>
      </div>
    </div>
  );
}
