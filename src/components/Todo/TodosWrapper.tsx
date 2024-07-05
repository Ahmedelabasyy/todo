import { FC, useEffect } from "react";
import { Stack } from "react-bootstrap";
import Todo from "./Todo";
import axios from "axios";
import { NoTodos } from "../../helpers";
import { todo } from "../../types";

type Props = {
  setAllTodos: any;
  allTodos: any;
};

const TodosWrapper: FC<Props> = ({ setAllTodos, allTodos }) => {
  const getAllTodos = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      // Merge the fetched todo only if it's not already in the state
      setAllTodos((prevTodos: todo) => {
        if (prevTodos.some((todo) => todo.id === res.data.id)) {
          return prevTodos;
        }
        return [...prevTodos, res.data];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (allTodos.length === 0) {
      getAllTodos();
    }
  }, [allTodos.length]);

  const updateTodo = (id: number) => {
    setAllTodos((prevTodos: todo) =>
      prevTodos.map((todo) =>
        todo.userId === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (Id: number) => {
    setAllTodos((prevTodos: todo[]) =>
      prevTodos.filter((todo: any) => todo.userId !== Id)
    );
  };

  return (
    <Stack
      direction="vertical"
      gap={3}
      className="justify-content-start align-items-start "
      style={{ height: "100% !important" }}
    >
      {allTodos?.length > 0 ? (
        allTodos?.map((todo: any) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <NoTodos />
      )}
    </Stack>
  );
};

export default TodosWrapper;
