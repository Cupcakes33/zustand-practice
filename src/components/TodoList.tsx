import { styled } from "styled-components";
import useTodoStore from "../context/todoStore";

export default function TodoList() {
  const { todos, remove, toggle } = useTodoStore((state) => state);
  return (
    <>
      <Container>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} readOnly />
            <span>{todo.text}</span>
            <button onClick={() => toggle(todo.id)}>✅</button>
            <button onClick={() => remove(todo.id)}>❌</button>
          </li>
        ))}
      </Container>
    </>
  );
}

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 10px;
    input {
      margin-right: 3px;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      margin-left: 3px;
    }
  }
`;
