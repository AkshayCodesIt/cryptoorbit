import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import SplitType from 'split-type';

const Hero = () => {

  useGSAP(() => {

    const splittext = new SplitType(".headline", { types: ["chars", "words"] });

    const tl = gsap.timeline()

    tl.from("#spanone", {
      opacity: 0,
      width: 0,
      duration: 0.5,
      ease: "none",
    }).from(splittext.chars, {
      opacity: 0,
      transformOrigin: "left center",
      scale: 0,
      x: -30,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out"
    }, "textanim").from("#spanthree", {
      opacity: 0,
      width: 0,
      duration: 0.5,
      ease: "none",
    }).from("#spantwo", {
      opacity: 0,
      width: 0,
      duration: 0.5,
      ease: "none",
    }, "textanim+=1")
      .from(".dlbtn", {
        opacity: 0,
        y: 100,
        duration: 0.3,
        ease: "none"
      }, "<")
      .from(".lmbtn", {
        opacity: 0,
        y: 100,
        duration: 0.3,
        ease: "none"
      }, "<")

    tl.from(["#sbc", "#bitcoin", "#shiba", "#eth", "#pck", "#poly"], {
      y: -800,
      duration: 1,
      ease: "none",
    })



    gsap.to("#sbc", {
      yPercent: 4,
      rotate: -50,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
    gsap.to("#bitcoin", {
      yPercent: 4,
      rotate: -20,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
    gsap.to("#shiba", {
      yPercent: 4,
      rotate: -20,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
    gsap.to("#eth", {
      yPercent: 4,
      rotate: 30,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
    gsap.to("#pck", {
      yPercent: 4,
      rotate: -100,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })
    gsap.to("#poly", {
      yPercent: 4,
      rotate: 0,
      duration: 4.5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })


    const mm = gsap.matchMedia();
    const dlbtn = document.querySelector(".dlbtn")

    mm.add("(min-width: 1024px)", () => {

      const tl2 = gsap.timeline({ paused: true })
      gsap.defaults({ duration: 0.3 })

      tl2.from(".btnanim", {
        y: 60,
        ease: "none",
        duration: 0.25,
        force3D: "true"
      }).to(".dlbtn", {
        color: "black",
      }, "<")

      dlbtn.addEventListener("mouseenter", () => tl2.play())
      dlbtn.addEventListener("mouseleave", () => tl2.reverse())
    })

    const tl6 = gsap.timeline({ paused: true })

    tl6.to(".dlbtn", {
      scale: 0.95,
      duration: 0.2,
    })
      .to(".dlbtn", {
        scale: 1,
        duration: 0.2,
      })

    dlbtn.addEventListener("click", () => tl6.restart())

    const lmbtn = document.querySelector(".lmbtn")

    mm.add("(min-width: 1024px)", () => {

      const tl3 = gsap.timeline({ paused: true })
      gsap.defaults({ duration: 0.3 })

      tl3.from(".lmimg", {
        transformOrigin: "left center",
        scale: 0,
      }).to(".lmbtn", {
        paddingRight: 50,
        transformOrigin: "left center"
      }, "<").to(".btntext", {
        x: -5,
      }, "<")

      lmbtn.addEventListener("mouseenter", () => tl3.play())
      lmbtn.addEventListener("mouseleave", () => tl3.reverse())

    })

    const tl7 = gsap.timeline({ paused: true })

    tl7.to(".lmbtn", {
      transformOrigin: "center",
      scale: 0.95,
      duration: 0.2,
    })
      .to(".lmbtn", {
        scale: 1,
        duration: 0.2,
      })

    lmbtn.addEventListener("click", () => tl7.restart())
  }, [])



  return (
    <section id='hero' className='flex relative flex-col justify-center items-center h-[100vh] bg-white'>
      <img id='bitcoin' src={import.meta.env.BASE_URL + "/images/Hero/Bitcoin.png"} alt="" className='absolute w-[clamp(30rem,40vw,40rem)] rotate-22 -top-35 max-lg:-top-28 -right-30 max-lg:-right-45 z-20 max-md:hidden select-none' />
      <img id='shiba' src={import.meta.env.BASE_URL + "/images/Hero/shibacoinnew.png"} alt="" className='absolute w-[clamp(40rem,45vw,62.5rem)] rotate-2 -bottom-45 -left-20 max-lg:-left-60 z-20 max-md:hidden select-none' />
      <img id='sbc' src={import.meta.env.BASE_URL + "/images/Hero/sanboxcoin.png"} alt="" className='absolute w-[clamp(28rem,40vw,60.5rem)] -rotate-32 -top-35 max-lg:-top-24 -left-40 z-20 max-md:hidden select-none' />
      <img id='eth' src={import.meta.env.BASE_URL + "/images/Hero/ETHcoin.png"} alt="" className='absolute w-[clamp(25rem,30vw,50.5rem)] rotate-44 bottom-50 -right-45 z-30 max-md:hidden select-none' />
      <img id='pck' src={import.meta.env.BASE_URL + "/images/Hero/pancakecoin.png"} alt="" className='absolute w-[clamp(30rem,40vw,60.5rem)] -rotate-88 -bottom-30 -right-5 max-lg:-right-30 z-20 max-md:hidden select-none' />
      <img id='poly' src={import.meta.env.BASE_URL + "/images/Hero/polycoin.png"} alt="" className='absolute w-[clamp(30rem,40vw,60.5rem)] -rotate-22 top-10 max-lg:top-30 -left-70 max-lg:-left-60 z-20 max-md:hidden select-none' />

      <div className='relative '>
        <h1 className='relative select-text chillax-font z-20 headline text-[clamp(4rem,8vw,6.2rem)] leading-[clamp(4rem,10vw,7rem)] text-center uppercase max-w-[1300px] mt-30 tracking-wide border-blue-600m max-md:text-left max-md:mx-4 max-md:text-[clamp(3.3rem,9vw,4rem)] max-md:mt-20 max-sm:text-[48px]'><span id='spanone' className='inline-block relative border-3 overflow-hidden w-[130px] h-[clamp(20px,30vh,70px)] rounded-4xl mx-4 bg-[#7030A0] max-md:w-[25vw] max-md:h-[6vh] max-sm:ml-0 select-none'><img src={import.meta.env.BASE_URL + "/images/Hero/hero1.svg"} alt="" className='absolute scale-150 top-1' /></span>Secure Your <br className='hidden md:block' />Crypto Future<span id='spantwo' className='inline-block relative border-3 bg-[#ABC8EC] overflow-hidden w-[130px] h-[70px] rounded-4xl mx-4 max-md:w-[25vw] max-md:h-[6vh] select-none'><img src={import.meta.env.BASE_URL + "/images/Hero/hero2.svg"} alt="" className='absolute scale-120 -top-2' /></span>with <br className='hidden max-lg:block' />Cryptoorbit<span id='spanthree' className='inline-block relative max-lg:hidden border-3 bg-[#F5DECB] overflow-hidden w-[130px] h-[70px] rounded-4xl mx-4 max-md:w-[25vw] max-md:h-[6vh] max-sm:ml-0 select-none'><img src={import.meta.env.BASE_URL + "/images/Hero/hero3.svg"} alt="" className='absolute scale-160' /></span></h1>
      </div>

      <div className='flex my-18 max-md:my-10 max-md:flex-col space-y-3 z-30 max-md:w-full'>
        <button className='dlbtn h-14 ranade-font px-10 py-3 mx-4 max-md:mx-8 text-xl text-white bg-black relative tracking-wider rounded-full font-semibold cursor-pointer z-30 overflow-hidden border-3 border-black'>
          <div className='btnanim max-lg:hidden absolute w-full -z-1 h-18.5 bg-linear-to-r from-[#fbd07c] to-[#f7f779] left-0 rounded-2xl -top-1.5'></div>
          Get Started</button>

        <button className='lmbtn h-14 ranade-font px-10 py-3 mx-4 max-md:mx-8 text-xl text-black bg-linear-to-r from-[#b5c6e0] to-[#ebf4f5] relative tracking-wider rounded-full font-semibold cursor-pointer z-30 overflow-hidden border-3 border-black'>
          <p className='btntext relative max-md:max-w-35 max-md:mx-auto'>Learn more <img src={import.meta.env.BASE_URL + "/images/Hero/read.png"} alt="" className='lmimg absolute -right-9.5 -mt-0.5 w-8 top-0 select-none max-lg:hidden' /></p>
        </button>
      </div>

    </section>
  )
}

export default Hero