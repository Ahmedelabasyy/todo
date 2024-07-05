import { FC } from "react";
import { Stack } from "react-bootstrap";
import { IoMdClose, IoMdDoneAll } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { todoProps } from "../../types";

const Todo: FC<todoProps> = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <Stack
      key={todo.id}
      direction="horizontal"
      gap={3}
      className="justify-content-between rounded-2 p-3"
      style={{
        backgroundColor: "var(--primary-sec)",
        border: "1.5px solid var(--darkBorder)",
      }}
    >
      <Stack direction="vertical" gap={1}>
        <h3
          style={{
            color: "var(--secondary)",
            fontSize: "1.2rem",
            textDecoration: todo?.completed ? "line-through" : "none",
          }}
        >
          {todo?.title}
        </h3>
        <span
          style={{
            color: "var(--white-floating)",
            textDecoration: todo?.completed ? "line-through" : "none",
          }}
        >
          {todo?.userId}
        </span>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <MdDelete
          style={{
            fontSize: "1.7rem",
            color: "var(--danger)",
            cursor: "pointer",
          }}
          onClick={() => deleteTodo(todo.userId)}
        />
        {todo?.completed ? (
          <IoMdClose
            style={{
              fontSize: "1.7rem",
              color: "var(--danger)",
              cursor: "pointer",
            }}
            onClick={() => updateTodo(todo.userId)}
          />
        ) : (
          <IoMdDoneAll
            style={{
              fontSize: "1.7rem",
              color: "var(--success)",
              cursor: "pointer",
            }}
            onClick={() => updateTodo(todo.userId)}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default Todo;
