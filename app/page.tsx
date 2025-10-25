'use client';

import { motion } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
import CountdownTimer from './components/CountdownTimer';
import EmailSubscription from './components/EmailSubscription';
import QRCodeAnimation from './components/QRCodeAnimation';
import FeatureCards from './components/FeatureCards';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Animated Background */}
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Logo/Brand */}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="text-6xl md:text-8xl font-bold mb-4"
            >
              <span className="text-gradient">MenuAura</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-2"
            >
              Transform Your Menu Experience
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto"
            >
              The future of digital dining is here. Create stunning, interactive menus with QR codes.
            </motion.p>
          </motion.div>

          {/* QR Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <QRCodeAnimation />
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
              Launching In
            </h2>
            <CountdownTimer />
          </motion.div>

          {/* Email Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full max-w-2xl px-4 mb-12"
          >
            <EmailSubscription />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 text-sm flex flex-col items-center gap-2"
            >
              
              
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Why MenuAura?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to create, manage, and share beautiful digital menus
            </p>
          </motion.div>

          <FeatureCards />
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Perfect for Every Business</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {['Restaurants', 'Cafes', 'Bars', 'Hotels', 'Food Trucks', 'Bakeries', 'Catering', 'Ice cream Bars'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <p className="font-semibold text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Menu?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Join the waitlist and be among the first to experience the future of digital dining.
              </p>
              <EmailSubscription />
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gradient mb-2">MenuAura</h3>
                <p className="text-gray-400 text-sm">Digital Menu Revolution</p>
              </div>

              <div className="flex gap-6">
                {[
                  { Icon: FaTwitter, href: '#' },
                  { Icon: FaFacebook, href: '#' },
                  { Icon: FaInstagram, href: '#' },
                  { Icon: FaLinkedin, href: '#' },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
              <p>&copy; 2025 MenuAura. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
