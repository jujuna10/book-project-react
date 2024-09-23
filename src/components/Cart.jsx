import React, { useContext, useState } from 'react'
import { DataContext } from './dataContext/dataContext'
import cart from '../assets/shopping-bag.png'


export default function Cart() {

    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const {newBook,childrenBook,special} = useContext(DataContext)
    const sumOfBookPrice = newBook + childrenBook + special
    console.log(sumOfBookPrice)


  return (
    <div>
        <div>
            <img src={cart} alt="cart" className='w-[59px] absolute top-[1%] left-[95%] drop-shadow-[0px_0px_20px_rgb(255_255_255)] hover:cursor-pointer' onClick={handleClick} />
        </div>

        {click && (
            <div className='absolute top-[10%] left-[85%] w-[200px] h-auto bg-[rgb(250,250,241)] rounded-[10px]'>
                {sumOfBookPrice === 0 ? (<p>Cart is empty</p>) : (<div className='m-[10px]'><p>{newBook}$ -  New book</p> <p>{childrenBook}$ -  Children book</p> <p>{special}$ -  Special</p> <hr className='bg-black p-[1px]' /> <p>total {sumOfBookPrice}$</p></div>)}
            </div>
        )}
    </div>
  )
}
