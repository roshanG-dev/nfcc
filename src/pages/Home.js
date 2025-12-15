import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-yellow-50 via-nfccYellow-light to-yellow-100 overflow-hidden">
      
      {/* Animated background circles */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow"></div>

      <div className="flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
        
        {/* Team Name Animation */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          className="text-6xl md:text-7xl font-extrabold text-yellow-700 drop-shadow-lg mb-4"
        >
          NFCC
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="text-xl md:text-2xl max-w-3xl leading-relaxed font-semibold text-yellow-800 mb-10"
        >
          Proudly representing <strong>Coimbatore, Tamil Nadu</strong> in Tennis Ball Cricket. 
          Passion. Skill. Teamwork. Legacy.
        </motion.p>

        {/* Call to action */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-nfccYellow px-8 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg hover:bg-yellow-600 transition cursor-pointer mb-16"
        >
          Join Our Journey
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">🏆 Achievements</h3>
            <p className="text-yellow-900">Winner of multiple local tennis ball tournaments in Coimbatore.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">🤝 Team Spirit</h3>
            <p className="text-yellow-900">NFCC stands for teamwork, dedication, and sportsmanship on and off the field.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-200 rounded-xl p-6 shadow-lg border border-yellow-300"
          >
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">⚡ Training</h3>
            <p className="text-yellow-900">Regular practice sessions to sharpen skills, strategies, and game awareness.</p>
          </motion.div>
        </div>

        {/* Upcoming Matches */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-20 w-full max-w-4xl text-left"
        >
          <h2 className="text-4xl font-extrabold text-yellow-700 mb-6">Upcoming Matches</h2>
          <ul className="space-y-4 text-yellow-900 font-semibold">
            <li>📅 15 Dec 2025 – NFCC vs Coimbatore Titans</li>
            <li>📅 22 Dec 2025 – NFCC vs Chennai Chargers</li>
            <li>📅 29 Dec 2025 – NFCC vs Madurai Mavericks</li>
          </ul>
        </motion.div>

        {/* Contact Info Banner */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="mt-20 bg-yellow-100 px-6 py-6 rounded-xl shadow-lg border border-yellow-300 text-yellow-900 max-w-2xl"
        >
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <p>📞 Phone: 9342514580</p>
          <p>📧 Email: nfcc@gmail.com</p>
        </motion.div>

      </div>
    </div>
  );
}
