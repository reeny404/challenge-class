import { useEffect, useRef, useState } from "react";

export function Textarea({ value = "", handleChange }) {
  const [text, setText] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    setText(value);
    ref.current.focus();
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange(text);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <textarea
      autoFocus
      ref={ref}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
