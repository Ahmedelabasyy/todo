import { FC } from "react";
import { Stack } from "react-bootstrap";
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Todo: FC = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-between rounded-2 p-3"
      style={{
        backgroundColor: "var(--primary-sec)",
        border: "1.5px solid var(--darkBorder)",
      }}
    >
      <Stack direction="vertical" gap={1}>
        <h3 style={{ color: "var(--secondary)" }}>Do Somethung</h3>
        <span style={{ color: "var(--white-floating)" }}>1235</span>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <MdDelete
          style={{
            fontSize: "1.7rem",
            color: "var(--danger)",
            cursor: "pointer",
          }}
        />
        <IoMdDoneAll
          style={{
            fontSize: "1.7rem",
            color: "var(--success)",
            cursor: "pointer",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Todo;
