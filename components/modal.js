import { useContext } from "react"
import { modalContex } from "../pages"
import { GrClose } from "react-icons/gr"
import { useMediaQuery } from 'react-responsive'

export function Modal(props) {

    const modal = useContext(modalContex)
    const isScreen = useMediaQuery({
        query: '(max-width: 640px)'
      })
    
    return (
        <div className={modal.modalShow ? "block" : "hidden"}>
            <div onClick={()=>{modal.setmodalShow(false)}} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} className="fixed flex justify-center items-center inset-0 w-screen h-screen">
                <div onClick={(event)=>{event.stopPropagation()}} style={{backgroundColor: 'rgba(255, 255, 255, 1)'}} className="relative bg-stone-900 sm:w-3/4 w-11/12 h-4/5 rounded-xl shadow-lg">
                    <GrClose onClick={()=>{modal.setmodalShow(false)}} size={isScreen ? 30 : 40} className=" absolute right-5 top-5 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
