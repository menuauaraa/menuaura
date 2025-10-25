'use client';

import { motion } from 'framer-motion';
import { FaQrcode, FaMobileAlt, FaStar, FaPalette, FaGlobe, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: FaQrcode,
    title: 'Smart QR Menus',
    description: 'Generate beautiful, scannable QR codes for instant menu access',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile-First Design',
    description: 'Optimized for seamless viewing on any device',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaStar,
    title: 'Google Reviews Integration',
    description: 'Can add the google reviews to your menu page',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaPalette,
    title: 'Customizable Themes',
    description: 'Match your brand with beautiful, customizable designs',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: FaGlobe,
    title: 'Online Publishing',
    description: 'Publish your menu online ',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FaBolt,
    title: 'Instant Updates',
    description: 'Update your menu in real-time, no reprinting needed',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-card group cursor-pointer relative overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          {/* Icon container */}
          <div className="relative">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 mb-4 shadow-lg`}
            >
              <feature.icon className="w-full h-full text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} blur-2xl opacity-30`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
