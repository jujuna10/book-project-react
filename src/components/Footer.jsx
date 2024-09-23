import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tik-tok.png'

export default function Footer() {
  return (
    <div className='min-h-full w-full relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,101.3C672,96,768,96,864,117.3C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className='absolute'></path></svg>
        <div className='flex justify-between '>
            <div className='absolute bottom-[150px] left-[50px]'>
                <p className=' text-white left-[50px]'>Addres: kdokdkd 10</p>
                <p className=' text-white'>Tel:3093930309</p>
                <p className=' text-white'>Email: kdokd@gmail.com</p>
            </div>

            <div className='flex flex-col gap-[10px] absolute bottom-[100px] right-[100px]'>
                <div className='hover:bg-blue-700 p-[10px] rounded-[10px] duration-200'>
                  <img src={facebook} className='w-[25px] filter invert' alt="Facebook" />
                </div>
                <div className='hover:bg-blue-700 p-[10px] rounded-[10px] duration-200'>
                  <img src={instagram} className='w-[25px] filter invert' alt="Instagram" />
                </div>
                <div className='hover:bg-blue-700 p-[10px] rounded-[10px] duration-200'>
                  <img src={tiktok} className='w-[25px] filter invert' alt="TikTok" />
                </div>
            </div>

        </div>
    </div>
  )
}
