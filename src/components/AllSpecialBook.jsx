import React from 'react'
import Slider from "react-slick";
import Search from './Search'
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import special1 from '../assets/special1.png'
import special2 from '../assets/special2.png'
import special3 from '../assets/special3.png'
import special4 from '../assets/special4.png'
import special5 from '../assets/special5.png'
import special6 from '../assets/special6.png'
import special7 from '../assets/special1.png'
import special8 from '../assets/special2.png'
import special9 from '../assets/special3.png'
import special10 from '../assets/special4.png'
import special11 from '../assets/special5.png'
import special12 from '../assets/special6.png'
import special13 from '../assets/special1.png'
import special14 from '../assets/special2.png'
import special15 from '../assets/special3.png'
import special16 from '../assets/special4.png'
import special17 from '../assets/special5.png'
import special18 from '../assets/special6.png'

export default function AllSpecialBook() {

    const bookCovers = [
        special1,special2,special3,special4,special5,special6,special7,special8,special9,special10,special11,special12,special13,special14,special15,special16,special17,special18
    ]

    const bookName = [
        "Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8","Name9","Name10","Name11","Name12","Name13","Name14","Name15","Name16","Name17","Name18",
    ]
    const prices = [
        '90','120','100','150','80','110','200','120','110','80','90','120','100','190','100','180','170','120'
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
                    <p className='mb-[20px] font-bold'>{prices[index]}$</p>
                    <button className='hover:cursor-pointer hover:shadow-lg rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] duration-200'>Add to cart</button>
                </div>
            ))}
        </Slider>
        <Footer />
    </div>
    </div>
  )
}
