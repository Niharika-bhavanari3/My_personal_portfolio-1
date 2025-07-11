
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'niharikabavanari@gmail.com',
      href: 'mailto:niharikabavanari@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9000601266',
      href: 'tel:+919000601266',
      color: 'text-pink-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'text-green-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: FileText,
      label: 'Resume',
      href: '#',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="CONTACT">
          <span className="text-cyan-400">&lt;</span>CONTACT<span className="text-pink-400">/&gt;</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card p-8">
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to collaborate on exciting projects or discuss opportunities? 
                I'm always open to connecting with fellow developers, potential employers, 
                and anyone interested in technology and innovation.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-black/30 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <info.icon className={`w-6 h-6 ${info.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-pink-400">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 rounded-lg bg-black/30 border border-gray-700 hover:border-cyan-400 transition-all duration-300 ${social.color} group`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8">
            <h3 className="text-3xl font-bold mb-8 text-pink-400">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact-input resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="cyber-button w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-16 text-center">
          <div className="cyber-card p-6 max-w-md mx-auto">
            <div className="text-4xl mb-4">⚡</div>
            <p className="text-gray-300">
              <span className="text-cyan-400 font-bold">Fun Fact:</span> I respond to emails faster than 
              my code compiles!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
