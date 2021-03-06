import Head from 'next/head'
import { Logo } from '../components/logo'
import { DropDownList, Navbar, NavbarList } from '../components/navbar'
import {BsFillBagFill} from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import {IoMdSearch} from "react-icons/io"
import { Sidebar, SidebarList } from '../components/sidebar'
import { Body } from '../components/body'
import { Modal } from '../components/modal'
import { createContext, useContext, useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import getConfig from 'next/config'

export const modalContex = createContext()

export default function Home() {
  // console.log(`${publicRuntimeConfig.API_URL}`)
  const { publicRuntimeConfig } = getConfig()
  const notifySucc = () => {toast.success("SUCCESS!!")};
  const notifyErr = (err) => {toast.error(`${err}`)};
  const [modalShow, setmodalShow] = useState(false)
  const [walletShow, setwalletShow] = useState(false)
  const [walletPass, setwalletPass] = useState("")
  const [onClick, setonClick] = useState(false)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setwalletPass("")
    setonClick(false)
  }, [modalShow,walletShow])
  

  function getData(obj) {
    if(obj){
      setonClick(false)
      setloading(true)
      const nama = obj.nama
      const alamat = obj.alamat
      const count = obj.count
      const wallet = obj.wallet
      const produk = obj.produk
      // console.log(`Nama: ${nama} Alamat: ${alamat} Count: ${count} Wallet: ${wallet} WalletPass: ${walletPass}`)
      if(walletPass){
        axios.post(`${publicRuntimeConfig.API_URL}`,{
          "nama": nama,
          "alamat": alamat,
          "count": count,
          "wallet": wallet,
          "walletPass": walletPass,
          "produk": produk
        }).then((res)=>{
          // console.log(res.data,"Respone")
          setloading(false)
          notifySucc()
          setmodalShow(false)
        }).catch((err)=>{
          // console.log(err.response)
          // console.log(err.response.data)
          setloading(false)
          const data = err.response.data
          if(data.hasOwnProperty('message')){
            // console.log(data.message)
            notifyErr("Form Error")
          }
          else if(data.hasOwnProperty('databaseErr')){
            // console.log(data.databaseErr)
            // console.log(err.response)
            notifyErr(data.databaseErr)
          }
          else{
            // console.log(err.response)
            notifyErr('ERROR!!')
          }
        })
      }
    }
  }
  return (
    <>

      <Head>
        <title>My Shoes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
      </Head>

      <main className='relative flex flex-col bg-gradient-to-r from-red-900 via-red-500 to-red-900 w-screen min-h-screen pb-6'>
        <ToastContainer />
        <div id='topBar' className='flex flex-col justify-center sm:flex-row sm:justify-start'>

          <Logo className="flex justify-center sm:justify-start cursor-pointer"/>

          <Navbar>
            <NavbarList isDropdown={true} text="MENS">
              <DropDownList text="a"/>
              <DropDownList text="b"/>
              <DropDownList text="c"/>
            </NavbarList>
            <NavbarList isDropdown={true} text="WOMEN">
              <DropDownList text="a"/>
              <DropDownList text="b"/>
              <DropDownList text="c"/>
            </NavbarList>
            <NavbarList isDropdown={true} text="KIDS">
              <DropDownList text="a"/>
              <DropDownList text="b"/>
              <DropDownList text="c"/>
            </NavbarList>
            <NavbarList isDropdown={false} text="COSTUMIZE"/>
          </Navbar>

          <Sidebar>
            <SidebarList href="/cart" carts={true} icon={BsFillBagFill}/>
            <SidebarList icon={IoLocationSharp}/>
            <SidebarList icon={CgProfile}/>
            <SidebarList icon={IoMdSearch}/>
          </Sidebar>

        </div>
        
          {/* Main Content */}
          <modalContex.Provider value={{modalShow,setmodalShow,walletShow,setwalletShow,onClick,setonClick}}>
            <Body
            imgSrc = "/img/shoes-hero.png"
            nameProduct= "NIKE AIR"
            category = "MEN'S ORIGINAL"
            price = {120}
            />

            <Modal nameProduct= "Nike Air" imgSrc = "/img/shoes-hero.png" price = {120} fun={getData}/>

          </modalContex.Provider>

          {modalShow && walletShow && <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
            <div className='pointer-events-auto bg-white w-80 min-h-48 rounded-lg border-blue-200 border-4 p-4'>
              <div className='font-bold text-lg'>
                Wallet Pass
              </div>
              {(!loading) ? 
              <>
              <div className="mt-6 mb-6">
                <input value={walletPass} onChange={(e)=>{setwalletPass(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="walletPass" type="password" placeholder="*******"/>
              </div>
              <div className='flex gap-2 justify-end'>
                <button onClick={() => {if(walletPass){setonClick(true)}}} className='p-2 hover:scale-110 bg-blue-500 rounded-md font-bold text-white'>OK</button>
                <button onClick={() => {setwalletShow(false)}} className='p-2 hover:scale-110 bg-blue-500 rounded-md font-bold text-white'>CANCLE</button>
              </div>
              </>
               : 
               <>
                <div className='mt-6 flex flex-col justify-center items-center'>
                  <div>Loading...</div>
                  <div><ThreeDots color="#0098FF" height={80} width={80} /></div>
                </div>
               </>}
            </div>
          </div>}

      </main>
    </>
  )
}
