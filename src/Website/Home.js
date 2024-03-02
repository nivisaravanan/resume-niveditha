import React,{useState} from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

import giftshop from '../img/giftshop.jpg';
import jewelleryshop from '../img/jewelleryshop.jpg';
import cosmetic from '../img/cosmetic.jpg';

import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";





import 'bootstrap/dist/css/bootstrap.min.css';

function Home () {
  const [firstName, setFirstName]=useState(" ");
  const [lastName, setLastName]=useState(" ");
  const [mail,setMail]=useState(" ");
  const [password,setPassword]=useState(" ");

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
    console.log("Email:",mail);
    console.log("Password:",password);

  }
  const restForm=(event)=>{
    setFirstName("");
    setLastName("");
    setMail("");
    setPassword("");
  }
  return (
    
      <div className='container-full'>
        <div className='home'>
          <div className='home-txt'>
            <h2 className='hello'>Hello It's me</h2>
            <h1 className='nivi'>Niveditha.s</h1>
            <h3 className='mern' style={{color:'aqua'}}>  I'm Web Developer</h3>
            <p className='home-para'>I'm web Developer and Application Developer.I can design a webiste,frontend design and many more. </p>
            <div className='home-icon'>
              <ul>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaWhatsapp /></li>
                <li><FaTwitter /></li>
              </ul>
            </div>
          </div>
          

        </div>
        {/* about end */}

        <div className='about'>
        <div className='abt-txt'>
            <div className='abt-head'>
              <h2 className='abt-abt'>About</h2>
              <h2 className='me'>Me</h2>
            </div>
            <p className='abt-para'>I am a skilled web designer . My passion lies in creating captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.</p>
            <button type='button' className='abt-btn'>More About Me</button>
          </div>
          </div>
          {/* about end */}
          <div className='service'>
          <div className='service-head'>
            <h1 className='service-my'>My</h1>
            <h1 className='service-serv'>Service</h1>
          </div>
          <div className='service-content'>
            <div className='frontend'>

              <h4>Front End Developer</h4>
              <p>Welcome to my frontend development services! I specialize in crafting immersive and user-friendly web experiences through cutting-edge frontend technologies. With a keen eye for design and a passion for coding, I offer a range of services tailored to meet your project needs. Here's what I can do for you:
                <li>Responsive Design</li>
                <li>HTML5 / CSS3 Development</li>
                <li>Framework  & Libraries</li>
              </p>
              <button type='button' className='ser-btn'>Learn More</button>
            </div>
            <div className='ui'>
              <h4>PhotoShop</h4>
              <p>Welcome to my Photoshop design services! With a passion for creativity and an eye for detail, I offer a wide range of design solutions to bring your ideas to life and enhance your visual branding. Whether you're looking to create stunning graphics, retouch photos, or design engaging marketing materials, Here's how I can assist you:
                <li>Graphic Designing</li>
                <li>Photo Retouching</li>
              </p>             <button type='button' className='ser-btn'>Learn More</button>
            </div>
            <div className='backend'>
              <h4>Back End Developer</h4>
              <p>Welcome to my backend development services! As a seasoned backend developer, I specialize in building robust, scalable, and secure server-side solutions to power your web applications and APIs. With a focus on performance, reliability, and maintainability. Here's how I can help you:
                <li>Server-side Programming</li>
                <li>API Integration</li>
                <li>Database Design & Management</li>
              </p>
              <button type='button' className='ser-btn'>Learn More</button>
            </div>
          </div>
        </div>
        {/* service end */}
        <div className='skill'>
          <div className='skill-head'>
            <h1 className='skill-my'>My</h1>
            <h1 className='skill-skill'>Skill</h1>
          </div>
          <div className='skill-content'>
            <div className='technical-skill'>
              <h3 className='techinical-head'>Technical skill</h3>
              <div className='technical-bar'>
                <div className='bar' style={{ color: "#c95d2e" }}>
                 <FaHtml5 />
                  <div className='info'>
                    <span style={{ color: "white" }} className='infohtml'>HTML</span>
                  </div>
                  <div className='progress-line html'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#147bbc" }}><FaCss3Alt />
                  <div className='info'>
                    <span style={{ color: "white" }}>CSS</span>
                  </div>
                  <div className='progress-line css'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#b0bc1e" }}><DiJavascript1 />
                  <div className='info'>
                    <span style={{ color: "white" }}>JavaScript</span>
                  </div>
                  <div className='progress-line javascript'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#c32ec9" }}><SiJquery />
                  <div className='info'>
                    <span style={{ color: "white" }}>JQuery</span>
                  </div>
                  <div className='progress-line jquery'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#69cb5" }}><FaReact />
                  <div className='info'>
                    <span style={{ color: "white" }}>React</span>
                  </div>
                  <div className='progress-line react'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#1daa67" }}><SiMongodb />
                  <div className='info'>
                    <span style={{ color: "white" }}>Mongo DB</span >
                  </div>
                  <div className='progress-line mongodb'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#5a7e2b" }}><DiNodejs />
                  <div className='info'>
                    <span style={{ color: "white" }}>Node Js</span>
                  </div>
                  <div className='progress-line nodejs'>
                    <span></span>
                  </div>
                </div>
              </div>
              </div>
            <h3 className='professional-head'>Professional skill</h3>
            <div className='Professional-Skill'>

              <div className='radial1'>
                <div className='radial-bar1'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-1' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>80%</div>
                  <div className='text' style={{ color: "white" }}>Creativity</div>
                </div>
                <div className='radial-bar2'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-2' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>70%</div>
                  <div className='text' style={{ color: "white" }}>Communication</div>
                </div>
              </div>
              <div className='radial2'>
                <div className='radial-bar3'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-3' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>75%</div>
                  <div className='text' style={{ color: "white" }}>Problem solving</div>
                </div>
                <div className='radial-bar4'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-4' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>85%</div>
                  <div className='text' style={{ color: "white" }}>Team Work</div>
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* skill end */}
        <div className='project'>
          <div className='project-head'>
            <h1 className='project-my'>Latest</h1>
            <h1 className='project-proj'>Projects</h1>
          </div>
          <div className='project-content'>
            <div className='row'>
              <img src={giftshop} alt='giftshop' width={"50px"} height={"250px"} className='project-img' />
              <div className='project-layer'>
                <h5>GIFT SHOP</h5>
                <p>Welcome to GiftShop, a modern and user-friendly e-commerce platform built with React.js! GiftShop offers a seamless shopping experience, allowing users to browse, discover, and purchase a wide range of products conveniently from their desktop or mobile devices. Here's an overview of what GiftShop has to offer:
                  <li>Intutive User Interface</li>
                  <li>Product Catalog</li>
                  <li>Interactive Product Pages</li>
                </p>
                <p>Explore GiftShop Today!
