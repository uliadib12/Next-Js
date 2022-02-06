import Image from 'next/image'
import {motion} from "framer-motion"
import { useContext } from 'react'
import { modalContex } from '../pages'
import { cartContex } from './modal'
import { useMediaQuery } from 'react-responsive'
import { BsFillBagFill } from 'react-icons/bs'
import Link from 'next/link'

export function Body(props) {

  const modal = useContext(modalContex)
  const cartCon = useContext(cartContex)
  const isScreen = useMediaQuery({
    query: '(max-width: 640px)'
})

  function setModal(){
    modal.setmodalShow(true)
  }

    return (
        <div className='flex justify-center flex-col sm:mr-16 grow'>
          <div className='relative text-center md:text-left md:flex md:justify-center items-center'>
            <motion.div className='' initial={{opacity: 0 , y:-30}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} 
              whileHover={{
              scale: 1.05,
              transition: { duration: 0.4 },
            }}>
              <Image priority={false} src={props.imgSrc} width={450} height={450}/>
            </motion.div>

            <div className='hidden md:flex sm:ml-6 flex-col justify-center'>

              <div className='hidden md:flex flex-col justify-center mb-6'>
                <div className= 'text-white font-Inter font-extrabold text-5xl'>{props.nameProduct}</div>
                <div className= 'text-white'>{props.category}</div>
                <div className= 'text-white text-5xl'>${props.price}</div>
              </div>

              <div className='flex justify-start mt-6 md:mt-2'>
                <button onClick={setModal} className='bg-neutral-800 border-2 cursor-pointer px-9 py-2 hover:scale-125 rounded-xl font-bold text-slate-200'>BUY NOW</button>
              </div>

            </div>

          </div>

          <div className='text-center mx-2 mt-4 md:hidden'>
            <div className= 'text-white font-Inter font-extrabold text-6xl'>{props.nameProduct}</div>
            <div className= 'text-white mt-2'>{props.category}</div>
            <div className= 'text-white'>${props.price}</div>
          </div>

          <div className='flex md:hidden justify-center mt-6 md:mt-2'>
            <button onClick={setModal} className='bg-neutral-800 border-2 cursor-pointer px-9 py-2 hover:scale-125 rounded-xl font-bold text-slate-200'>BUY NOW</button>
          </div>

          {cartCon.cart.length > 0 && isScreen &&
          <Link href={"/cart"}>
            <div className='fixed bottom-1 left-4'>
              {<BsFillBagFill size={30} className='scale-125 my-8 cursor-pointer' color="#FFFFFF"/>}
              {<div className="absolute bg-red-400 text-white w-4 h-4 bottom-5 rounded-full -right-1 font-bold text-center flex justify-center items-center">{cartCon.cart.length}</div>}  
            </div>
          </Link>
          }

        </div>
    )
}
