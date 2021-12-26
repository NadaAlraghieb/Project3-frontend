import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
function SignIn(props) {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rong, setRong] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      // courses: courses,
    };
    axios
      .post("http://localhost:5000/users/login", data)
      .then((response) => {
        console.log(response.data.message);
        router.push("/");
        // localStorage.setItem("users", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="signin">
      <div className=" container" style={{ margin: "60px" }}>
        <div className=" row gutters">
          <div className="  col-xl-4 " style={{ margin: "60px" }}>
            <div className=" card h-100">
              <div className=" card-body">
                <Card className="cardSignIn" style={{ paddingBottom: "20px" }}>
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group size="lg" controlId="email">
                        <Form.Label id="h">Email</Form.Label>
                        <Form.Control
                          autoFocus
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="password">
                        <Form.Label id="h">Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <br></br>
                      <Button
                        className="btn btn-dark w-100"
                        block
                        size="lg"
                        type="submit"
                      >
                        Login
                      </Button>
                      <p className="my-2">
                        I don't have an account?
                        <Link href="/SignUp">
                          <a style={{ color: "crimson" }}>Sign Up Now</a>
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
                {rong && (
                  <center>
                    <span className="spanSignIn">
                      The Email or Password is Incorrect{" "}
                    </span>
                  </center>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;