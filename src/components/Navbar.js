import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-nfccYellow shadow-xl px-6 py-4 flex justify-between items-center sticky top-0 z-50">

      <h1 className="text-3xl font-extrabold tracking-widest">NFCC</h1>

      <div className="flex gap-6 text-lg font-semibold">

        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-white transition"
          >
            Tournament ▾
          </button>

          {dropdownOpen && (
            <div className="absolute bg-yellow-200 shadow-lg rounded-md mt-2 p-2 w-32">

              <Link
                to="/tournament/2025"
                className="block px-2 py-1 hover:bg-yellow-300 rounded"
                onClick={() => setDropdownOpen(false)}
              >
                2025
              </Link>

              <Link
                to="/tournament/2026"
                className="block px-2 py-1 hover:bg-yellow-300 rounded"
                onClick={() => setDropdownOpen(false)}
              >
                2026
              </Link>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
