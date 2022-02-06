import { createContext, useContext, useEffect, useState } from "react"
import { modalContex } from "../pages"
import { GrClose } from "react-icons/gr"
import { useMediaQuery } from 'react-responsive'
import { BsCartPlusFill } from "react-icons/bs"

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
                    <ModalView imgSrc={props.imgSrc} produk = {props.nameProduct} />
                </div>
            </div>
        </div>
    )
}

export function ModalView(props) {
    
    const modal = useContext(modalContex)
    const [count, setcount] = useState(1)
    const [nama, setnama] = useState("")
    const [alamat, setalamat] = useState("")
    const [wallet, setwallet] = useState("")
    const produk = props.produk

    const cartCon = useContext(cartContex)
    
    
    function onBuy(){
        
    }

    function onCart(){
        if(count && nama && alamat && wallet){
            var obj = {count,nama,alamat,wallet,produk}
            cartCon.setcart([...cartCon.cart,obj])
            setcount(1)
            setnama("")
            setalamat("")
            setwallet("")
            modal.setmodalShow(false)
        }
    }
    
    return (
       <div className="lg:flex block lg:flex-row flex-col h-full">
           <div className="overflow-hidden pb-5 flex justify-center Shrink items-center">
            <img src={props.imgSrc} className="h-full w-full"/>
           </div>
           <div className="py-9 lg:px-0 px-4 grow lg:w-fit">
                <form className="pl-8 lg:pr-24 pr-8 pt-6 pb-8 mb-4 w-full">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Nama
                    </label>
                    <input value={nama} onChange={(x)=>{setnama(x.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nama"/>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alamat">
                        Alamat
                    </label>
                    <input value={alamat} onChange={(x)=>{setalamat(x.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" type="text" placeholder="Alamat"/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="walletid">
                        WalletID
                    </label>
                    <input value={wallet} onChange={(x)=>{setwallet(x.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="walletid" type="password" placeholder="******************"/>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-1 font-bold">Count</div>
                            <div className="flex items-center">
                                <button onClick={(e)=>{e.preventDefault(); if(count > 1){setcount(count - 1)}}} className="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 font-extrabold text-white">{"<"}</button>
                                <div className="text-blue-500 p-2">{count}</div>
                                <button onClick={(e)=>{e.preventDefault(); setcount(count + 1)}} className="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 font-extrabold text-white">{">"}</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={(e)=>{e.preventDefault()}} className="bg-blue-500 hover:bg-blue-700 hover:font-extrabold mr-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                BUY IT
                            </button>
                            <button onClick={(e)=>{e.preventDefault(); onCart()}} className="bg-white hover:font-extrabold text-blue-500 border-blue-500 border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <BsCartPlusFill className="hover:scale-125"/>
                            </button>
                    </div>
                    </div>
                    
                </form>
           </div>
       </div>
    )
}

export function CartProvider(props) {
    const [cart, setcart] = useState([])

    useEffect(() => {
        var data = JSON.parse(localStorage.getItem('cart'))
        if(data == null){
            data = []
        }
        setcart(data)
    }, [])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
    return (
        <cartContex.Provider value={{cart, setcart}}>
            {props.children}
        </cartContex.Provider>
    )
}


export const cartContex = createContext()