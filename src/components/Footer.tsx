
const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const techStack = ['React', 'Node.js', 'MongoDB', 'Python', 'Java'];

  return (
    <footer className="bg-black border-t border-cyan-500/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-mono font-bold">
              <span className="text-cyan-400">&lt;</span>
              <span className="glitch-text" data-text="NIHARIKA">NIHARIKA</span>
              <span className="text-pink-400">/&gt;</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building the future with clean code and innovative solutions. 
              Passionate about technology, leadership, and making a positive impact.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="social-icon-footer hover:text-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon-footer hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="tech-tag-small">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Currently Available For:</p>
              <ul className="text-sm space-y-1">
                <li className="text-cyan-400">• Frontend Development</li>
                <li className="text-pink-400">• Backend Development</li>
                <li className="text-green-400">• Full-Stack Projects</li>
                <li className="text-purple-400">• Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-mono">
              Designed with futuristic vision by{' '}
              <span className="text-cyan-400 font-bold">Niharika Bhavanari</span> 💻
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm font-mono">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs font-mono">
            <span className="text-cyan-400">&gt;</span> 
            Built with React, TypeScript & lots of ☕
            <span className="text-pink-400"> &lt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
