import { GraduationCap } from 'lucide-react';
import MyImage from '../assets/profile3.png'

export default function About() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="blob-morph bg-gradient-to-r from-cyan-400/20 to-blue-400/30  w-[90%] md:w-120 h-80 ">
              <img className="w-[98%] h-[98%] object-cover filter brightness-[.8] hue-rotate-180 opacity-100 saturate-[1.2]" src={MyImage} alt="" /></div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Highly proficient Frontend Developer experienced in building clean, scalable, optimized and
              result-driven web applications with HTML, CSS and JavaScript.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I have advanced expertise in modern HTML, CSS (selectors, grid/flex layout, transforms, media/container queries,
              keyframes and pseudo-classes), and JavaScript (Promises, callbacks, closure, event handling,
              bitwise data manipulation and DOM).
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Familiar with various Browser APIs including Web Bluetooth API, Canvas API, Audio API and Google Maps API.
              Strong foundation in Data Structures and Computer Science.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Education</h3>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-white">Bachelor of Computer Application</p>
              <p className="text-slate-400">Calicut University</p>
              <p className="text-slate-400">Malappuram, Kerala</p>
              <p className="text-cyan-400 font-medium">March, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
