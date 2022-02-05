import { useContext } from "react"
import { modalContex } from "../pages"

export function Modal(props) {

    const modal = useContext(modalContex)
    
    return (
        <div className={modal.modalShow ? "" : "hidden"}>
            <div onClick={()=>{modal.setmodalShow(false)}} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} className="fixed flex justify-center items-center inset-0 w-screen h-screen">
                <div onClick={(event)=>{event.stopPropagation()}} style={{backgroundColor: 'rgba(255, 255, 255, 1)'}} className="bg-stone-900 w-3/4 sm:h-4/5 h-3/5 rounded-xl shadow-lg"/>
            </div>
        </div>
    )
}
