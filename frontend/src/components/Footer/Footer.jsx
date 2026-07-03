import {
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaShieldAlt className="text-white text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                Agree<span className="text-blue-500">Wise</span>
              </h2>

            </div>

            <p className="text-slate-400 leading-8">
              AI-powered agreement analyzer that helps you understand
              Terms & Conditions, Privacy Policies and User Agreements
              before clicking "I Agree".
            </p>

          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>

          {/* Tech Stack */}

          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Built With
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>⚛ React</li>
              <li>🎨 Tailwind CSS</li>
              <li>🟢 Node.js</li>
              <li>🚀 Express.js</li>
              <li>🤖 Gemini AI</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/Rohanmon80"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/rohan-mondal-a39698314"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 AgreeWise. All rights reserved.
          </p>

          <p className="text-slate-500 flex items-center gap-2 mt-4 md:mt-0">
            Built with <FaHeart className="text-red-500" /> by Rohan Mondal
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;