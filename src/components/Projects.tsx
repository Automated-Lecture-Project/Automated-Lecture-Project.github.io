
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping experience with cart, checkout and payment integration.",
      category: "web",
      image: "bg-gradient-to-r from-blue-400 to-indigo-500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Agency Landing Page",
      description: "Modern, responsive landing page for a creative agency with animations and contact form.",
      category: "ui",
      image: "bg-gradient-to-r from-green-400 to-emerald-500",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "Figma"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Dashboard UI Design",
      description: "Comprehensive admin dashboard with data visualization, user management and analytics.",
      category: "ui",
      image: "bg-gradient-to-r from-purple-400 to-indigo-500",
      tags: ["Figma", "UI/UX", "Design System"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, notifications and team management.",
      category: "app",
      image: "bg-gradient-to-r from-amber-400 to-orange-500",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills and contact information.",
      category: "web",
      image: "bg-gradient-to-r from-cyan-400 to-sky-500",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking mobile application with workout plans and nutrition tracking.",
      category: "ui",
      image: "bg-gradient-to-r from-red-400 to-rose-500",
      tags: ["Figma", "Prototyping", "UI Design"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'app', label: 'App' },
    { value: 'ui', label: 'UI/UX' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my recent work across web development, application design, and UI/UX projects.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === filter.value
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.demoLink}
                    className="text-primary hover:text-primary-foreground hover:bg-primary rounded-full p-2 transition-colors inline-flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  
                  <a 
                    href={project.codeLink}
                    className="text-gray-700 hover:text-primary rounded-full p-2 transition-colors inline-flex items-center gap-1 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
