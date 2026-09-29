import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";
import MediaCard from "./MediaCard";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <MediaCard
      item={item}
      actionLabel="Remove"
      variant="danger"
      onAction={remove}
    />
  );
};

export default CollectionCard;
