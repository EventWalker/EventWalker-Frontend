import React from 'react'
import image7 from "../pics/Ellipse 1 (1).png";
import Header from "./Header";


function AccountProfile() {
    return (
      <section>
        <Header search={true}/>
        <section  className="profile" >
            <h2>Account Information</h2>
            <img src={image7} alt="logo" />
            <p>Peter Doe</p>
            <p>example@gmail.com</p>
            <form className="formpro" >
              <h3>Billing Address</h3>
              <label>Address</label>
           <input type="text" />

           <label>City</label>
           <input type="text" />

           <label>Country</label>
           <input type="text" />

           <label>Zip/Postal Code</label>
           <input type="text" />

           <label>State</label>
           <input type="text" />
            </form>
        </section>
      </section>
    );
  }
  
  export default AccountProfile;