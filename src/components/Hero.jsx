import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            VISHNUNATH C V
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 font-light mb-6 animate-slide-up">
            Frontend Developer
          </p>
        </div>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delayed">
          Building clean, scalable, and optimized web applications with modern technologies.
          Specialized in HTML, CSS, JavaScript and creating exceptional user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up-delayed-2">
          <a
            href="mailto:vishnunathcv004@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/MynmVishnunath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vishnunath-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full hover:scale-105 transition-all duration-300"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 animate-fade-in-slow">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Malappuram, Kerala</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>7306976431</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
