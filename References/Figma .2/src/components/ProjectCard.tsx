import { 
  ShoppingCart, 
  CheckSquare, 
  Cloud, 
  Activity, 
  Coffee, 
  Layout, 
  MessageCircle, 
  Music, 
  DollarSign,
  LucideIcon 
} from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  CheckSquare,
  Cloud,
  Activity,
  Coffee,
  Layout,
  MessageCircle,
  Music,
  DollarSign
};

export function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon] || Layout;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-300 cursor-pointer group overflow-hidden">
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        {/* Category Badge */}
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {project.category}
        </span>
        
        {/* Project Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-3 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}