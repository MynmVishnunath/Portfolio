import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="mailto:vishnunathcv004@gmail.com"
            className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
            </div>
            <p className="text-slate-300">vishnunathcv004@gmail.com</p>
          </a>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
              </div>
            </div>
            <p className="text-slate-300">7306976431</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
            </div>
            <p className="text-slate-300">Malappuram, Kerala, PIN 679334</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/MynmVishnunath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnunath-cv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Vishnunath C V. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
