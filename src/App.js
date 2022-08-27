import "./styles.css";
import { Form, Button, ListGroup, Container } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();

  const handle = (event) => {
    setItem(event.target.value);
  };

  const add = () => {
    setList((list) => [...list, item]);
    setItem("");
  };

  const remove = (event) => {
    const del = list.indexOf(event.target.name);
    const newAr = list.filter((item) => list.indexOf(item) !== del);
    setList(newAr);
  };
  return (
    <div className="App">
      <Container>
        <h1>To Do App</h1>
        <Form>
          <Form.Group>
            <Form.Control type="text" value={item} onChange={handle} />
          </Form.Group>
          <Form.Group>
            <Button onClick={add}> Add</Button>
            <br />
          </Form.Group>
          {list.map((val) => {
            return (
              <div>
                <ListGroup.Item as="li">{val}</ListGroup.Item>
                <Button name={val} onClick={remove}>
                  X
                </Button>
              </div>
            );
          })}
        </Form>
      </Container>
    </div>
  );
}
