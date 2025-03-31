import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Footer = () => {

  useGSAP(() => {
    const sendbtn = document.querySelector(".sendbtn")

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const sendbtntl = gsap.timeline({ paused: true });
  
      sendbtntl
        .from(".sendicon", {
          transformOrigin: "left center",
          scale: 0,
        })
        .to(".sendbtn",{
            paddingRight: 30,
            transformOrigin: "left center",
          },"<")
        .to(".sendtext",{
            x: -5,
          },"<");
  
      sendbtn.addEventListener("mouseenter", () => sendbtntl.play());
      sendbtn.addEventListener("mouseleave", () => sendbtntl.reverse());
  
    });

    const sendtl = gsap.timeline({paused: true})

    sendtl.to(".sendbtn",{
      scale: 0.95,
      duration: 0.2,
    })
    .to(".sendbtn",{
      scale: 1,
      duration: 0.2,
    })

    sendbtn.addEventListener("click", () => sendtl.restart())
  })


  return (
    <footer >
      <section className='border rounded-t-3xl bg-black'>
        <div className='flex flex-row max-md:space-y-14 max-md:flex-col max-md:h-auto justify-between my-15 mx-[clamp(1rem,4vw,6.25rem)] max-lg:flex-wrap max-lg:space-y-12'>
          <div className='flex flex-col space-y-5 max-lg:w-full'>
            <img src={import.meta.env.BASE_URL + "/images/Footer/cryptoorbit-logo-w.png"} alt="Cryptoorbit" className='w-70 select-none' />
            <div className='text-white text-sm'>
              &copy; 2025 Cryptoorbit. All rights reserved.
            </div>

            <div className='flex max-sm:flex-col gap-2'>
              <input type="email" placeholder='Your email address' className='ranade-font select-none border-3 max-md:ml-0 rounded-2xl px-5 py-2 text-[15px] w-70 bg-white h-11 max-sm:w-full' />
              <button className='sendbtn ranade-font h-11 flex relative items-center justify-center rounded-2xl px-5 py-1 text-[15px] font-semibold tracking-wider max-md:mx-1m cursor-pointer bg-yellow-500 text-black'><span className='sendtext'>Feedback</span> <img src={import.meta.env.BASE_URL + "/images/Footer/send-icon.png"} alt="" className='sendicon w-5 absolute right-2 select-none max-lg:hidden' /></button>
            </div>


            <div className='flex items-center space-x-4 mt-6 select-none'>
              <a href="https://www.facebook.com/">
                <img src={import.meta.env.BASE_URL + "/images/Footer/facebookw.svg"} alt="" className='w-10' />
              </a>
              <a href="https://www.instagram.com/">
                <img src={import.meta.env.BASE_URL + "/images/Footer/instagramw.svg"} alt="" className='w-11.5' />
              </a>
              <a href="https://x.com/?lang=en">
                <img src={import.meta.env.BASE_URL + "/images/Footer/xw.svg"} alt="" className='w-10' />
              </a>
              <a href="https://in.linkedin.com/">
                <img src={import.meta.env.BASE_URL + "/images/Footer/linkedinw.svg"} alt="" className='w-10' />
              </a>
              <a href="https://discord.com/">
                <img src={import.meta.env.BASE_URL + "/images/Footer/discordw.svg"} alt="" className='w-11.5' />
              </a>
            </div>
          </div>
          
          <div className='flex flex-col'>
            <h3 className='ranade-font text-white font-bold text-[17px] mb-4 uppercase'>Company</h3>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Introduction</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Blog</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Careers</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>About</a>
          </div>

          <div className='flex flex-col'>
            <h3 className='ranade-font text-white font-bold text-[17px] mb-4 uppercase'>Support</h3>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Help Center</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Request Feature</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Bug Bounty</a>
          </div>

          <div className='flex flex-col'>
            <h3 className='ranade-font text-white font-bold text-[17px] mb-4 uppercase'>Legal</h3>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Security</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Privacy</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Terms</a>
            <a href="" className='p-0.5 text-xs font-semibold text-white ranade-font my-1'>Cookie Policy</a>
          </div>

        </div>
      </section>
    </footer>
  )
}

export default Footer