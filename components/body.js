import Image from 'next/image'
import {motion} from "framer-motion"

export function Body(props) {

    return (
        <div className='flex justify-center flex-col sm:mr-16'>
          <div className='relative text-center md:text-left md:flex md:justify-center'>
            <motion.div className='mr-16' initial={{opacity: 0 , y:-30}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} 
              whileHover={{
              scale: 1.05,
              transition: { duration: 0.4 },
            }}>
              <Image src={props.imgSrc} width={450} height={450}/>
            </motion.div>

            <div className='hidden md:flex flex-col justify-center'>

              <div className='hidden md:flex flex-col justify-center mb-6'>
                <div className= 'text-white font-Inter font-extrabold text-5xl'>{props.nameProduct}</div>
                <div className= 'text-white'>{props.category}</div>
                <div className= 'text-white text-5xl'>${props.price}</div>
              </div>

              <div className='flex justify-start mt-6 md:mt-2'>
                <div className='bg-neutral-800 border-2 cursor-pointer px-9 py-2 hover:scale-125 rounded-xl font-bold text-slate-200'>BUY NOW</div>
              </div>

            </div>

          </div>

          <div className='text-center mx-2 mt-4 md:hidden'>
            <div className= 'text-white font-Inter font-extrabold text-6xl'>{props.nameProduct}</div>
            <div className= 'text-white mt-2'>{props.category}</div>
            <div className= 'text-white'>${props.price}</div>
          </div>

          <div className='flex md:hidden justify-center mt-6 md:mt-2'>
            <div className='bg-neutral-800 border-2 cursor-pointer px-9 py-2 hover:scale-125 rounded-xl font-bold text-slate-200'>BUY NOW</div>
          </div>
        </div>
    )
}
