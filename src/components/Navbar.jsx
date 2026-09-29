import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((s) => s.collection.items.length);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition active:scale-95 focus-visible:outline-2 focus-visible:outline-accent ${
      isActive ? "bg-white text-ink" : "text-slate-300 hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link
          to="/"
          className="font-display text-2xl font-extrabold tracking-tight"
        >
          Media<span className="text-accent">Search</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Search
          </NavLink>
          <NavLink to="/collection" className={linkClass}>
            Collection
            {count > 0 && (
              <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-ink">
                {count}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
