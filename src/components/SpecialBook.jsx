import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import special1 from '../assets/special1.png'
import special2 from '../assets/special2.png'
import special3 from '../assets/special3.png'
import special4 from '../assets/special4.png'
import special5 from '../assets/special5.png'
import special6 from '../assets/special6.png'
import { useContext } from 'react'
import { DataContext } from './dataContext/dataContext';





export default function SpecialBook() {

   const {special,setSpecial} = useContext(DataContext)


    const bookCovers = [
        special1,special2,special3,special4,special5,special6
    ];

    const bookName = [
        "Name1","Name2","Name3","Name4","Name5","Name6"
    ]
    const prices = [
        '90','120','100','150','80','110'
    ]

    const handleSpecialAdd = (specialPrice) => {
      setSpecial((prev) => prev + specialPrice)
    }

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
              <h1 className='underline decoration-solid decoration-blue-900 hover:cursor-pointer'> Special book</h1>
              <Link to='/all'><h1 className='-translate-x-[128%] hover:cursor-pointer border p-[5px] w-[100px] text-center hover:text-blue-800 hover:border-blue-800 rounded-[10px] duration-200'>See All</h1></Link>
            </div>
            <Slider {...settings} className='flex justify-center'>
                {bookCovers.map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                    <img src={item} className='w-[150px] h-[200px]' />
                    <p>{bookName[index]}</p>
                    <p className='font-bold'>{prices[index]}$</p>
                    <button className='rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] hover:cursor-pointer shadow-inner hover:shadow-lg duration-200' onClick={() => handleSpecialAdd(Number(prices[index]))}>Add to cart</button>
                </div>
                ))}
            </Slider>
            </div>
        </div>
      );
}
