import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const Features = () => {

    useGSAP(() => {

        const fmm1 = gsap.matchMedia();

        fmm1.add("(min-width: 768px)", () => {
            const tl = gsap.timeline()

            tl.from("#box1", {
                opacity: 0,
                y: 500,
                duration: 0.5,
                ease: "slow",
                delay: 0.5

            })
                .to(".heading1", {
                    yPercent: -100,
                    opacity: 0,
                    ease: "none",
                })
                .to("#box1", {
                    height: "80px",
                    duration: 2,
                }, "<")

                .from("#block1", {
                    y: 200,
                    opacity: 0,
                    duration: 1.5,
                }, "<")
                .to("#block1", {
                    y: -50,
                    opacity: 0,
                })


                .from("#box2", {
                    opacity: 0,
                    y: 300,
                    duration: 1.5,
                    ease: "slow",
                })
                .to(".heading2", {
                    yPercent: -100,
                    opacity: 0,
                    ease: "none",
                })
                .to("#box2", {
                    height: "80px",
                    duration: 2,
                }, "<")
                .from("#block2", {
                    y: 50,
                    opacity: 0,
                    duration: 1.5,
                }, "<")
                .to("#block2", {
                    y: -400,
                    opacity: 0,
                })

                .from("#box3", {
                    opacity: 0,
                    y: 200,
                    duration: 1.5,
                    ease: "slow",
                })
                .to(".heading3", {
                    yPercent: -100,
                    opacity: 0,
                    ease: "none",
                })
                .to("#box3", {
                    height: "80px",
                    duration: 2,
                }, "<")
                .from("#block3", {
                    y: 50,
                    opacity: 0,
                    duration: 1.5,
                }, "<")
                .to("#block3", {
                    y: -800,
                    opacity: 0,
                })





            ScrollTrigger.create({
                animation: tl,
                trigger: "#feature",
                start: "top top",
                end: "bottom -200%",
                scrub: 5,
                pin: "#feature",
                anticipatePin: 1,
                // markers: true,
            })
        });
    }, []);


    useGSAP(() => {

        const fmm = gsap.matchMedia();

        fmm.add("(max-width: 767px)", () => {
            const tm = gsap.timeline()

            tm.from("#box1", {
                opacity: 0,
                y: 500,
                duration: 0.5,
                ease: "slow",
                delay: 0.5

            }).to(".heading1", {
                yPercent: -100,
                opacity: 0,
                ease: "none",
            }).to("#box1", {
                height: "80px",
                duration: 2,
            }, "<").from("#box2", {
                opacity: 0,
                y: 300,
                duration: 1.5,
                ease: "slow",
            }).to(".heading2", {
                yPercent: -100,
                opacity: 0,
                ease: "none",
            }).to("#box2", {
                height: "80px",
                duration: 2,
            }, "<").from("#box3", {
                opacity: 0,
                y: 200,
                duration: 1.5,
                ease: "slow",
            }).to(".heading3", {
                yPercent: -100,
                opacity: 0,
                ease: "none",
            }).to("#box3", {
                height: "80px",
                duration: 2,
            }, "<").to(".middle-box", {
                yPercent: -50,
                duration: 5,
            }).to(["#box1", "#box2", "#box3"], {
                opacity: 0
            }, "<")

            ScrollTrigger.create({
                animation: tm,
                trigger: "#feature",
                start: "top top",
                end: "bottom -200%",
                scrub: 5,
                pin: "#feature",
                anticipatePin: 1,
                // markers: true,
            })
        });
    }, []);

    return (
        <section id='feature' className='flex h-[100vh] bg-[#F5FAFF] relative items-center justify-center max-md:h-full max-sm:min-h-full'>
            <div className="grid-container relative max-lg:mt-40 max-md:mt-0 overflow-hidden gap-15 max-lg:gap-8 max-w-[1300px] mx-auto h-175 max-sm:min-h-full">
                <div className="space-y-6">
                    <div id='box1' className="left-box relative bg-linear-to-r from-[#f9cdc3] to-[#facefb] p-[clamp(0.5rem,4vw,1.5rem)] rounded-xl overflow-hidden">
                        <h2 className="ranade-font heading1 text-[clamp(1.5rem,3vw,2.5rem)] max-sm:mr-7 font-semibold mb-20">
                            Create your wallet in seconds.
                        </h2>
                        <div className='absolute ranade-font bottom-6 bg-white/70 text-center text-[16px] p-1 px-4 rounded-4xl max-lg:text-sm'>
                            Simple
                        </div>
                        <img src={import.meta.env.BASE_URL + "/images/Features/thunder.svg"} alt="" className='absolute w-12 top-4 right-3 select-none' />
                    </div>
                    <div id='box2' className="left-box relative bg-linear-to-r from-[#f1e1c2] to-[#fcbc98] p-[clamp(0.5rem,4vw,1.5rem)] rounded-xl overflow-hidden">
                        <h2 className="heading2 ranade-font text-[clamp(1.5rem,3vw,2.5rem)] max-sm:mr-10 font-semibold mb-20">
                            Focus on opportunities, not fees.
                        </h2>
                        <div className='absolute ranade-font bottom-6 bg-white/70 text-center text-[16px] p-1 px-4 rounded-4xl max-lg:text-sm'>
                            Convenient
                        </div>
                        <img src={import.meta.env.BASE_URL + "/images/Features/rocket.svg"} alt="" className='absolute w-12 top-4 right-3 select-none' />
                    </div>
                    <div id='box3' className="left-box relative bg-linear-to-r from-[#95ecb0] to-[#f3f98a] p-[clamp(0.5rem,4vw,1.5rem)] rounded-xl overflow-hidden">
                        <h2 className="ranade-font ranade-font heading3 text-[clamp(1.5rem,3vw,2.5rem)] max-sm:mr-10 font-semibold mb-20 tracking-[0.5px]">
                            One wallet for all your crypto.
                        </h2>
                        <div className='absolute ranade-font bottom-6 bg-white/70 text-center text-[16px] p-1 px-4 maxm-w-[110px] rounded-4xl max-lg:text-sm'>
                            Multichain
                        </div>
                        <img src={import.meta.env.BASE_URL + "/images/Features/blockchain.svg"} alt="" className='absolute w-12 top-4 right-3 select-none' />
                    </div>
                </div>

                <div className="middle-box bg-white shadow-lg relative overflow-hidden rounded-xl border-3 h-min">
                    <video src={import.meta.env.BASE_URL + "/images/Features/cryptoo-video.mp4"} loading="lazy" autoPlay muted loop playsInline className=''></video>
                </div>

                <div className="space-y-6 translate-y-[15%] max-md:hidden">
                    <div id='block1' className="right-box relative bg-linear-to-bl from-[#d3e1f5] to-[#e2eff1] p-[clamp(0.5rem,4vw,1.5rem)] rounded-xl overflow-hidden">
                        <h2 className="ranade-font text-[clamp(1.5rem,3vw,2.1rem)] font-semibold mb-17">
                            Using your social account or Google.
                        </h2>
                        <div className='flex items-center gap-4 max-lg:gap-2 select-none'>
                            <img src={import.meta.env.BASE_URL + "/images/Features/google.svg"} alt="Google" className='w-[clamp(0.5rem,4vw,3.2rem)]' />
                            <img src={import.meta.env.BASE_URL + "/images/Features/facebook.svg"} alt="Facebook" className='w-[clamp(0.5rem,4vw,3.2rem)]' />
                            <img src={import.meta.env.BASE_URL + "/images/Features/x.svg"} alt="Twitter" className='w-[clamp(0.5rem,4vw,3.2rem)]' />
                        </div>
                    </div>
                    <div id='block2' className="right-box relative bg-linear-to-bl from-[#d3e1f5] to-[#e2eff1] p-[clamp(0.5rem,4vw,1.5rem)] rounded-xl overflow-hidden -translate-y-86">
                        <h2 className="ranade-font text-[clamp(1.5rem,3vw,2.1rem)] font-semibold mb-5 leading-11 max-lg:leading-8">
                            Pay gas fees with $Cryptoorbit on all supported blockchains.
                        </h2>
                        <div>
                            <img src={import.meta.env.BASE_URL + "/images/Features/crypto-W.svg"} alt="Wallet" className='w-[clamp(2.5rem,4vw,3.9rem)] select-none' />
                        </div>
                    </div>
                    <div id='block3' className="right-box relative bg-linear-to-bl from-[#d3e1f5] to-[#e2eff1] p-[clamp(0.5rem,4vw,1.1rem)] rounded-xl overflow-hidden -translate-y-178">
                        <h2 className="ranade-font text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-11 max-lg:leading-8 mb-10">
                            Cryptoorbit supports more blockchains, assets and NFTs than any wallet on earth.
                        </h2>
                        <div>
                            <img src={import.meta.env.BASE_URL + "/images/Features/grpcrypto.svg"} alt="Wallet" className='absolute bottom-4 left-5 w-[clamp(3.5rem,6vw,6.9rem)] select-none' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features