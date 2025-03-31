import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger)

const Security = () => {

    useGSAP(() => {
        const animtext = new SplitType(".maintext", { types: ["chars", "words"] });

        const t11 = gsap.timeline({
            scrollTrigger: {
                trigger: ".maintext",
                // markers: true,
                start: "10% 70%",
                end: "50% 60%",
                scrub: 3
            }
        })

        t11.from(animtext.chars, {
            opacity: 0,
            transformOrigin: "left center",
            scale: 0,
            y: 30,
            stagger: 0.05,
            ease: "power2.out",
        })
        .from("#glo",{
            opacity: 0,
            scale: 0,
            width: 0,
            height: 0,
            x: -50,
            y: -50,
            ease: "none"
        },"secure")
        .from("#safe",{
            opacity: 0,
            scale: 0,
            width: 0,
            height: 0,
            x: -50,
            y: -50,
            ease: "none",
        },"secure")

    }, [])

    const scrollRef = useRef(null);

    useGSAP(() => {

        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const scrollWidth = scrollRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const maxScroll = scrollWidth - viewportWidth;
            const scrolltl = gsap.timeline();

            mm.add("(max-width: 767px) and (orientation: landscape)", () => {
                scrolltl.to(scrollRef.current, {
                    y: -40,
                    duration: 0.1,
                })
              });
            scrolltl.to(scrollRef.current, {
                x: () => -maxScroll,
                ease: "none",
                duration: 1.5,
                force3D: true,
            })

            ScrollTrigger.create({
                animation: scrolltl,
                trigger: "#scrollid",
                start: "-70px top",
                end: () => "+=" + maxScroll,
                scrub: 1,
                pin: "#scrollid",
                anticipatePin: 1,
                // markers: true,
                invalidateOnRefresh: true,
            });

        });

        return () => ctx.revert;

    }, []);

    useGSAP(() => {
        const cardss = document.querySelectorAll(".cards");

        cardss.forEach((card) => {

            console.log(card)

            const tlc = gsap.timeline({ paused: true })
            tlc.to(card, {
                y: -20,
            })

            card.addEventListener("mouseenter", () => tlc.play())
            card.addEventListener("mouseleave", () => tlc.reverse())

        });

        return () => {
            cardss.forEach((card) => {
                card.removeEventListener("mouseenter", () => tlc.play());
                card.removeEventListener("mouseleave", () => tlc.reverse());
            });
        };
    }, [])

    return (
        <section id='security' className='bg-[#FFFBF5] p-[clamp(1rem,3vw,2.5rem)] sec min-h-[100vh] relative overflow-hidden'>
            <div className='maintext mb-10 mx-18m'>
                <h1 className='ranadebold-font font-semibold text-[clamp(0.8rem,7vw,5.1rem)] leading-30 max-lg:leading-22 max-md:leading-15 mb-4'>Discover <span id='glo' className='relative border bg-[#FCAFD7] w-[clamp(4.1rem,6vw,6.25rem)] h-[clamp(4.1rem,6vw,6.25rem)] -mb-5 overflow-hidden rounded-full select-none'><img src={import.meta.env.BASE_URL + "/images/Securite/globe.svg"} alt="" className='absolute top-0 w-50 inline-block sele-n'/></span> the Unmatched Benefits of Using Cryptoorbit for Your Crypto Needs <span id='safe' className='relative border bg-[#FCAFD7] w-[clamp(4.1rem,6vw,6.25rem)] h-[clamp(4.1rem,6vw,6.25rem)] -mb-5 overflow-hidden rounded-full select-none'><img src={import.meta.env.BASE_URL + "/images/Securite/safebox.svg"} alt="" className='absolute top-0 w-50 inline-block sele-n'/></span></h1>
            </div>

            <section id='scrollid' className="relative w-full h-screen z-40 ml-10">
                <div ref={scrollRef} className="flex w-[clamp(1950px,160vw,2400px)] gap-15 px-10 max-md:px-0">
                    <div className='cards'>
                        <h1 className='ranade-font card-heading'>Complete Portfolio Tracking</h1>
                        <p className='ranade-font cards-para'>Manage and monitor your entire portfolio effortlessly in one place.</p>
                        <img src={import.meta.env.BASE_URL + "/images/Securite/S1.jpeg"} alt="" className='rounded-2xl mt-10 select-none' />
                    </div>
                    <div className='cards'>
                        <h1 className='ranade-font card-heading'>Secure Hardware Wallet Integration</h1>
                        <p className='ranade-font cards-para'>Protect your assets with seamless support for Ledger and Trezor wallets.</p>
                        <img src={import.meta.env.BASE_URL + "/images/Securite/S2.jpeg"} alt="" className='rounded-2xl mt-10 select-none' />
                    </div>
                    <div className='cards'>
                        <h1 className='ranade-font card-heading'>Suspicious Address Detection</h1>
                        <p className='ranade-font cards-para'>Get instant alerts for flagged and potentially unsafe addresses.</p>
                        <img src={import.meta.env.BASE_URL + "/images/Securite/S3.jpeg"} alt="" className='rounded-2xl mt-10 select-none' />
                    </div>
                    <div className='cards'>
                        <h1 className='ranade-font card-heading'>Zero IP Data Collection</h1>
                        <p className='ranade-font cards-para'>We prioritize your privacy—no IP addresses are recorded.</p>
                        <img src={import.meta.env.BASE_URL + "/images/Securite/S4.jpeg"} alt="" className='rounded-2xl mt-10 select-none' />
                    </div>
                    <div className='cards'>
                        <h1 className='ranade-font card-heading'>Anonymous & Secure Transactions</h1>
                        <p className='ranade-font cards-para'>Your financial activities remain private with top-tier security measures.</p>
                        <img src={import.meta.env.BASE_URL + "/images/Securite/S5.jpeg"} alt="" className='rounded-2xl mt-10 select-none' />
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Security