import React from 'react'
import cover1 from '../assets/cover1.jpg'
import cover2 from '../assets/cover2.jpg'
import cover3 from '../assets/cover3.webp'
import cover4 from '../assets/cover4.jpeg'
import cover5 from '../assets/cover5.webp'
import cover6 from '../assets/cover6.jpeg'
import cover7 from '../assets/cover7.jpg'
import cover8 from '../assets/cover8.jpeg'
import cover9 from '../assets/cover9.jpg'
import cover10 from '../assets/cover10.jpg'
import NewProduct from './NewProduct'



export default function NewProductContainer() {

    const bookCovers = [
        cover1,cover2,cover3,cover4,cover5,cover6,cover7,cover8,cover9,cover10
    ]

    const bookName = [
        "Name1","Name2","Name3","Name4","Name5","Name6","Name7","Name8","Name9","Name10"
    ]

    const prices = [
        '10$','12$','15$','20$','10$','9$','19$','12$','17$','14$'
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
    <div>
        <NewProduct covers={bookCovers} names={bookName} settings={settings} price={prices}/>
    </div>
  )
}
