import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Tournament() {
  const { year } = useParams();

  /* ---------- 2025 : NO DATA ---------- */
  if (year === "2025") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-yellow-50 to-yellow-100"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-4">
          Tournament 2025
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-yellow-900">
          🚫 No Data Found
        </p>
      </motion.div>
    );
  }

  /* ---------- 2026 : PREMIUM CONTENT ---------- */
  if (year === "2026") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 py-16 px-4">

        {/* Floating graphic blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-5xl md:text-6xl font-extrabold text-yellow-800 mb-16"
        >
          NFCC Tournament 2026 - S1
        </motion.h1>

        {/* NOTES */}
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white/60 backdrop-blur-lg border border-yellow-300 rounded-2xl shadow-2xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
              📝 Notes
            </h2>

            <ul className="space-y-4 text-yellow-900 font-semibold text-lg">
              {/* <li>• Committee members will not play; we organize, manage & motivate.</li> */}
              <li>• Exciting gifts, trophies & rewards for all teams.</li>
              <li>• Professional photo sessions with Instagram posting.</li>
              <li>
                • Man of the Match, Most Runs, Most Wickets, Best Moments,
                Candid Pics & Drive link will be shared.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* RULES */}
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-lg border border-yellow-300 rounded-2xl shadow-2xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
              📜 Rules & Regulations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-900 font-semibold text-lg">
              {[
                "First over will be batting powerplay",
                "Bad words & drugs strictly prohibited",
                "Umpire decision is final",
                "Trousers strictly not allowed",
                "Minimum 5 bowlers mandatory",
                "Plastic & Lankan bats not allowed",
                "Only captains can speak to umpires",
                "Every no-ball is a free hit",
                "Chucking can be appeal by the batsman (umpire decision final)",
                "8 overs per innings, new ball each innings",
                "General cricket rules applicable",
              ].map((rule, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 shadow-md"
                >
                  {index + 1}. {rule}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FOOTER CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative z-10 mt-20 text-center"
        >
          <div className="inline-block bg-yellow-400 text-yellow-900 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:scale-110 transition">
            🏏 NFCC – Let’s Celebrate Cricket Together
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
