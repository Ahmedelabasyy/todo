import { FC, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Todo from "./Todo";
import axios from "axios";
import { todo } from "../../types";
const TodosWrapper: FC = () => {
  const [allTodos, setAllTodos] = useState<todo>([
    {
      id: 0,
      todo: "",
      completed: false,
      userId: 0,
    },
  ]);
  const getAllTodos = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos?limit=3");
      console.log(res);
      setAllTodos(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  console.log("allTodos", allTodos);

  return (
    <Stack
      direction="vertical"
      gap={3}
      className="justify-content-start align-items-start "
      style={{ height: "100% !important" }}
    >
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Stack>
  );
};

export default TodosWrapper;
