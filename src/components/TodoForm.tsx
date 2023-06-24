import { useRef } from "react";
import useTodoStore from "../context/todoStore";

export default function TodoForm() {
  const { add } = useTodoStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      add(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Add</button>
    </form>
  );
}
