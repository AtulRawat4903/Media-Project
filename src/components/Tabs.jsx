import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const tabs = ["Photos", "Videos", "GIFs"];

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div
      role="tablist"
      className="mx-auto flex w-fit gap-1 rounded-full border border-line bg-panel p-1"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          onClick={() => dispatch(setActiveTab(tab))}
          className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition active:scale-95 ${
            activeTab === tab
              ? "bg-white text-ink"
              : "text-slate-300 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
