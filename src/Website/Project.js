import React from 'react';
import giftshop from '../img/giftshop.jpg';
import jewelleryshop from '../img/jewelleryshop.jpg';
import cosmetic from '../img/cosmetic.jpg';

const Project = () => {
  return (
    <div>
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
        
        </div>
  )
}

export default Project