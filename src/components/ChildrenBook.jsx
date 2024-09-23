import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { DataContext } from './dataContext/dataContext';
import { useContext, useState } from 'react'






export default function ChildrenBook() {

    const {childrenBook,setChildrenBook} = useContext(DataContext)


    const handleAddChildrenBook = (priceOfChildrenBook) => {
      setChildrenBook((prev) => prev + priceOfChildrenBook)
    }

    const bookCovers = [
        book1,book2,book3,book4,book5,book6,book7,book8,book9,book11,book12
    ];

    const bookName = [
        "Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8","Name9","Name10","Namw11"
    ]
    const prices = [
        '10','12','15','20','10','9','1','12','17','14','20'
    ]
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
      

      return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)' }} className='w-full'>
            <div className='max-w-[900px] ml-[25%] pt-[50px] pb-[50px] flex flex-col gap-[20px]' >
            <div className='flex gap-[20px] justify-between'>
              <h1 className='underline decoration-solid decoration-blue-900 hover:cursor-pointer'>Children books</h1>
              <Link to='/all'><h1 className='-translate-x-[128%] hover:cursor-pointer border p-[5px] w-[100px] text-center hover:text-blue-800 hover:border-blue-800 rounded-[10px] duration-200'>See All</h1></Link>
            </div>
            <Slider {...settings} className='flex justify-center'>
                {bookCovers.map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                    <img src={item} className='w-[150px] h-[200px]' />
                    <p>{bookName[index]}</p>
                    <p className='font-bold'>{prices[index]}$</p>
                    <button className='rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] hover:cursor-pointer shadow-inner hover:shadow-lg duration-200' onClick={() => handleAddChildrenBook(Number(prices[index]))}>Add to cart</button>
                </div>
                ))}
            </Slider>
            </div>
        </div>
      );
}
