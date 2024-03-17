import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function CreateUser() {
  const [userId, setUserId] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const createUser = (event) => {
    setWelcomeMsg(`Welcome ${userId}`);
    event.preventDefault();
  };
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase text-center">
                  EDMS
                </h2>
                <p className=" mb-5 text-center">
                  Please enter your login and password!
                </p>
                <Form className="mb-3" onSubmit={createUser}>
                  <Form.Group className="mb-3" controlId="userId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter user ID"
                      onBlur={(event) => setUserId(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="mb-3">
                    <p className="small">
                      <a className="text-primary" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </div>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>

                  <Form.Label>{welcomeMsg}</Form.Label>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateUser;
