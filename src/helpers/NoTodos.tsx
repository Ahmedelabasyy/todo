import { FC } from "react";
import { Stack } from "react-bootstrap";

const NoTodos: FC = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-center align-items-center rounded-2 p-3"
      style={{
        backgroundColor: "var(--primary-sec)",
        border: "1.5px solid var(--darkBorder)",
      }}
    >
      <h3 style={{ color: "var(--secondary)" }}>No Todos To Show</h3>
    </Stack>
  );
};

export default NoTodos;
