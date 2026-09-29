import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <section
        className={`text-center ${query ? "pb-8 pt-10" : "pb-10 pt-24 sm:pt-32"}`}
      >
        {!query && (
          <>
            <h1 className="mb-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
              Find the right picture, clip or GIF.
            </h1>
            <p className="mx-auto mb-10 max-w-md text-slate-400">
              Search three libraries at once, then save your favorites to a
              collection.
            </p>
          </>
        )}
        <SearchBar />
      </section>

      {query && (
        <>
          <div className="mb-8">
            <Tabs />
          </div>
          <div className="pb-16">
            <ResultGrid />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
