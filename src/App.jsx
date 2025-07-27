import React, { useState, useEffect } from 'react';
import SpaceAIGlowBackground from './SpaceAIGlowBackground';

// ICONS from lucide-react - no need to install, we'll use SVG paths directly
// This is a common practice to avoid external dependencies in sandboxed environments.
const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Researchgate = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>ResearchGate icon</title>
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
  </svg>
);

const Menu = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

// NEW: X icon for the mobile menu close button
const X = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// Mock Data - Replace with your own
const portfolioData = {
  name: "Mohammad Aljabali",
  title: "🤖 AI & Deep Learning 📱 Flutter Mobile Developer",
  about: {
    description: "Enthusiastic fresh graduated with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Mobile Application Development using (Flutter) framework. Skilled at designing and deploying AI-driven solutions in user-centric mobile apps. Passionate about harnessing emerging technologies to address complex real-world challenges in various fields.",
    imageUrl: "https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interests: ["Deep Learning", "Machine Learning", "Computer Vision", "Mobile Development"]
  },
  projects: [
    {
      title: "Skin Disease Classification using ViT",
      description: "An end-to-end methodology was developed for classifying six types of skin diseases, yielding a 92% accuracy rate. The core of the solution is the application of Vision Transformers (ViT), which provides powerful feature extraction and classification throughout the entire workflow from data preparation to deployment.",
      mediaType: "video",
      videoUrl: "/Video_Ready_No_Skin_Pics.mp4", // Path from the public folder
      githubUrl: "https://github.com/aljabali89m/Skin-Lesions-Detection-flutter-app",
      tags: ["Deep Learning", "Computer Vision", "Vision Transformers", "Mobile Development"]
    }
  ],
  publications: [
      {
      title: "Publishing A research paper \"A Vision Transformer-Based Framework for Multi- Class Skin Lesions\"",
      description: "I have co-authored a research paper titled, \"A Vision Transformer-Based Framework for Multi-Class Skin Lesions\". This work documents our novel approach to dermatological image analysis. The full manuscript is currently available on ResearchGate for viewing and discussion.",
      mediaType: "image",
      imageUrl: "https://images.seeklogo.com/logo-png/38/1/researchgate-logo-png_seeklogo-380355.png",
      researchGateUrl: "https://www.researchgate.net/publication/392896407",
      tags: []
    }
  ],
  skills: {
    languages: ["Python","Dart","HTML5","CSS3","JavaScript"],
    frameworks: ["TensorFlow","PyTorch","Flask","Open-CV","Scikit-Learn","Matplotlib"],
    tools: ["Git & GitHub","Jupyter Lab"]
  },
  contact: {
    email: "aljabali89m@gmail.com",
    github: "https://github.com/aljabali89m",
    linkedin: "https://linkedin.com/in/aljabali89m",
    researchgate: "https://www.researchgate.net/profile/Mohammad-Aljabali"
  }
};


// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll functionality
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Effect to track which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Navigation Links Component
  const NavLinks = ({ className }) => (
    <ul className={className}>
      {['home', 'about', 'projects', 'publications', 'skills', 'contact'].map((item) => (
        <li key={item}>
          <button
            onClick={() => scrollToSection(item)}
            className={`capitalize font-medium transition-colors duration-300 ${activeSection === item ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <SpaceAIGlowBackground />
      <div
        className="text-gray-800 dark:text-gray-200 font-sans leading-normal tracking-tight"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              {portfolioData.name}
            </a>
            <nav className="hidden md:flex">
              <NavLinks className="flex space-x-8" />
            </nav>
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 py-4">
              <NavLinks className="flex flex-col items-center space-y-4" />
            </div>
          )}
        </header>

        <main className="container mx-auto px-6 pt-24">
          {/* Hero Section */}
          <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-500">{portfolioData.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                {portfolioData.title}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  View My Work
                </button>
                  <a
  href="/Mohammad_Aljabali_CV_.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
>
  My Resume
</a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 md:py-32">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <img
                    src={portfolioData.about.imageUrl}
                    alt="A picture of Mohammad Aljabali"
                    className="rounded-lg shadow-2xl w-full h-auto"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-blue-500 p-3 sm:p-4 rounded-full shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-justify">
                    {portfolioData.about.description}
                  </p>
                  <h3 className="text-xl font-semibold mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {portfolioData.about.interests.map(interest => (
                      <span key={interest} className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 md:py-32">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 gap-12">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col md:flex-row">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 z-10">
                            <Github className="w-6 h-6" />
                        </a>
                    )}
                  {/* Left: Media Container (Video or Image) */}
                  <div className="w-full md:w-1/3 flex-shrink-0 bg-white">
                    {project.mediaType === 'video' ? (
                        <video 
                            className="w-full h-56 md:h-full object-cover"
                            src={project.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-56 md:h-full object-cover" 
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Project+Image'; }}
                        />
                    )}
                  </div>
                  {/* Right: Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Top section: Title and Description */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                    </div>
                    {/* Bottom section: Tags */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="py-20 md:py-32">
            <h2 className="text-3xl font-bold text-center mb-12">My Publications</h2>
            <div className="grid grid-cols-1 gap-12">
              {portfolioData.publications.map((pub, index) => (
                <div key={index} className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col md:flex-row">
                   {pub.researchGateUrl && (
                      <a href={pub.researchGateUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 z-10">
                          <Researchgate className="w-6 h-6" />
                      </a>
                  )}
                  {/* Left: Media Container */}
                  <div className="w-full md:w-1/3 flex-shrink-0 bg-white">
                    <img 
                      src={pub.imageUrl} 
                      alt={pub.title} 
                      className="w-full h-56 md:h-full object-cover" 
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x300/e2e8f0/4a5568?text=Publication+Image'; }}
                    />
                  </div>
                  {/* Right: Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{pub.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2">
                  {portfolioData.skills.languages.map(skill => <li key={skill} className="text-gray-600 dark:text-gray-400">{skill}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
                <ul className="space-y-2">
                  {portfolioData.skills.frameworks.map(skill => <li key={skill} className="text-gray-600 dark:text-gray-400">{skill}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <ul className="space-y-2">
                  {portfolioData.skills.tools.map(skill => <li key={skill} className="text-gray-600 dark:text-gray-400">{skill}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-2xl font-semibold text-blue-600 dark:text-blue-500 hover:underline break-all">
                {portfolioData.contact.email}
              </a>
              <div className="flex justify-center space-x-6 mt-8">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"><Github className="w-8 h-8" /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"><Linkedin className="w-8 h-8" /></a>
                <a
                  href={portfolioData.contact.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  <Researchgate className="w-8 h-8" />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}