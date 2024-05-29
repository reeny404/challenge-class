import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  const modal = useModal();
  return (
    <Backdrop>
      <article className="modal">
        <h3>{title}</h3>
        <div>{content}</div>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
