export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>

        <circle cx="10%" cy="20%" r="300" fill="url(#grad1)" className="animate-float" />
        <circle cx="80%" cy="60%" r="250" fill="url(#grad2)" className="animate-float-delayed" />
        <circle cx="50%" cy="80%" r="200" fill="url(#grad3)" className="animate-float-slow" />

        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          className="animate-wave"
        />
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="2"
          className="animate-wave-delayed"
        />
      </svg>
    </div>
  );
}
