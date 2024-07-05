import { FC, useEffect, useMemo, useState } from "react";
import { Spinner, Stack } from "react-bootstrap";
import TodosWrapper from "./TodosWrapper";
import { TodoForm } from "../../helpers";
import { todo } from "../../types";

const TodoList: FC = () => {
  const [loading, setLoading] = useState(false);
  const initialTodos = useMemo(() => {
    const savedTodos = localStorage.getItem("allTodos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            id: 0,
            title: "",
            completed: false,
            userId: 0,
          },
        ];
  }, []);

  const [allTodos, setAllTodos] = useState<todo[]>(initialTodos);

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }, [allTodos]);
  return (
    <Stack
      direction="vertical"
      gap={3}
      className="justify-content-start align-items-center py-4"
    >
      <div>
        <h1
          className="text-center fw-semibold"
          style={{ color: "var(--primary)" }}
        >
          WOOHOO! LET'S GET THIS CRAZY TRAIN ROLLING!!!
        </h1>
        <h3 style={{ color: "var(--primary)" }} className="text-center">
          Prioritize & Conquer
        </h3>
      </div>
      <Stack
        direction="vertical"
        className="justify-content-start align-items-start m-auto rounded-3 p-4"
        gap={2}
        style={{
          width: "70%",
          backgroundColor: "var(--primary)",
        }}
      >
        <TodoForm setAllTodos={setAllTodos} setLoading={setLoading} />
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center w-100"
            style={{ height: "400px" }}
          >
            <Spinner style={{ color: "var(--secondary)" }} />
          </div>
        ) : (
          <div
            className="mt-2 w-100"
            style={{ height: " 400px", overflowY: "auto" }}
          >
            <TodosWrapper allTodos={allTodos} setAllTodos={setAllTodos} />
          </div>
        )}
      </Stack>
    </Stack>
  );
};

export default TodoList;
