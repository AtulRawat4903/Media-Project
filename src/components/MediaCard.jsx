import { useRef } from "react";

const MediaCard = ({ item, actionLabel, onAction, variant = "primary" }) => {
  const videoRef = useRef(null);
  const preview = item.thumbnail || item.src;

  const btn =
    variant === "danger"
      ? "bg-white/15 text-white hover:bg-red-500"
      : "bg-accent text-ink hover:brightness-110";

  return (
    <article
      className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-line bg-panel"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={item.url}
        className="block h-full w-full"
        aria-label={item.title}
      >
        {item.type === "video" ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster={item.thumbnail}
            src={item.src}
            preload="none"
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={preview}
            alt={item.title || ""}
            loading="lazy"
          />
        )}
      </a>

      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium capitalize backdrop-blur">
        {item.type}
      </span>

      <div className="shade pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
        <h2 className="line-clamp-2 text-sm font-semibold capitalize">
          {item.title}
        </h2>
        <button
          onClick={onAction}
          className={`pointer-events-auto shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-sm font-semibold transition active:scale-95 ${btn}`}
        >
          {actionLabel}
        </button>
      </div>
    </article>
  );
};

export default MediaCard;
