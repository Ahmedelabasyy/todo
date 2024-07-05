import { FC, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { todoForm } from "../types";
import axios from "axios";

type props = {
  setAllTodos: any;
  setLoading: any;
};

const TodoForm: FC<props> = ({ setAllTodos, setLoading }) => {
  const [newToDo, setNewToDo] = useState<todoForm>({
    id: null,
    title: "",
    userId: null,
    completed: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addNewToDoHandler = async () => {
    let body = newToDo;
    body.userId = Number(newToDo?.userId);

    try {
      setLoading(true);
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        body
      );
      if (res.status === 201) {
        setAllTodos((prev: any) => [res.data, ...prev]);
        setNewToDo({ title: "", userId: null, completed: false });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <form
      className="w-100 pb-4"
      style={{ borderBottom: "1px solid var(--secondary)" }}
      onSubmit={(e) => {
        e.preventDefault();
        addNewToDoHandler();
      }}
    >
      <Row>
        <Col sm={12} md={5}>
          <Stack direction="vertical" className="w-100">
            <label
              className="mb-2 fw-semibold"
              style={{ color: "var(--white-floating)" }}
              htmlFor="title"
            >
              Title:
            </label>
            <input
              onChange={handleChange}
              value={newToDo?.title}
              className="rounded-2 p-2"
              style={{ width: "100%", border: "none", outline: "none" }}
              name="title"
              type="text"
              placeholder="Todo Title?"
            />
          </Stack>
        </Col>
        <Col sm={12} md={5}>
          <Stack direction="vertical" className="w-100">
            <label
              className="mb-2 fw-semibold"
              style={{ color: "var(--white-floating)" }}
              htmlFor="userId"
            >
              User Id:
            </label>
            <input
              onChange={handleChange}
              className="rounded-2 p-2"
              value={newToDo?.userId || ""}
              style={{ width: "100%", border: "none", outline: "none" }}
              name="userId"
              type="number"
              max={10000000}
              placeholder="User Id?"
            />
          </Stack>
        </Col>
        <Col sm={12} md={2}>
          <button
            className="rounded-2 "
            type="submit"
            style={{
              cursor: "pointer",
              width: "100%",
              color: "var(--white-floating)",
              backgroundColor: "var(--secondary)",
              marginTop: "2rem",
              padding: "0.5rem 0.6rem",
              border: "1px solid var(--secondary)",
            }}
          >
            Add
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default TodoForm;
