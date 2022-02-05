import {GiHamburgerMenu} from "react-icons/gi"
import {BsFillShareFill} from "react-icons/bs"

export function Sidebar(props) {
    return (
        <>
          <div className='fixed hidden sm:flex flex-col h-screen right-0 shadow-xl'>
            <GiHamburgerMenu className='bg-neutral-700 p-2 cursor-pointer' size={55} color='#FFFFFF'/>
            <div className='bg-gradient-to-b from-red-500 to-red-900 h-full flex justify-center'>
              <div className='flex flex-col grow'>
                <div className='w-full flex justify-center flex-col items-center'>
                  {props.children}
                </div>
                <div className='w-full grow flex justify-center items-end'>
                  <BsFillShareFill className='scale-125 my-8 cursor-pointer hover:scale-150' color='#FFFFFF'/>
                </div>
              </div>
            </div>
          </div>
          
          {/* SideBar for sm*/}
          <div className='fixed flex cursor-pointer items-center inset-0 w-16 h-16 sm:hidden'>
            <GiHamburgerMenu className='ml-1' size={55} color='#FFFFFF'/>
          </div>
        </>
    )
}

export function SidebarList(props) {

    return (
        <props.icon className='scale-125 my-8 cursor-pointer hover:scale-150' color={`${props.color ? props.color : "#FFFFFF"}`}/>
    )
}

