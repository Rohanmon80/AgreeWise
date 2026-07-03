import { FaShieldAlt, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <nav className="max-w-7xl mx-auto">
        <div
          className={`
            flex items-center justify-between
            rounded-2xl
            border
            backdrop-blur-xl
            px-8 py-4
            shadow-[0_8px_40px_rgba(59,130,246,0.15)]
            transition-all duration-300

            ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200 shadow-lg"
            }
          `}
        >
          {/* Logo */}

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40">
              <FaShieldAlt className="text-white text-xl" />
            </div>

            <h1 className="text-3xl font-bold">
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                Agree
              </span>

              <span className="text-blue-500">Wise</span>
            </h1>
          </div>

          {/* Menu */}

          <div
  className={`hidden md:flex items-center gap-10 ${
    darkMode ? "text-slate-300" : "text-slate-700"
  }`}
>
  <a href="#features" className="hover:text-blue-500 transition">
    Features
  </a>

  <a href="#how-it-works" className="hover:text-blue-500 transition">
    How It Works
  </a>

  <a href="#about" className="hover:text-blue-500 transition">
    About
  </a>

  <a href="#faq" className="hover:text-blue-500 transition">
    FAQ
  </a>
</div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            {/* Theme Toggle */}

            <button
              onClick={toggleTheme}
              className={`
                w-11 h-11
                rounded-xl
                border
                flex items-center justify-center
                transition-all duration-300

                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }
              `}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-slate-700" />
              )}
            </button>

            

            <button
            
  onClick={() =>
    document
      .getElementById("agreement-section")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  className="
    px-6 py-3
    rounded-xl
    font-semibold
    text-white
    bg-gradient-to-r
    from-blue-600
    to-indigo-600
    hover:scale-105
    transition-all
    shadow-lg
    shadow-blue-600/30
  "
>
  Analyze Now →
</button>
  

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;