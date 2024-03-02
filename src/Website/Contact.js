import React,{useState} from 'react';

import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const Contact = () => {

  const [firstName, setFirstName]=useState(" ");
  const [lastName, setLastName]=useState(" ");
  const [mail,setMail]=useState(" ");
  const [password,setPassword]=useState(" ");

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
    console.log('Email:',mail);
    console.log("Password",password);

  }
  const restForm=(event)=>{
    setFirstName("");
    setLastName("");
    setMail("");
    setPassword("");
  }

  return (
    <div>
        <div className='contactus'>
          <div className='contact'>
          <div className='contact-head'>
            <h2 className='contact-cont'>contact</h2>
            <h2 className='contact-me'>Me</h2>
          </div>
          <h5>Let's Work Together</h5>
          <p>loernm</p>
          <div className='contact-list'>
            <li><IoIosMail />nivi22saravanan@gmail.com</li>
            <li><IoCall />9187546610</li>
          </div>
          </div>
          <div className='form1'>
          <form onSubmit={handleSubmit}>
      
          <label> <h3>First Name:</h3>
          <input  value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="name" placeholder="First name" /></label>  
          <label> <h3>Last Name:</h3>
          <input  value={lastName} onChange={(e)=>setLastName(e.target.value)} className="name"  placeholder="Last name" /></label>  
          <label> <h3>Mail:</h3>
          <input  value={mail} onChange={(e)=>setMail(e.target.value)} className="mail"  placeholder="Email" /></label>  
          <label> <h3>Password:</h3>
          <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="pass"  placeholder="Password" /></label>  
      
         <div className='contact-button'>
         <input type='submit' value="Submit" className='btn-btn'/>
         <input type='reset' value="Reset"  onClick={()=>restForm()}   className='btn-btn'/>
        
      
         </div>
    </form>
           
          </div>
        </div>
    </div>
  )
}

export default Contact;

