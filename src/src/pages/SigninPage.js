import React, { useState, useContext, useEffect } from "react";
import image from "../pics/sign.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UsersContext } from "../contexts/UserContext";
import { Form, Button, Col, Row } from "react-bootstrap";

function SigninPage({ history, location }) {
  const { loginUser, user } = useContext(UsersContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/manorattendee";

  useEffect(() => {
    if (user.token) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };
    loginUser(loginuser);
  }
  return (
    <section className="signuppage">
      <div className="signleft">
        <div>
          <img src={image} alt="logo" />
          <p>Discover A Better Way To Attend Your Next Event</p>
        </div>

        <div className="socialmedia2">
          <p>C 2021</p>
          <p>
            Follow us
            <RiFacebookCircleLine />
            <TiSocialLinkedinCircular /> <FaInstagram />
          </p>
          <p>EventWalker</p>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <h3 className="mb-5">Let's walk you there!</h3>
        <Col>
          <Row className="mb-4">
            <Button>sign up with Google</Button>
          </Row>
          <Row className="mb-4">
            <Button>sign up with Facebook</Button>
          </Row>
        </Col>
        <div style={{ display: "flex", alignItems: "center" }}>
          <hr style={{ width: "40%" }} />
          <div
            style={{
              height: 40,
              width: 80,
              borderRadius: 20,
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Or
          </div>
          <hr style={{ width: "40%" }} />
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
        </Form.Group>
        <Form.Text className="border-1">
          <Link className="nav-link" to="/forget">
            Forget password
          </Link>
        </Form.Text>
        <Button variant="primary" type="submit">
          SignIn
        </Button>
        <p>
          Don't Have an account ? <Link to="/signup">Sign Up</Link>
        </p>
      </Form>
    </section>
  );
}

export default SigninPage;
