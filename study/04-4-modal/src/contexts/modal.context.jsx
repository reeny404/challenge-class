import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

// 1. 만든다. -> createContext
const initialValue = {
  open: () => {},
  close: () => {},
};
const ModalContext = createContext(initialValue);

// 2. 사용한다. -> useContext
export const useModal = () => useContext(ModalContext);

// 3. 범위를 지정해서 값을 내려준다 -> Context.Provider
export function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState();
  const value = {
    open: (options) => setModalOptions(options),
    close: () => setModalOptions(null),
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}