Whether you're searching for the perfect gift for a loved one or treating yourself to something special, GiftShop is your one-stop destination for all things fabulous. Explore our curated collection, discover new favorites, and experience the joy of shopping online with GiftShop </p>


              </div>
            </div>
            <div className='row'>
              <img src={jewelleryshop} alt='jewelleryshop' width={"50px"} height={"250px"} className='project-img' />
              <div className='project-layer'>
                <h5>JEWELLERY SHOP</h5>
                <p>Welcome to Jewellery Shop, a stunning website designed to showcase exquisite jewellery pieces and provide a seamless shopping experience for customers. Built with HTML, CSS, and Bootstrap, Jewellery Shop combines elegant design with responsive functionality to create a captivating online jewellery store. Here's what makes Jewellery Shop stand out:
                  <li>visually stunning Design</li>
                  <li>Responsive & mobile-Friendly</li>
                  <li>User-Fridenly Navigation</li>
                  <li>Showcase of Jewellery Collection</li>
                </p>
                <p>Indulge in the luxury of fine jewellery shopping with Jewellery Shop. Whether you're searching for the perfect gift for a loved one or treating yourself to something special, Jewellery Shop offers a curated collection of exquisite pieces to suit every style and occasion. Explore our collection today and elevate your jewellery shopping experience with Jewellery Shop.</p>

              </div>
            </div>
            <div className='row'>
              <img src={cosmetic} alt='botique' width={"50px"} height={"250px"} className='project-img' />
              <div className='project-layer '>
                <h5>COSMETIC</h5>
                <p>Welcome to Cosmetics, a sleek and sophisticated e-commerce platform designed to cater to beauty enthusiasts and skincare aficionados. Built with HTML, CSS, and Bootstrap, Cosmetics offers a visually stunning shopping experience coupled with seamless functionality. Explore the world of beauty with Cosmetics, where luxury meets accessibility. Here's what sets Cosmetics apart:
                  <li>Elegant Design Aesthetic</li>
                  <li> Responsive and Mobile-Optimized</li>
                  <li>Intuitive Navigation</li>
                </p>
                <p>Elevate your beauty routine with Cosmetics. Whether you're searching for the latest makeup trends, skincare innovations, or indulgent beauty treats, Cosmetics offers a curated selection of premium products to help you look and feel your best.</p>

              </div>
            </div>
          </div>
        </div>
        {/* project end */}
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

    
  );
}

export default Home