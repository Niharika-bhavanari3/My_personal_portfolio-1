
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = ['Web Development', 'AI & ML', 'Internships', 'Leadership', 'Tech Trends'];
  
  const posts = [
    {
      title: 'Building Scalable Web Applications with Node.js',
      excerpt: 'Exploring advanced techniques for creating robust and scalable web applications using Node.js and modern development practices.',
      category: 'Web Development',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'My Journey Through AICTE Internship Program',
      excerpt: 'Insights and experiences from participating in the AICTE internship program, including key learnings and practical applications.',
      category: 'Internships',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'Leadership Lessons from Being a Class Representative',
      excerpt: 'Two years of leadership experience as CR taught me valuable lessons about team management, communication, and responsibility.',
      category: 'Leadership',
      date: '2024-01-05',
      readTime: '5 min read',
      featured: false
    },
    {
      title: 'The Future of AI in College Management Systems',
      excerpt: 'How artificial intelligence is revolutionizing educational administration and student services in modern colleges.',
      category: 'AI & ML',
      date: '2023-12-28',
      readTime: '7 min read',
      featured: true
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glitch-text" data-text="BLOG">
          <span className="text-cyan-400">&lt;</span>BLOG<span className="text-pink-400">/&gt;</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button key={category} className="category-button">
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {posts.filter(post => post.featured).map((post, index) => (
            <article key={post.title} className="blog-card featured-post">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="category-tag">{post.category}</span>
                  <span className="featured-badge">Featured</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="read-more-btn">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.filter(post => !post.featured).map((post) => (
            <article key={post.title} className="blog-card">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="category-tag">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="cyber-card p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get notified about new blog posts and tech insights</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-black/50 border border-cyan-500/30 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button className="cyber-button-small">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
