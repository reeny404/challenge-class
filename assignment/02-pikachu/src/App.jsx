import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, isRightView: true });
  const pikachuRef = useRef(null);

  const movePikachu = (moveX, moveY) => {
    setPosition((prev) => {
      const nextX = prev.x + moveX;
      const nextY = prev.y + moveY;
      if (nextX < 0 || nextX > 10) return prev;
      if (nextY < 0 || nextY > 10) return prev;

      return {
        x: nextX,
        y: nextY,
        isRightView: moveX === 0 ? prev.isRightView : moveX === 1,
      };
    });
  };

  useEffect(() => {
    const onKeyUp = (e) => {
      switch (e.key) {
        case "ArrowUp":
          movePikachu(0, -1);
          break;
        case "ArrowDown":
          movePikachu(0, 1);
          break;
        case "ArrowLeft":
          movePikachu(-1, 0);
          break;
        case "ArrowRight":
          movePikachu(1, 0);
          break;
        case " ":
          pikachuRef.current.classList.add("jump");
          setTimeout(() => {
            pikachuRef.current.classList.remove("jump");
          }, 300);
          break;
      }
    };

    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [position]);

  const { x, y, isRightView } = position;
  return (
    <>
      <div id="Grass">
        <div
          id="Pikachu"
          ref={pikachuRef}
          style={{
            left: `${x * 120}px`,
            top: `${y * 120}px`,
            transform: `rotateY(${isRightView ? 0 : 180}deg)`,
          }} 
        />
      </div>
    </>
  );
}

export default App;
