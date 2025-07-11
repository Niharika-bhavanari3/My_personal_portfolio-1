
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduSeater',
      subtitle: 'AI-based College Exam Seating Generator',
      description: 'Advanced seating arrangement system using Node.js and MongoDB with rule-based logic for optimal seat allocation. Features live seat mapping visualization and CSV export functionality.',
      tech: ['Node.js', 'MongoDB', 'Express', 'AI Logic'],
      status: 'Completed',
      github: '#',
      demo: '#',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'College Website',
      subtitle: 'Student-Friendly Information Portal',
      description: 'Clean and intuitive college website designed for easy navigation and information access. Features responsive design and modern UI/UX principles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      status: 'Completed',
      github: '#',
      demo: '#',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'TalentFarm (Legal Buddy)',
      subtitle: 'Legal Technology Platform',
      description: 'Currently developing an innovative legal technology solution to streamline legal processes and provide accessible legal assistance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Legal Tech'],
      status: 'In Progress',
      github: '#',
      demo: '#',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const achievements = [
    'Gen AI Hackathon Participant',
    'AICTE Internship Program',
    'Multiple Project Completions',
    'Full-Stack Development'
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="PROJECTS">
          <span className="text-cyan-400">&lt;</span>PROJECTS<span className="text-pink-400">/&gt;</span>
        </h2>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <span className={`status-badge ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-xl text-gray-300 mb-4">{project.subtitle}</h4>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="project-link">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-link">
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 flex items-center justify-center">
                <div className={`w-full h-64 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl`}>
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-400">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement}
                className="achievement-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="font-semibold text-cyan-400">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
