import React, { useEffect, useState, useContext } from "react";
import { UsersContext } from "../contexts/UserContext";
import { eventsContext } from "../contexts/eventContext";

function AddEvent({ history }) {
  const { user } = useContext(UsersContext);
  const { addEvent } = useContext(eventsContext);

  const [eventname, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [eventdate, setEventDate] = useState("");
  const [eventtime, setEventTime] = useState("");
  const [eventcategory, setEventCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [direction, setDirection] = useState("");
  const [location, setLocation] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    if (!user) {
      history.push("/eventmanager");
    }
  }, [history, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newevent = {
      eventname,
      description,
      image,
      eventdate,
      eventtime,
      eventcategory,
      duration,
      direction,
      location,
      venue,
    };
    addEvent(newevent);
  };

  return (
    <main className="container">
      <div className="justify-content-md-center ">
        <h4>Add an Event</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="col-lg-4 col-md-6">
              <div className="form-group">
                <label className="form-label mt-4">Event name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="add an event name"
                  value={eventname}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">
                  Description
                </label>
                <br />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <textarea
                  className="form-control"
                  placeholder="Add a description"
                  rows="2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-4 form-group" style={{ paddingLeft: 20 }}>
              <label htmlFor="exampleTextarea" className="form-label mt-4">
                Upload image
              </label>
              <input
                type="text"
                value={image}
                placeholder="enter image link"
                className="form-control col-lg-5"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <hr />
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label>Date and time</label>
              <br />
              <div className="row">
                <input
                  type="date"
                  value={eventdate}
                  className="form-control col-lg-5"
                  onChange={(e) => setEventDate(e.target.value)}
                />
                <input
                  type="time"
                  className="form-control col-lg-3"
                  value={eventtime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label mt-4">Select a category</label>
              <select
                className="form-select"
                value={eventcategory}
                onChange={(e) => setEventCategory(e.target.value)}
              >
                <option value="Parties">Parties</option>
                <option value="Weddings">Weddings</option>
                <option value="Funerals">Funerals</option>
                <option value="Outdoorings">Outdoorings</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Duration
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="3 hrs"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label mt-4">Location</label>
              <br />
              <small id="emailHelp" className="form-text text-muted">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                This is an online event
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Add a venue
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter venue here"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea" className="form-label mt-4">
                Direction
              </label>
              <textarea
                className="form-control"
                placeholder="Add a direction"
                rows="2"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddEvent;
