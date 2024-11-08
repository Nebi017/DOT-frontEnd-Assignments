import React from 'react';
import './Header.css'

export const  Header =()=>{
    return(
       <>
            <header className="">
           <nav>
            <h2>Company name</h2>
        
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Home</a></li>
            </ul>
           </nav>
          
            </header>
            <hr />
       </>
         
    );
    }

    export default Header;
