import React, { useContext, useEffect } from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Header from "./Header";
import image12 from "../pics/Rectangle 15 (1).png";
import image13 from "../pics/Rectangle 15.png";
import { Container } from "react-bootstrap";
import { UsersContext } from "../contexts/UserContext";

function EventAttendee({ history, location }) {
  const { user } = useContext(UsersContext);

  const redirect = location.search ? location.search.split("=")[1] : "/signup";

  useEffect(() => {
    if (!user) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  return (
    <Container>
      <Header auth={true} usertype="attendee" />
      <section>
        <div>
          <img src={image12} alt="logo" />;
        </div>
        <div className="celebraty">
          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>

          <div className="center">
            <h4>Celebrity Jam</h4>
            <img src={image13} alt="logo" className="emage" />;
            <p>Sun, 12 Aug 2021</p>
            <p>8:00am</p>
            <p>Accra Conference Center</p>
          </div>
        </div>
      </section>

      <footer className="firstfooter">
        <div className="type">
          <div>
            <h4>Discover</h4>
            <p>Attend an Event</p>
            <p>See Past Events</p>
          </div>

          <div>
            <h4>Event Categories</h4>
            <p>Parties</p>
            <p>Conferences</p>
          </div>
          <div>
            <p>Funerals</p>
            <p>Outdooring</p>
            <p>Weddings</p>
          </div>
        </div>
        <Container className="acct">
          <div>
            <h4>Your Account</h4>
            <p>Sign Up</p>
            <p>Sign In</p>
          </div>
          <div>
            <p className="acctp">Be Part Of An Engaging Community</p>
          </div>
        </Container>

        <div className="socialmedia">
          <p>C 2021</p>
          <p>
            Follow us
            <RiFacebookCircleLine />
            <TiSocialLinkedinCircular /> <FaInstagram />
          </p>
          <p>EventWalker</p>
        </div>
      </footer>
    </Container>
  );
}

export default EventAttendee;
