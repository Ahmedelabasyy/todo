import { FC } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import TodosWrapper from "./TodosWrapper";

const TodoList: FC = () => {
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
        <Row
          className="w-100 pb-4"
          style={{ borderBottom: "1px solid var(--secondary)" }}
        >
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
                className="rounded-2 p-2"
                style={{ width: "100%", border: "none", outline: "none" }}
                name="userId"
                type="text"
                placeholder="User Id?"
              />
            </Stack>
          </Col>
          <Col sm={12} md={2}>
            <button
              className="rounded-2 "
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
        <div
          className="mt-2 w-100"
          style={{ height: " 400px", overflowY: "scroll" }}
        >
          <TodosWrapper />
        </div>
      </Stack>
    </Stack>
  );
};

export default TodoList;
