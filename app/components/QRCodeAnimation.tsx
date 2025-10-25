'use client';

import { motion } from 'framer-motion';

export default function QRCodeAnimation() {
  // Generate a realistic QR code pattern
  const qrPattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1],
    [0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0],
    [1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1],
    [0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1],
    [1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0],
    [1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0],
    [1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1],
  ];

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Main QR Code Container */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full h-full"
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(217, 70, 239, 0.4) 0%, rgba(249, 115, 22, 0.2) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Glass morphism card */}
        <div className="glass-card w-full h-full p-8 relative z-10 shadow-2xl">
          {/* White QR code background */}
          <div className="relative w-full h-full bg-white rounded-xl p-4 shadow-inner">
            {/* Actual QR Code Pattern */}
            <div className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(21, 1fr)` }}>
              {qrPattern.flat().map((cell, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[1px]"
                  style={{
                    backgroundColor: cell ? '#0f172a' : 'transparent',
                    opacity: cell,
                  }}
                />
              ))}
            </div>

            {/* Position Detection Patterns (corners) */}
            {[
              { top: '16px', left: '16px' },
              { top: '16px', right: '16px' },
              { bottom: '16px', left: '16px' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 border-[3px] border-[#0f172a] rounded-md"
                style={pos}
              >
                <div className="absolute inset-[6px] border-[2px] border-[#0f172a] rounded-sm">
                  <div className="absolute inset-[4px] bg-[#0f172a] rounded-[1px]" />
                </div>
              </div>
            ))}
          </div>

          {/* Scan instruction text below QR */}
          <div className="absolute -bottom-6 left-0 right-0 text-center">
            <p className="text-sm text-gray-300 font-medium">Scan to preview menu</p>
          </div>
        </div>

        {/* Corner brackets decoration */}
        {[
          { top: -4, left: -4, rotation: 0 },
          { top: -4, right: -4, rotation: 90 },
          { bottom: -4, left: -4, rotation: 270 },
          { bottom: -4, right: -4, rotation: 180 },
        ].map((corner, i) => (
          <div
            key={i}
            className="absolute w-8 h-8"
            style={{
              ...corner,
              transform: `rotate(${corner.rotation}deg)`,
            }}
          >
            <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
            <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
          </div>
        ))}
      </motion.div>

      
    </div>
  );
}
