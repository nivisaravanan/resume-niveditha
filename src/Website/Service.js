import React from 'react'

const Service = () => {
  return (
    <div>
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
    </div>
  )
}

export default Service