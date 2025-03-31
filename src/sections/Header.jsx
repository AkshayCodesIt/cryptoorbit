import React from 'react'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-scroll'

const Header = () => {

  const [menuopen, setmenuopen] = useState(false)

  useGSAP(() => {
    gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "none" });

    const dlbtnnav = document.querySelector(".dlbtnnav")

    const tl2 = gsap.timeline({ paused: true })
    gsap.defaults({ duration: 0.3 })

    tl2.from(".navbtn", {
      y: 60,
      ease: "none",
      duration: 0.25,
      force3D: "true"
    }).to(".dlbtnnav", {
      color: "black",
    }, "<")

    dlbtnnav.addEventListener("mouseenter", () => tl2.play())
    dlbtnnav.addEventListener("mouseleave", () => tl2.reverse())
  }, []);

  useGSAP(() => {
    let isAnimating = false;

    const handleScroll = (ele) => {
      if (window.scrollY < 100) return;

      if (isAnimating) return; 
      isAnimating = true;

      requestAnimationFrame(() => {
        if (ele.deltaY > 0 ) {
          gsap.to(".nav", {
            y: -100,
            duration: 0.4,
            ease: "none",
          });
        } else if (ele.deltaY < 0) {
          gsap.to(".nav", {
            y: 0,
            duration: 0.4,
            ease: "none",
          });
        }
        isAnimating = false;
      });
    };

    window.addEventListener("wheel", handleScroll);
  });

  useGSAP(() => {
    const hdlbtn = document.querySelector(".hdlbtn")

    const hdltl = gsap.timeline({paused: true})
    
        hdltl.to(".hdlbtn",{
          scale: 0.95,
          duration: 0.2,
        })
        .to(".hdlbtn",{
          scale: 1,
          duration: 0.2,
        })
    
        hdlbtn.addEventListener("click", () => hdltl.restart())
  })


  return (

    <header className='fixed nav top-0 left-0 z-50 w-full px-5 max-lg:px-3 max-md:px-1.5 py-3 m-auto'>
      <div className='nav-blur flex justify-between items-center border border-gray-300 shadow-md rounded-full px-1 md:py-1'>
        <div className='flex flex-row shrink-0 drop-shadow h-13'>
          <img src={import.meta.env.BASE_URL + "/images/Header/logoco-b.svg"} alt="artfolio" className='object-cover shrink-0 h-full p-2 select-none' />
        </div>

        {/* Desktop menu */}
        <ul className='hidden lg:flex lg:space-x-15 space-x-8 font-medium'>
          <li>
            <Link to="hero" smooth={true} duration={500} offset={0} className='ranade-font cursor-pointer text-sm font-semibold hover:text-gray-600'>
              Home
            </Link>
          </li>
          <li>
            <Link to="feature" smooth={true} duration={500} offset={0} className='ranade-font cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Features
            </Link>
          </li>
          <li>
            <Link to="community" smooth={true} duration={500} offset={0} className='ranade-font cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Community
            </Link>
          </li>
          <li>
            <Link to="security" smooth={true} duration={500} offset={0} className='ranade-font cursor-pointer text-sm font-semibold hover:text-gray-500'>
              Security
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500} offset={0} className='ranade-font cursor-pointer text-sm font-semibold hover:text-gray-500'>
              FAQ
            </Link>
          </li>
        </ul>

        <button className='dlbtnnav hdlbtn hidden lg:block ranade-font px-5 py-2 my-1 mr-2 ml-24m text-xlm text-white bg-black relative tracking-wider rounded-full font-semibold cursor-pointer z-10 overflow-hidden border-3 border-black'>
          <div className='navbtn absolute w-full -z-1 h-18.5 bg-linear-to-r from-[#fbd07c] to-[#f7f779] left-0 rounded-2xl -top-1.5'></div>
          Get Started</button>

        <button className="lg:hidden z-50 size-9 bg-black rounded-full flex justify-center max-lg:mr-2 items-center cursor-pointer"
          onClick={() => setmenuopen(!menuopen)}
        >
          <img
            src={import.meta.env.BASE_URL + `/images/Header/${menuopen ? "close-y" : "menu-y"}.svg`}
            alt="menu"
            className="size-6.5 object-contain headericon"
          />

        </button>

        {/* mobile menu */}

        <div id='menu-blur' className={`absolute overflow-hidden lg:hidden top-18 left-0 w-full bg-yellow-600m rounded-2xl flex flex-col items-center gap-6 font-semibold text-lg transform transition-all duration-600 ease-in-out ${menuopen ? 'translate-y-0 opacity-100 bg-linear-to-br from-[#ffeda0] to-[#ffa585]' : 'scale-0 origin-top-right opacity-0 pointer-events-none'}`}
        >
          <ul className='flex flex-col space-y-6 py-16 items-center w-full nav-blur uppercase'>
            <li>
              <Link to="hero" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='ranade-font cursor-pointer text-sm font-semibold hover:text-[#c9795c]'>
                Home
              </Link>
            </li>
            <li>
              <Link to="feature" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='ranade-font cursor-pointer text-sm font-semibold hover:text-[#c9795c]'>
                Features
              </Link>
            </li>
            <li>
              <Link to="community" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='ranade-font cursor-pointer text-sm font-semibold hover:text-[#c9795c]'>
                Community
              </Link>
            </li>
            <li>
              <Link to="security" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='ranade-font cursor-pointer text-sm font-semibold hover:text-[#c9795c]'>
                Security
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500} offset={0} onClick={() => setmenuopen(false)} className='ranade-font cursor-pointer text-sm font-semibold hover:text-[#c9795c]'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header >
  )
};

export default Header