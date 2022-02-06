import { useContext, useState } from "react"
import { modalContex } from "../pages"
import { GrClose } from "react-icons/gr"
import { useMediaQuery } from 'react-responsive'
import Image from "next/image"

export function Modal(props) {

    const modal = useContext(modalContex)
    const isScreen = useMediaQuery({
        query: '(max-width: 640px)'
      })
    
    return (
        <div className={modal.modalShow ? "block" : "hidden"}>
            <div onClick={()=>{modal.setmodalShow(false)}} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} className="fixed flex justify-center items-center inset-0 w-screen h-screen">
                <div onClick={(event)=>{event.stopPropagation()}} style={{backgroundColor: 'rgba(255, 255, 255, 1)'}} className="relative sm:w-3/4 w-11/12 h-4/5 rounded-xl shadow-lg overflow-y-auto">
                    <GrClose onClick={()=>{modal.setmodalShow(false)}} size={isScreen ? 30 : 40} className=" absolute right-5 top-5 cursor-pointer"/>
                    <ModalView/>
                </div>
            </div>
        </div>
    )
}

export function ModalView(props) {

    const [count, setcount] = useState(0)
    const [nama, setnama] = useState("")
    const [alamat, setalamat] = useState("")
    const [wallet, setwallet] = useState("")

    return (
       <div className="lg:flex block lg:flex-row flex-col h-full">
           <div className="overflow-hidden pb-5 flex justify-center Shrink items-center">
            <img src="/img/shoes-hero.png" className="h-full w-full"/>
           </div>
           <div className="py-9 lg:px-0 px-4 grow lg:w-fit">
                <form class="pl-8 lg:pr-24 pr-8 pt-6 pb-8 mb-4 w-full">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Nama
                    </label>
                    <input value={nama} onChange={(x)=>{setnama(x.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama"/>
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
                        Alamat
                    </label>
                    <input value={alamat} onChange={(x)=>{setalamat(x.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" type="text" placeholder="Alamat"/>
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="walletid">
                        WalletID
                    </label>
                    <input value={wallet} onChange={(x)=>{setwallet(x.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="walletid" type="password" placeholder="******************"/>
                    </div>
                    <div class="flex items-center justify-between">
                    <div className="flex flex-col justify-center items-center">
                    <div className="mb-1 font-bold">Count</div>
                    <div className="flex items-center">
                        <button onClick={(e)=>{e.preventDefault(); if(count > 0){setcount(count - 1)}}} className="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 font-extrabold text-white">{"<"}</button>
                        <div className="text-blue-500 p-2">{count}</div>
                        <button onClick={(e)=>{e.preventDefault(); setcount(count + 1)}} className="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 font-extrabold text-white">{">"}</button>
                    </div>
                    </div>
                    <button onClick={(e)=>{e.preventDefault()}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        BUY IT
                    </button>
                    </div>
                </form>
           </div>
       </div>
    )
}
