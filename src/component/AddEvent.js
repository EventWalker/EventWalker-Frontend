import React from "react"
 
function AddEvent() {
    return (
        <main>
      {/* <nav>
        <h4 className="lo">LOGO</h4>
        <input type="search" placeholder="search"/>
       <ul>
           <li>Add Event</li>
           <li>Notification</li>
           <li></li>
       </ul>
      </nav> */}
      <section className="add">
         <h3>Add an Event</h3>
        <label>Event Name</label>
         <input type ="text" placeholder="add an event name"/>
         <label>Description</label>
         <p>What do you want your attendees to know</p>
         <input type ="text" placeholder="add a description"/>
         <input type="file" placeholder="add file here"/>
<label>Date and Time</label>
<div>
<input type="date"/>
<input type="time"/>
</div>


<label>Select Category</label>
<input type="select"/>
<label>Duration</label>
<input type="text"/>

<label>Location</label>
<input type="radio" placeholder="This is an online event"/>

<label>Add a venue</label>
<input type="text"/>

<label>Direction</label>
<input type="text"/>

      </section>
      </main>
    );
  }
  
  export default AddEvent;