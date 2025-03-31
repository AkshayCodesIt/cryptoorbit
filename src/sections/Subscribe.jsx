import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Subscribe = () => {

  useGSAP(() => {
    gsap.to("#plane",{
      y: 20,
      duration: 5.5,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      rotate: -8,
    })
    gsap.to("#cd1",{
      x: -20,
      duration: 5.5,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })
    gsap.to("#cd2",{
      x: -20,
      duration: 5.5,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })
    gsap.to("#cd3",{
      x: 30,
      duration: 5.5,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })
    gsap.to("#cd4",{
      x: 20,
      duration: 5.5,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })


    const subtlb = document.querySelector(".subbtn")
    const subtl = gsap.timeline({paused: true})

    subtl.to(".subbtn",{
      scale: 0.95,
      duration: 0.2,
    })
    .to(".subbtn",{
      scale: 1,
      duration: 0.2,
    })

    subtlb.addEventListener("click", () => subtl.restart())
  },[])


  return (
    <section className='h-[100vh] w-full flex flex-col relative overflow-hidden items-center justify-center p-4'>
      <div className='w-full flex flex-col relative overflow-hidden items-center justify-center h-full max-lg:px-2 rounded-3xl bg-radial-[at_50%_595%] from-[#99FDE9]  to-[#EBE6F6] to-90%'>
       
        <div className='flex flex-col items-center my-6 z-10'>
          <h1 className='ranade-font relative text-center text-[clamp(2.5rem,5vw,4.5rem)] font-bold mt-50'>
            <img id='plane' src={import.meta.env.BASE_URL + "/images/Subscribe/paper-plane.svg"} alt="" className='w-[clamp(6rem,15vw,15rem)] absolute -top-35 left-[40%] z-6 select-none'/><img id='cd1' src={import.meta.env.BASE_URL + "/images/Subscribe/cd1.svg"} alt="" className='absolute w-[clamp(8rem,24vw,17.5rem)] -top-40 left-[22%] z-5 opacity-93 select-none'/><img id='cd3' src={import.meta.env.BASE_URL + "/images/Subscribe/cd3.svg"} alt="" className='absolute w-[clamp(8rem,25vw,17.5rem)] -top-24 left-[10%] z-4 select-none'/>
            <img id='cd2' src={import.meta.env.BASE_URL + "/images/Subscribe/cd2.svg"} alt="" className='w-[clamp(10rem,28vw,18.75rem)] absolute -top-22 right-[23%] z-7 opacity-93 select-none'/><img id='cd4' src={import.meta.env.BASE_URL + "/images/Subscribe/cd4.svg"} alt="" className='w-[clamp(7rem,20vw,12.5rem)] absolute -top-30 right-[15%] z-2 select-none'/>
            Stay Updated with Cryptoorbit
          </h1>
          <p className='ranade-font text-[clamp(0.25rem,2vw,1.25rem)] max-w-4xl text-center my-6'>Join our newsletter for the latest insights and updates on crypto wallets. Don’t miss out on essential news that can help you navigate the crypto landscape.</p>
        </div>

        <div className='w-full z-10'>
          <div className='max-w-[900px] mx-auto flex max-md:flex-col max-md:gap-3.5 max-lg:px-5 max-md:px-1.5'>
            <input type="email" id='email' placeholder='Your email address' className='ranade-font select-none border-3 mr-2 max-md:m-0 rounded-4xl px-[clamp(2rem,3vw,2.5rem)] py-[clamp(1rem,2vw,1.25rem)] text-[clamp(1rem,3vw,1.5rem)] max-md:h-[clamp(3.5rem,3vh,4.5rem)] w-full bg-white' />
            <button className='ranade-font subbtn max-md:h-[clamp(3.5rem,3vh,4.5rem)] max-md:w-full rounded-4xl px-[clamp(2rem,3vw,2.5rem)] py-[clamp(1rem,2vw,1.25rem)] text-[clamp(1rem,3vw,1.5rem)] ml-2 max-md:m-0 cursor-pointer bg-black text-white'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe