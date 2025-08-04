import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Writing from "./components/Writing";
import BlogPost from "./components/BlogPost"; // dynamic MDX loader
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "katex/dist/katex.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        <div className="max-w-4xl w-full mx-auto px-6 py-12 space-y-12 flex-grow">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<BlogPost />} />
          </Routes>
        </div>

        <footer className="w-full bg-black py-4 px-6">
          <div className="max-w-4xl mx-auto text-center flex justify-center space-x-6 text-gray-400">
            <a
              href="mailto:calebgetahun011@gmail.com"
              className="hover:text-white transition"
            >
              <MdEmail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/calebgetahun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/calebgetahun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
