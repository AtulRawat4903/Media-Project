import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

export const gridClass =
  "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (s) => s.search,
  );

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "Photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "Videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab === "GIFs") {
          const response = await fetchGIFs(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (error)
    return (
      <p className="py-20 text-center text-slate-300">
        Couldn't load results ({error}). Check your API keys and connection,
        then search again.
      </p>
    );

  if (loading)
    return (
      <div className={gridClass}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="skeleton aspect-4/5 rounded-2xl" />
        ))}
      </div>
    );

  if (results.length === 0)
    return (
      <p className="py-20 text-center text-slate-300">
        No {activeTab.toLowerCase()} found for "{query}". Try a different
        keyword.
      </p>
    );

  return (
    <div className={gridClass}>
      {results.map((item) => (
        <ResultCard key={`${item.type}-${item.id}`} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
