import { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/Toast";

// 1. 만든다.
const initialContext = { toastList: [], setToastList: () => {} };
const ToastContext = createContext(initialContext);

// 2. 사용한다.
export const useToastContext = () => useContext(ToastContext);

// 3. 범위를 지정해 제공한다.
export function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    for (let i = 0; i < toastList.length; i++) {
      const toast = toastList[i];
      if (toast.isDone) {
        continue;
      }

      setTimeout(() => {
        setToastList((toastList) => [
          ...toastList.map((value) =>
            value.id !== toast.id ? value : { ...toast, isDone: true }
          ),
        ]);
      }, toast.ms);
    }
  }, [toastList]);

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
      <div className="fixed -right-60 bottom-5 flex gap-4 flex-col">
        {toastList.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
