import React from "react";
import {RiFacebookCircleLine} from "react-icons/ri";
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {FaInstagram} from "react-icons/fa";
import Header from "./Header";
import { Link } from "react-router-dom";

function ManagersHome() {
    return (
        <>
            <Header search={true}/>
        <main>
      {/* <nav>
       <h4>Logo</h4>
       <input type="search" placeholder="search"/>
       <ul>
           <li>Add Event</li>
           <li>Notification</li>
           <li></li>
       </ul>
      </nav> */}

      <section className= "myhome">
       <h3>Let’s take you where the excitement happens</h3>
      </section>
      <section className="mhome">
       <button> <Link to="/addevent"> + </Link></button>
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
          <div className="acct">
            <div>
                <h4>Your Account</h4>
                <p>Sign Up</p>
                <p>Sign In</p>
                </div>
                <div>
                    <p className="acctp">Be Part Of An Engaging Community</p>
                </div>
          </div>

          <div className="socialmedia">
              <p>C 2021</p>
              <p>Follow us<RiFacebookCircleLine/>
              <TiSocialLinkedinCircular/> <FaInstagram/></p>
              <p>EventWalker</p>
          </div>
        </footer>
      </main>
      </>
    );
  }
  
  export default ManagersHome;