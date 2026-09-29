import { useDispatch, useSelector } from "react-redux";
import { addCollection, addToast } from "../redux/features/collectionSlice";
import MediaCard from "./MediaCard";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const saved = useSelector((s) =>
    s.collection.items.some((i) => i.id === item.id),
  );

  const save = () => {
    if (saved) return;
    dispatch(addCollection(item));
    dispatch(addToast());
  };

  return (
    <MediaCard
      item={item}
      actionLabel={saved ? "Saved" : "Save"}
      onAction={save}
    />
  );
};

export default ResultCard;
