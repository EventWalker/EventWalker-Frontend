import React from "react";
import { FaUserFriends, FaStar, FaRegLifeRing, FaInstagram } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti"
import logo from "../pics/logo.png";
import image2 from "../pics/Rectangle 13.png";
import image3 from "../pics/Rectangle 14.png";
import image4 from "../pics/Rectangle 15.png";
import image5 from "../pics/Browse.png";
import image6 from "../pics/Ellipse 1.png";
import image7 from "../pics/Ellipse 1 (1).png";
import image8 from "../pics/Ellipse 1 (2).png";
import image9 from "../pics/reckone.png";
import image10 from "../pics/rectangle5.png";
import image11 from "../pics/rectangle.png";
import Header from "../component/Header";


function LandingPage() {
    return (
        <section>
            <Header />
            <div>
                <section className="divs">
                    <div className="div1">
                        <h2>Let’s walk you where your favorite events take place. Let’s Go!</h2>
                        <p> Events are important because they allow for a more intimate and engaging experience with your audience. </p>
                    </div>

                    <div className="div2">
                        <img src={logo} alt="logo" />;
                    </div>
                </section>
                <article className="Landart">
                    <div>
                        <input type="text" placeholder="Email" className="inp" />
                        <button className="but">SIGNUP</button>
                    </div>
                    <div className="opp">
                        <p>What you need to know about events and community building?</p>
                        <div className="gains">
                            <div className="app">
                                <p><FaUserFriends />  Make new friends</p>
                            </div>

                            <div className="app">
                                <p><FaRegLifeRing /> Be more sociable</p>
                            </div>

                            <div className="app">
                                <p><GiSmartphone /> Stay trendy</p>
                            </div>

                            <div className="app">
                                <p><GiSmartphone /> Meet opportunities</p>
                            </div>
                        </div>
                    </div>
                </article>
                <section className="events">

                    <div className="myevent">
                        <img src={image2} alt="logo" />;
                        <p>Put an upcomming event here</p>
                    </div>

                    <div className="myevent">
                        <img src={image3} alt="logo" />;
                        <p>Put an upcomming event here</p>
                    </div>

                    <div className="myevent">
                        <img src={image4} alt="logo" />;
                        <p>Put an upcomming event here</p>
                    </div>
                </section>
                <section class='bright'>
                    <div className="browse">
                        <img src={image5} alt="logo" className="browser" />
                        <div>
                            <h2>Find Your Next Favorite Event</h2>
                            <p>Stay in the know and never miss out on important events and community news. EventWalker includes updates on upcoming events and community news and attendees feedback.</p>
                            <br />
                            <br /> <br />
                            <p>Your latest event right on the Go!</p>
                        </div>
                    </div>

                    <div>

                        <div className="manager">
                            <img src={image6} alt="logo" />
                            <div>
                                <p>The communal feeling helps me to take inspired action, and that's why I love organising events. When you have a passion for something, enough to put on an event, at first that's enough.</p>
                                <p>Event Manager</p>
                            </div>
                        </div>

                        <div className="manager">
                            <img src={image7} alt="logo" />
                            <div class='bright'>
                                <p>As an event planner you get to explore your creative vision and see an idea be turned into reality, from concept to execution. </p>
                                <p>Event Manager</p>
                            </div>
                        </div>

                        <div className="manager">
                            <img src={image8} alt="logo" />
                            <div class='bright'>
                                <p>Attending events gives me the exposure to people I would not normally come into contact with. Additionally, it is likely that I will meet an old friend which will give me the opportunity to reconnect.</p>
                                <p>Event Attendee</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="miss">
                        <h3>Don’t Miss out on Important Updates</h3>
                        <p> It's crucial to stay up to date with what's happening day-to-day</p>
                        <p>When we know what's going on, we can do our job better.</p>
                    </div>
                    <div>
                        <div className="events">
                            <div className="pastevent">
                                <img src={image9} alt="logo" />;
                                <p>Put a past Event here</p>
                                <p>Attendant review <FaStar size="12px" /><FaStar size="12px" /><FaStar size="12px" /></p>
                            </div>

                            <div className="pastevent">
                                <img src={image11} alt="logo" />;
                                <p>Put a past Event here</p>
                                <p>Attendant review <FaStar size="12px" /><FaStar size="12px" /><FaStar size="12px" /></p>
                            </div>

                            <div className="pastevent">
                                <img src={image10} alt="logo" />;
                                <p>Put a past Event here</p>
                                <p>Attendant review <FaStar size="12px" /><FaStar size="12px" /><FaStar size="12px" /></p>
                            </div>
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
                        <p>Follow us<RiFacebookCircleLine />
                            <TiSocialLinkedinCircular /> <FaInstagram /></p>
                        <p>EventWalker</p>
                    </div>
                </footer>
            </div></section>
    );
}

export default LandingPage;