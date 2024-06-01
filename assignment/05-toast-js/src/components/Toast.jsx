import clsx from "clsx";
import { useEffect, useState } from "react";

function Toast({ toast }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div
      className={clsx(
        "w-64 rounded shadow-lg py-5 px-4 text-left border-gray-300 transition duration-500",
        isShow && !toast.isDone ? "-translate-x-full" : "translate-x-4"
      )}
    >
      <h3 className="text-sm font-bold">{toast.title}</h3>
      <p className="text-xs">{toast.desc}</p>
    </div>
  );
}

export default Toast;
