import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Karuta Quiz',
    description: 'A Quiz playing platform designed to help learners remember topics effectively with swipeable flashcards.',
    features: [
      'Converted into PWA with Manifest and Service Worker',
      'Integrated Swiper.js for AI-generated quizzes',
      'IndexedDB integration for offline functionality',
      'Custom API for swipeable elements',
      'Deployed on Vercel',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA', 'IndexedDB'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'My Diary',
    description: 'A simple, distraction-free journal platform that keeps user diaries secure on the server.',
    features: [
      'Node.js backend for serving and storing diaries',
      'Frontend-backend connection with Fetch API',
      'Single page rendering with template literals',
      'Protection from unauthorized access',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    gradient: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Netflix Clone',
    description: 'A responsive clone of the Netflix platform with real movie data integration.',
    features: [
      'TMDB API integration for movie data',
      'Fully responsive design',
      'Modern CSS layouts',
      'Deployed on Vercel',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'TMDB API'],
    gradient: 'from-emerald-500 to-blue-500',
  },
];

const miniProjects = [
  {
    title: 'Tidy Path',
    description: 'A collision-free pathfinding algorithm implementation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Grid Calculator',
    description: 'A stylish calculator built using CSS Grid layout and gradients.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Analogue Clock',
    description: 'A stylish analog clock with SVG interface and dynamic time tracking.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SVG'],
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                    <Github size={20} />
                  </button>
                  <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <p className="text-slate-300 text-lg mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-slate-700 rounded-full text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">Mini Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
