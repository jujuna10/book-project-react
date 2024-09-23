import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewProduct({covers, names, settings,price}) {
  return (
    <div style={{ backgroundColor: 'rgb(245, 245, 245)' }} className='w-full'>
        <div className='max-w-[900px] ml-[25%] pt-[50px] pb-[50px] flex flex-col gap-[20px]' >
        <div className='flex gap-[20px] justify-between'>
          <h1 className='underline decoration-solid decoration-blue-900 hover:cursor-pointer'>New books</h1>
          <Link to='/all'><h1 className='-translate-x-[128%] hover:cursor-pointer border p-[5px] w-[100px] text-center hover:text-blue-800 hover:border-blue-800 rounded-[10px] duration-200'>See All</h1></Link>
        </div>
        <Slider {...settings} className='flex justify-center'>
            {covers.map((item, index) => (
            <div key={index} className='flex flex-col items-center'>
                <img src={item} className='w-[150px]' />
                <p>{names[index]}</p>
                <p className='font-bold'>{price[index]}</p>
                <button className='rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] hover:cursor-pointer shadow-inner hover:shadow-lg duration-200'>Add to cart</button>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
}
