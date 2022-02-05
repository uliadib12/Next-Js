import Image from "next/image"

export function Logo(props) {

    return (
        <div className={props.className}>
            <div className='ml-5 relative mb-6'>
              <Image src={"/img/shoes.svg"} width={60} height={60} />
              <div className={`font-PlayFair absolute top-[58px] -left-2 font-medium text-white whitespace-nowrap text-[15px]`}>MY SHOES</div>
            </div>
          </div>
    )
}
