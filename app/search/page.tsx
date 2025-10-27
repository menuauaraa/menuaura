"use client"

import { useState } from 'react';
import { GlassCard } from '@developer-hub/liquid-glass';
import Link from 'next/link';

export default function LiquidGlassSearch() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
    // Add your search logic here
  };

  return (
    <div className="min-h-screen w-full relative overflow-y-auto overflow-x-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Real Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/60 to-pink-900/60 z-10" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 z-30 text-white/80 hover:text-white transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      {/* Main Content */}
      <div className="relative z-20 px-4 py-20">
        <div className="w-full max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-4 drop-shadow-2xl">
            MenuAura Search
          </h1>
          <p className="text-white/80 text-center mb-12 text-lg">
            Find restaurants, menus, and dishes with our advanced search
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
                placeholder="Search for restaurants, menus, dishes..."
                className="flex-1 bg-transparent text-white text-lg placeholder-white/50 outline-none py-4"
              />

              {/* Search Button */}
              <button
                type="submit"
                className="mr-2"
              >
                <GlassCard
                  displacementScale={80}
                  blurAmount={0.01}
                  cornerRadius={16}
                  padding="12px 24px"
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  <span className="text-white font-medium">Search</span>
                </GlassCard>
              </button>
            </form>
          </GlassCard>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Popular', 'Italian', 'Japanese', 'Vegetarian'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchValue(tag)}
                type="button"
              >
                <GlassCard
                  displacementScale={60}
                  blurAmount={0.01}
                  cornerRadius={20}
                  padding="8px 20px"
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  <span className="text-white/90 text-sm font-medium">{tag}</span>
                </GlassCard>
              </button>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🍽️',
                title: 'Digital Menus',
                desc: 'Browse interactive menus'
              },
              {
                icon: '📱',
                title: 'QR Scan',
                desc: 'Instant menu access'
              },
              {
                icon: '⚡',
                title: 'Real-Time',
                desc: 'Always up-to-date'
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

          {/* Additional Content for Scrolling */}
          <div className="mt-16 space-y-6">
            <h2 className="text-white text-3xl font-bold text-center mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Italian', 'Japanese', 'Mexican', 'Chinese', 'Indian', 'Thai', 'French', 'Greek'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSearchValue(category)}
                  type="button"
                >
                  <GlassCard
                    displacementScale={60}
                    blurAmount={0.01}
                    cornerRadius={16}
                    padding="16px"
                    className="cursor-pointer hover:scale-105 transition-transform w-full"
                  >
                    <span className="text-white font-medium">{category}</span>
                  </GlassCard>
                </button>
              ))}
            </div>
          </div>

          {/* Search Results Section */}
          <div className="mt-16 space-y-6">
            <h2 className="text-white text-3xl font-bold text-center mb-8">Trending Now</h2>
            <div className="space-y-4">
              {[
                { name: 'Margherita Pizza', restaurant: 'Bella Italia', rating: '4.8' },
                { name: 'Sushi Platter', restaurant: 'Tokyo Bay', rating: '4.9' },
                { name: 'Chicken Tikka', restaurant: 'Spice Garden', rating: '4.7' },
                { name: 'Pad Thai', restaurant: 'Bangkok Street', rating: '4.6' },
              ].map((item) => (
                <GlassCard
                  key={item.name}
                  shadowMode={true}
                  cornerRadius={16}
                  className="p-6 hover:scale-102 transition-transform cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                      <p className="text-white/70 text-sm">{item.restaurant}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold text-lg">⭐ {item.rating}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
