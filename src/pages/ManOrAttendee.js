import React from "react"
import { Link } from "react-router-dom";
 
function ManOrAttendee() {
    return (
       
      <section className="MorA">
          <div className="add1">
     <Link to="/managershome"><input type="radio"/></Link>
    <label>I am an event Manager</label>
    </div>

    <div className="add1">
    <Link to="/eventattendee"><input type="radio"/></Link>
    <label>I am an event Attendee</label>
    </div>
      </section>
    
    );
  }
  
  export default ManOrAttendee;