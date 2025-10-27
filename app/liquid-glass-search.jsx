import { useState } from 'react';
import { GlassCard } from '@developer-hub/liquid-glass';

export default function LiquidGlassSearch() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
    // Add your search logic here
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50 z-10" />
        
        {/* Background Image 1 - Main */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')",
            filter: 'blur(2px)'
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl">
          {/* Title */}
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-4 drop-shadow-2xl">
            Liquid Glass Search
          </h1>
          <p className="text-white/80 text-center mb-12 text-lg">
            Experience the future of UI with Apple-inspired glass effects
          </p>

          {/* Search Bar with Liquid Glass Effect */}
          <GlassCard
            displacementScale={100}
            blurAmount={0.015}
            cornerRadius={24}
            className="p-2"
          >
            <form onSubmit={handleSearch} className="flex items-center gap-3">
              {/* Search Icon */}
              <div className="pl-4">
                <svg
                  className="w-6 h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Input Field */}
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search for anything..."
                className="flex-1 bg-transparent text-white text-lg placeholder-white/50 outline-none py-4"
              />

              {/* Search Button */}
              <GlassCard
                displacementScale={80}
                blurAmount={0.01}
                cornerRadius={16}
                padding="12px 24px"
                onClick={handleSearch}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <span className="text-white font-medium">Search</span>
              </GlassCard>
            </form>
          </GlassCard>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Trending', 'Technology', 'Design', 'Innovation'].map((tag) => (
              <GlassCard
                key={tag}
                displacementScale={60}
                blurAmount={0.01}
                cornerRadius={20}
                padding="8px 20px"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSearchValue(tag)}
              >
                <span className="text-white/90 text-sm font-medium">{tag}</span>
              </GlassCard>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌊',
                title: 'Liquid Animation',
                desc: 'Organic SVG-powered effects'
              },
              {
                icon: '🖱️',
                title: 'Mouse Responsive',
                desc: 'Interactive cursor tracking'
              },
              {
                icon: '⚡',
                title: 'GPU Accelerated',
                desc: 'Smooth 60fps performance'
              }
            ].map((feature) => (
              <GlassCard
                key={feature.title}
                shadowMode={true}
                cornerRadius={20}
                className="p-6 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
