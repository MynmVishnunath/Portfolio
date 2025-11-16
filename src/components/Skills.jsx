import { Code2, Database, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Development',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'Python (basic)', 'Java', 'C'],
    gradient: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git'],
    gradient: 'from-emerald-500 to-blue-500',
  },
];

const browserAPIs = [
  'Web Bluetooth API',
  'Canvas API',
  'Audio API',
  'Google Maps API',
  'IndexedDB',
  'Service Workers',
];

export default function Skills() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.gradient} mb-6`}>
                <category.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-700 rounded-full text-sm text-slate-200 hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Database size={28} className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Browser APIs & Advanced Topics</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {browserAPIs.map((api, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg text-slate-200 hover:from-slate-600 hover:to-slate-700 transition-all duration-200 border border-slate-600"
              >
                {api}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
