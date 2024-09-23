import React, { useEffect, useState } from 'react'

import one from '../assets/1.jpg'
import two from '../assets/2.webp'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import logo from '../assets/book.png'
import Search from './Search.jsx'

export default function Header() {
    const [index, setIndex] = useState(0)
    const [indexText, setIndexText] = useState(0)



    const bookHeaderImages = [one, two, three, four, five, six, seven]

    const heroSectionText = ["Discover New Worlds","Dive into Captivating Stories","Find Your Next Favorite Book","Explore Our Book Collection","Immerse Yourself in Great Stories","Experience the Joy of Reading","Embark on a Literary Adventure"]

    // cvlis hero section potoebs
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % bookHeaderImages.length);
        }, 4000);

        return () => clearInterval(interval)
    }, []);


    // cvlis teqstebs
    useEffect(() => {
        const interval = setInterval(() => {
            setIndexText((prev) => (prev + 1) % heroSectionText.length);
        }, 4000);

        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <Search />
            <img src={logo} className='w-[50px] absolute m-[20px] drop-shadow-[0px_0px_17px_rgb(255_255_255)] rounded-[20%]]'/>
            <img src={bookHeaderImages[index]} className="w-full h-[800px] object-cover transition-opacity duration-1000" />
            <p className='absolute top-[500px] left-[200px] text-white text-[35px] font-bold bg-[rgba(0,0,0,0.5)] rounded-[20px] p-[10px] drop-shadow-[0px_0px_17px_rgb(255_255_255)]'>{heroSectionText[indexText]}</p>
        </div>
    );
}
