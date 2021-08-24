import React from "react";
import image from "../pics/sign.png";
import {RiFacebookCircleLine} from "react-icons/ri";
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";

function SignupPage() {
    return (
       <section className="signuppage">
           <div className="signleft">

           <div>
           <img src={image} alt="logo" />
           <p>Discover A Better Way To Attend Your Next Event</p>
           </div>

        <div className="socialmedia2">
            <p>C 2021</p>
            <p>Follow us<RiFacebookCircleLine/>
              <TiSocialLinkedinCircular/> <FaInstagram/></p>
              <p>EventWalker</p>
        </div>
          </div>

           <div className="signright">
               <h3>Let’s walk you there!</h3>
               <input type="text" placeholder="Sign up with Google" className="google2"/>
               <input type="text" placeholder="Sign up with Facebook" className="google2"/>
                <p>Or</p>
                <label>Email</label>
                <input type="text" />

                <label>Password</label>
                <input type="text" />
   
               <Link to="/managershome"><button className="google2">Sign Up</button> </Link>
               <p> Have an account already? <Link to="/signin">Sign In</Link> </p>
           </div>
           
       </section>
    );
  }
  
  export default SignupPage;
