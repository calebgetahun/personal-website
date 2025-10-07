import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex justify-between items-center max-w-4xl mx-auto py-4">
      <Link to="/" className="text-xl font-bold cursor-pointer text-white">
        Caleb Getahun
      </Link>

      <nav className="flex space-x-6 text-lg font-semibold">
        <Link
          to="/"
          className={
            isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
          }
        >
          Home
        </Link>
        <Link
          to="/writing"
          className={
            isActive("/writing")
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }
        >
          Writing
        </Link>
        <Link
          to="/projects"
          className={
            isActive("/projects")
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }
        >
          Projects
        </Link>
        <Link
          to="/quotes"
          className={
            isActive("/quotes")
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }
        >
          Quotes
        </Link>
      </nav>
    </header>
  );
}
