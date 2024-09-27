import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/Newsletter';

const About = () => {
  return (
  <div>


    <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>"Forever" is a popular name associated with several e-commerce websites, but most commonly, it refers to Forever 21, an American fast-fashion retailer. Forever 21 operates both online and through physical stores worldwide, offering a wide range of fashion items, including clothing, accessories, and beauty products. s to various locations.</p>
         <p>An e-commerce website enables businesses to sell products or services online. It features a user-friendly interface, secure payment gateways, and product catalogs. Shoppers can browse, add items to a cart, and make purchases. streamline buying and selling, </p>
         <b className='text-gray-800'>Our Mission</b>
         <p>User-Friendly Interface: The site is designed to be intuitive, with easy navigation through categories such as Women, Men, Kids, Accessories, and Sale.
              Fast-Fashion Inventory: Known for constantly updating collections, .</p>
       </div>
    </div>

     <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
     </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>The website often features flash sales, clearance items, and seasonal promotions. Shoppers can create accounts to track orders, save favorite items, and receive tailored recommendations. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>User-Friendly Interface: The site is designed to be intuitive, with easy navigation through categories such as Women, Men, Kids, Accessories, and Sale. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'> Various payment methods are supported, including credit cards, PayPal, and gift cards.The website caters to international customers with region-specific websites and currency options. </p>
        </div>

      </div>
      <NewsletterBox/>




    </div>
  )
}

export default About