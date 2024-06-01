import { v4 as uuid } from "uuid";
import { useToastContext } from "../contexts/toast.context";

const useToast = () => {
  const { setToastList } = useToastContext();

  const addToast = (title = "title", desc = "desc", ms = 2000) => {
    const newToast = {
      id: uuid(),
      title,
      desc,
      ms,
      isDone: false,
    };
    setToastList((toastList) => [...toastList, newToast]);
  };

  return [addToast];
};

export default useToast;
