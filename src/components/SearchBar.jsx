import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const current = useSelector((s) => s.search.query);
  const [text, setText] = useState(current);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text.trim()));
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex w-full max-w-2xl gap-2 rounded-full border border-line bg-panel p-2 focus-within:border-accent"
    >
      <svg
        className="ml-3 h-5 w-5 shrink-0 self-center text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        className="min-w-0 flex-1 bg-transparent px-2 py-2 text-lg outline-none placeholder:text-slate-500"
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search photos, videos and GIFs"
        aria-label="Search media"
        required
        value={text}
      />
      <button className="cursor-pointer rounded-full bg-accent px-6 py-2 font-semibold text-ink transition hover:brightness-110 active:scale-95">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
