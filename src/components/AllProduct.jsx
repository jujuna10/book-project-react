import React from 'react'
import Search from './Search'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


export default function AllProduct() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    
    const books = [
        "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        "https://covers.openlibrary.org/b/id/8044515-L.jpg",
        "https://covers.openlibrary.org/b/id/7997773-L.jpg",
        "https://covers.openlibrary.org/b/id/8374869-L.jpg",
        "https://covers.openlibrary.org/b/id/8128125-L.jpg",
        "https://covers.openlibrary.org/b/id/8205341-L.jpg",
        "https://covers.openlibrary.org/b/id/7876760-L.jpg",
        "https://covers.openlibrary.org/b/id/8257630-L.jpg",
        "https://covers.openlibrary.org/b/id/8346587-L.jpg",
        "https://covers.openlibrary.org/b/id/7829284-L.jpg",
        "https://covers.openlibrary.org/b/id/8407778-L.jpg",
        "https://covers.openlibrary.org/b/id/8127675-L.jpg",
        "https://covers.openlibrary.org/b/id/8110278-L.jpg",
        "https://covers.openlibrary.org/b/id/8238105-L.jpg",
        "https://covers.openlibrary.org/b/id/8161963-L.jpg",
        "https://covers.openlibrary.org/b/id/8326353-L.jpg",
        "https://covers.openlibrary.org/b/id/8165127-L.jpg",
        "https://covers.openlibrary.org/b/id/8116260-L.jpg",
        "https://covers.openlibrary.org/b/id/8048246-L.jpg",
        "https://covers.openlibrary.org/b/id/8025470-L.jpg"
    ]

    const names = [
        "Name1", "Name2", "Name3", "Name4", "Name5",
        "Name6", "Name7", "Name8", "Name9", "Name10",
        "Name11", "Name12", "Name13", "Name14", "Name15",
        "Name16", "Name17", "Name18", "Name19", "Name20"
      ]

    const prices = [
        "$19", "$11", "$14", "$9", "$20",
        "$12", "$15", "$10", "$13", "$18",
        "$16", "$17", "$14", "$20", "$19",
        "$15", "$10", "$12", "$11", "$13", "$17"
    ];      
    
  return (
    <div className='flex flex-col gap-[200px]'>
        <div className='flex'>
            <Link to='/'><button className='absolute m-[10px] hover:cursor-pointer border p-[5px] w-[100px] text-center hover:text-blue-800 hover:border-blue-800 rounded-[10px] duration-200'>back</button></Link>
            <Search className='  w-full '/>
        </div>
        <Slider {...settings} className='max-w-[1200px] mx-auto z-[-10]'>
            {books.map((item,index) => (
                <div key={index} className=' flex justify-center items-center'>
                    <img src={item} alt='cover' className='h-[280px] w-[200px] flex gap-[20px] p-[20px] bg-[rgb(238,238,238)] rounded-[10px] hover:scale-110 duration-500'/>
                    <p className='mt-[10px]'>{names[index]}</p>
                    <p className='mb-[20px] font-bold'>{prices[index]}</p>
                    <button className='hover:cursor-pointer hover:shadow-lg rounded-[20px] mb-[20px] bg-[rgb(230,213,230)] p-[5px] w-[120px] duration-200'>Add to cart</button>
                </div>
            ))}
        </Slider>
    </div>
  )
}
