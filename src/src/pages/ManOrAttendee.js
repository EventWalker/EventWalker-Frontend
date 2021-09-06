import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function ManOrAttendee() {
  return (
    <Form>
      <h5>How do you want to use this platform</h5>
      <Link to="/eventattendee">
        <Form.Check
          type="radio"
          id={`default-radio`}
          label={`I want to attend events`}
          className="mb-4"
        />
      </Link>
      <Link to="/managershome">
        <Form.Check
          type="radio"
          id={`default-radio`}
          label={`I am an event manager`}
        />
      </Link>
    </Form>
  );
}

export default ManOrAttendee;
