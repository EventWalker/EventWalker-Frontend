import React from 'react'
import {Link} from "react-router-dom"

function Header({logo, search, addevent, notification,user}) {
    return (
      <nav >

        <div className="logoArea">
        <h4 className="lo">LOGO</h4>
   
         {

          search && <input type="search" placeholder="search item" /> 
        } 

        </div>


        <ul className="sign">
          
        <button className="signup"><Link to="/signup">SIGNUP</Link></button>
        <button className="signin"> <Link to="/signin"> SIGNIN </Link></button>
        </ul>
        
      </nav>
    );
  }
  
  export default Header;
  
