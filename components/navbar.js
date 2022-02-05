import { useState, useEffect } from "react"
import {IoIosArrowDown} from "react-icons/io"

export function Navbar(props) {
    return (
        <nav className='text-white flex justify-center items-center sm:grow sm:justify-center sm:gap-7 gap-9 text-sm sm:text-base'>
          {props.children}    
        </nav>
    )
}

export function NavbarList(props) {
    const [isHover, setisHover] = useState(false)

    return (
        <>
            <div className="relative">
                <div onMouseEnter={()=>{if(props.isDropdown){setisHover(true)}}} onMouseLeave={()=>{if(props.isDropdown){setisHover(false)}}} className={`${props.isDropdown == true ? "flex flex-row items-center": ""} gap-2 mx-2 cursor-pointer font-Lato hover:scale-110`}>
                    {props.text} {props.isDropdown == true ? <IoIosArrowDown/>: <></>} 
                </div>
                <div onMouseEnter={()=>{setisHover(true)}} onMouseLeave={()=>{setisHover(false)}} className={`${isHover ? "absolute" : "hidden"} bg-neutral-700 w-28 cursor-pointer z-10 rounded-lg shadow-lg`}>
                    {props.children}
                </div> 
            </div>
        </>
    )
}

export function DropDownList(props) {

    return (
        <div className='text-white font-bold px-2 pt-1 pb-1 border-b-2 border-white last:border-b-0'>{props.text}</div>
    )
}
