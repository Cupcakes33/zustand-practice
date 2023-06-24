import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type Todos = {
  todos: Todo[];
  add: (todo: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

const useTodoStore = create<Todos>((set) => ({
  todos: [],
  add: (todo: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text: todo, done: false }],
    })),
  remove: (id: number) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggle: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
}));

export default useTodoStore;
