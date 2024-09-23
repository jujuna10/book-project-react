import React from 'react'
import Slider from "react-slick";
import Search from './Search'
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpeg'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.webp'
import book5 from '../assets/book5.jpeg'
import book6 from '../assets/book6.avif'
import book7 from '../assets/book7.jpeg'
import book8 from '../assets/book8.webp'
import book9 from '../assets/book9.png'
import book11 from '../assets/book11.webp'
import book12 from '../assets/book12.jpg'


import book13 from '../assets/book1.jpg'
import book14 from '../assets/book2.jpeg'
import book15 from '../assets/book3.png'
import book16 from '../assets/book4.webp'
import book17 from '../assets/book5.jpeg'
import book18 from '../assets/book6.avif'
import book19 from '../assets/book7.jpeg'

export default function AllChildrenBook() {

    const bookCovers = [
        book1,book2,book3,book4,book5,book6,book7,book8,book9,book11,book12,book13,book14,book15,book16,book17,book18,book19
    ]

    const bookName = [
        "Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8","Name9","Name10","Name11","Name12","Name13","Name14","Name15","Name16","Name17","Name18","Name19"
    ]
    const prices = [
        '10','12','15','8','20','19','9','11','17','12','10','20','19','12','15','20','18','12','10'
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 2,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ margin: "0px", translate: "0px 50px" }}> {dots.slice(0, 4)} </ul>
          </div>
        ),
        customPaging: i => (
            i < 4 ? (
              <div
                style={{
                  color: "black",
                  border: "1px blue solid",
                  borderRadius: "10px",
                  padding: "5px",
                  width: "25px",
                  display: "flex",

                }}
              >
                {i + 1}
                
              </div>
            ) : (
              <div style={{ visibility: "hidden" }}></div>
            )
            
          )
         
      };
    

  return (
    <div>
         <div className='flex flex-col gap-[200px]'>
        <div className='flex'>
            <Link to='/'><button className='absolute m-[10px] hover:cursor-pointer border p-[5px] w-[100px] text-center hover:text-blue-800 hover:border-blue-800 rounded-[10px] duration-200'>back</button></Link>
            <Search className='  w-full '/>
        </div>
        <Slider {...settings} className='max-w-[1200px] mx-auto z-[-10]'>
            {bookCovers.map((item,index) => (
                <div key={index} className=' flex justify-center items-center'>
                    <img src={item} alt='cover' className='h-[280px] w-[200px] flex gap-[20px] p-[20px] bg-[rgb(238,238,238)] rounded-[10px] hover:scale-110 duration-500'/>
                    <p className='mt-[10px]'>{bookName[index]}</p>
                    <p className='mb-[20px] font-bold'>{prices[index]}</p>
                    <button className='hover:cursor-pointer hover:shadow-lg rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] duration-200'>Add to cart</button>
                </div>
            ))}
        </Slider>
        <Footer />
    </div>
    </div>
  )
}
