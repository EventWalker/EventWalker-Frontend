import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Image,
  Container,
} from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { UsersContext } from "../contexts/UserContext";
import logo from "../pics/eventwalker.png";

const Header = ({ auth, usertype }) => {
  const { logout } = useContext(UsersContext);

  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <Image
            src={logo}
            alt="logo"
            className="logo"
            style={{ height: 40 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <FormControl type="search" placeholder="Search" className="mr-2 w-25" />
        <Nav className="mr-auto" style={{ maxHeight: "100px" }} navbarScroll>
          {auth ? (
            <Navbar.Collapse id="navbarScroll">
              {usertype === "attendee" ? (
                <Nav.Link href="/">Category</Nav.Link>
              ) : (
                usertype === "manager" && (
                  <Nav.Link href="/addevent">Add event</Nav.Link>
                )
              )}
              <Nav.Link href="#action2">Notifications</Nav.Link>
              <NavDropdown
                title={<BiUserCircle size={40} />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">history</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">something</NavDropdown.Item>
                <NavDropdown.Item href="/signup" onClick={() => logout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          ) : (
            <>
              <Link to="/signup">
                <Nav.Link
                  href="/signup"
                  as="button"
                  className="btn btn-secondary mr-4"
                >
                  SIGN UP
                </Nav.Link>
              </Link>
              <Link to="/signin">
                <Nav.Link
                  href="/signin"
                  as="button"
                  className="btn btn-secondary"
                >
                  SIGN IN
                </Nav.Link>
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
