
const TechStack = () => {
  const programmingLanguages = [
    { name: 'C', color: 'from-blue-400 to-blue-600' },
    { name: 'Python', color: 'from-yellow-400 to-green-500' },
    { name: 'R', color: 'from-blue-500 to-indigo-600' },
    { name: 'Java', color: 'from-orange-400 to-red-500' },
    { name: 'SQL', color: 'from-purple-400 to-pink-500' }
  ];

  const tools = [
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'Express', color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'HTML', color: 'from-orange-400 to-orange-600' },
    { name: 'CSS', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' }
  ];

  return (
    <section id="tech" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="TECH_STACK">
          <span className="text-cyan-400">&lt;</span>TECH_STACK<span className="text-pink-400">/&gt;</span>
        </h2>

        {/* Programming Languages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={lang.name}
                className="tech-badge"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-full h-full bg-gradient-to-br ${lang.color} rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {lang.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-pink-400">Tools & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="tech-badge"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-full h-full bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="cyber-card p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-gray-400">Programming Languages</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">6+</div>
            <div className="text-gray-400">Tools & Frameworks</div>
          </div>
          <div className="cyber-card p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
