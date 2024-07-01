import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/indesx";
import { Container, Stack } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Stack
        direction="horizontal"
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <TodoList />
      </Stack>
    </Container>
  );
}

export default App;
