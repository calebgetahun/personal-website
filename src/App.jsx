import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Writing from "./components/Writing";
import BlogPost from "./components/BlogPost";
import Projects from "./components/Projects";
import Quotes from "./components/Quotes";
import NotFound from "./components/NotFound";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "katex/dist/katex.min.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* Skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        <div className="max-w-4xl w-full mx-auto px-6 py-12 space-y-12 flex-grow">
          <Header />

          {/* Main landmark for accessibility */}
          <main id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/writing/:slug" element={<BlogPost />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        <footer className="w-full bg-black px-6 pb-10">
          {/* Socials */}
          <div className="max-w-4xl mx-auto pt-6 text-center flex justify-center space-x-6 text-gray-400">
            <a
              href="mailto:calebgetahun011@gmail.com"
              className="hover:text-white transition"
              aria-label="Email Caleb"
              title="Email"
            >
              <MdEmail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/calebgetahun"
              target="_blank"
              rel="noopener noreferrer me"
              className="hover:text-white transition"
              aria-label="Caleb on GitHub"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/calebgetahun"
              target="_blank"
              rel="noopener noreferrer me"
              className="hover:text-white transition"
              aria-label="Caleb on LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          <hr className="mt-6 mb-4 border-white/10 w-12 mx-auto" />

          <p className="max-w-4xl mx-auto text-center text-sm text-gray-400 italic">
            “Simplicity is the final achievement.” — Frédéric Chopin
          </p>

          {/* Tiny copyright (optional) */}
          <p className="mt-2 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Caleb Getahun
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
