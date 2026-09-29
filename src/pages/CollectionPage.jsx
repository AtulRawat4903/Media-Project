import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import { gridClass } from "../components/ResultGrid";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
      {collection.length > 0 ? (
        <>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight">
                Your collection
              </h1>
              <p className="mt-1 text-slate-400">
                {collection.length} saved{" "}
                {collection.length === 1 ? "item" : "items"}
              </p>
            </div>
            <button
              onClick={() => dispatch(clearCollection())}
              className="cursor-pointer rounded-full border border-red-400/50 px-5 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500 hover:text-white active:scale-95"
            >
              Clear all
            </button>
          </div>
          <div className={gridClass}>
            {collection.map((item) => (
              <CollectionCard key={`${item.type}-${item.id}`} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="py-24 text-center">
          <h1 className="mb-3 font-display text-4xl font-extrabold">
            Nothing saved yet
          </h1>
          <p className="mb-8 text-slate-400">
            Save photos, videos and GIFs from your search results and they'll
            show up here.
          </p>
          <Link
            to="/"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110"
          >
            Start searching
          </Link>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
