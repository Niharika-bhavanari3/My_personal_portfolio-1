
const About = () => {
  const skills = [
    'Communication', 'Leadership', 'Time Management', 'Problem Solving',
    'Team Collaboration', 'Critical Thinking', 'Adaptability', 'Creativity'
  ];

  const languages = ['Telugu', 'English', 'Hindi'];

  const certifications = [
    { name: 'NPTEL Certification', issuer: 'NPTEL', year: '2023' },
    { name: 'AICTE Internship', issuer: 'AICTE', year: '2023' },
    { name: 'Web Development', issuer: 'EDX', year: '2022' },
    { name: 'Programming Fundamentals', issuer: 'Infosys SpringBoard', year: '2022' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="ABOUT_ME">
          <span className="text-cyan-400">&lt;</span>ABOUT_ME<span className="text-pink-400">/&gt;</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A passionate and hardworking software developer with a futuristic vision for technology. 
                I believe in building solutions that make a difference, combining clean code with bold ideas 
                to create impactful applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a natural team leader, I've served as Class Representative for 2 years and actively 
                contribute to NGO initiatives. I thrive in collaborative environments and enjoy mentoring 
                others while continuously learning new technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech is driven by curiosity and a desire to solve real-world problems 
                through innovative solutions. I'm always excited to take on new challenges and push 
                the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="skill-badge"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <span key={lang} className="language-badge">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-400">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="certification-card"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center">
                  <h4 className="font-bold text-cyan-400 mb-2">{cert.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-pink-400 font-mono text-xs">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
