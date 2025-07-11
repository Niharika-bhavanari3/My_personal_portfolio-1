
const Experience = () => {
  const experiences = [
    {
      title: 'Class Representative',
      organization: 'College',
      duration: '2022 - 2024',
      description: 'Led a class of 60+ students, coordinated with faculty, organized events, and served as a bridge between students and administration.',
      icon: '👑',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'SAC Council Member',
      organization: 'Student Activity Council',
      duration: '2023 - Present',
      description: 'Active member of the Student Activity Council, contributing to college events, student welfare initiatives, and campus development.',
      icon: '🏛️',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Director - Swechha Project',
      organization: 'WAYCT NGO',
      duration: '2023 - Present',
      description: 'Leading social impact initiatives, coordinating community outreach programs, and driving positive change through technology solutions.',
      icon: '🌟',
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'ACM Event Volunteer',
      organization: 'ACM Student Chapter',
      duration: '2022 - 2023',
      description: 'Organized technical workshops, coding competitions, and tech talks. Helped create an engaging learning environment for fellow students.',
      icon: '💻',
      color: 'from-pink-400 to-red-500'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Leadership', color: 'text-cyan-400' },
    { number: '60+', label: 'Students Led', color: 'text-pink-400' },
    { number: '10+', label: 'Events Organized', color: 'text-green-400' },
    { number: '5+', label: 'NGO Projects', color: 'text-purple-400' }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="EXPERIENCE">
          <span className="text-cyan-400">&lt;</span>EXPERIENCE<span className="text-pink-400">/&gt;</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="cyber-card p-6 text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-400 to-green-400 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-400 transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="experience-card">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center text-2xl`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.organization}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="time-badge">{exp.duration}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-20 text-center">
          <div className="cyber-card p-8 max-w-2xl mx-auto">
            <div className="text-6xl text-cyan-400 mb-4">"</div>
            <p className="text-xl text-gray-300 mb-4 font-light italic">
              Leadership is not about being in charge. It's about taking care of those in your charge and empowering them to achieve their best.
            </p>
            <div className="text-pink-400 font-semibold">- My Leadership Philosophy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
