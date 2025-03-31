import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Community = () => {

    useGSAP(() => {
        gsap.to(".crypto", {
            yPercent: -50,
            duration: 11.5,
            repeat: -1,
            ease: "none",
            force3D: true,
        })
    }, [])


    return (
        <section id='community' className='h-[100vh] ranade-font bg-white flex justify-center items-center p-6 max-md:p-6 max-md:px-4 max-md:h-auto'>
            <div className='bento flex flex-col gap-3.5 max-max-w-[1100px] mx-auto max-md:my-10'>
                <div className='flex max-md:flex-col gap-3.5'>
                    <div className='relative overflow-hidden border-2 border-[#4B50AA] rounded-2xl p-6 w-[500px] max-md:w-full bg-linear-to-br from-[#c9def4] to-[#f5ccd4]'>
                        <h1 className='font-bold ranadebold-font text-2xl'>Join the Crypto Orbit</h1>
                        <h2 className='text-3xl font-semibold mt-5'>1,00,000+</h2>
                        <p className='text-sm tracking-wide my-1 mb-6'>Members in Discord</p>

                        <h2 className='text-3xl font-semibold flex mr-2'>50,000+</h2>
                        <p className='text-sm tracking-wide'>Active users</p>

                        <button className='font-bold bg-violet-400/50 hover:bg-violet-500/50 border rounded-full py-1.5 px-4 uppercase tracking-wide right-8 top-8 cursor-pointer mt-6 text-sm'>
                            <a href="https://discord.com/" className='flex items-center'>Join the community <img src={import.meta.env.BASE_URL + "/images/Community/arrowup.svg"} alt="" className='ml-2 w-5' /></a></button>

                        <div className='absolute -right-4.5 scale-100 -bottom-4.5 max-lg:-right-6 max-lg:w-28 max-md:-right-8 max-md:w-25'>
                            <img src={import.meta.env.BASE_URL + "/images/Community/discord.svg"} alt="" className='-rotate-45 select-none' />
                        </div>


                    </div>
                    <div className='relative overflow-hidden border-2 border-[#6f91b4] rounded-2xl p-6 max-w-[400px] max-md:min-w-full bg-linear-to-br from-[#caefd7] to-[#abc9e9]'>
                        <h1 className='font-bold ranadebold-font text-2xl tracking-wide'> Seamless Blockchain Integration</h1>
                        <h2 className='text-xl font-semibold mt-3.5'>Supports 13+ Networks</h2>
                        <p className='text-sm tracking-wide my-1 mb-6'>(Ethereum, Solana, Binance, Polygon, etc.)</p>
                        <h2 className='text-xl font-semibold mt-3.5'>500+ Integrated Protocols</h2>
                        <p className='text-sm tracking-wide my-1 mb-6'>(DeFi, NFT, & more)</p>

                        <div className='absolute crypto top-0 right-3'>
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/bitcoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/avalanche.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/binance.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/cardano.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/dogecoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/ethereum.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/litecoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/polcadot.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/solana.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/terra.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/tether.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/usd coin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/xrp.svg"} alt="" className='w-10 mb-3 select-none' />

                            <img src={import.meta.env.BASE_URL + "/images/Crypto/bitcoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/avalanche.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/binance.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/cardano.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/dogecoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/ethereum.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/litecoin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/polcadot.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/solana.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/terra.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/tether.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/usd coin.svg"} alt="" className='w-10 mb-3 select-none' />
                            <img src={import.meta.env.BASE_URL + "/images/Crypto/xrp.svg"} alt="" className='w-10 mb-3 select-none' />
                        </div>
                    </div>
                </div>

                {/* second row */}

                <div className='flex max-md:flex-col gap-3.5'>
                    <div className='relative overflow-hidden border-2 border-[#dc964b] rounded-2xl p-6 max-w-[400px] max-md:min-w-full bg-linear-to-br from-[#f9c58d] to-[#fbe9d7]'>
                        <h1 className='font-bold ranadebold-font text-2xl tracking-wide'>Secure & Instant Crypto Swaps</h1>
                        <p className='font-semibold text-sm tracking-wide my-1 mb-6'>Seamlessly exchange cryptocurrencies with zero hidden fees and best available rates.</p>

                        <div className='absolutem bottom-5 right-5'>
                            <img src={import.meta.env.BASE_URL + "/images/Community/crypto-swap.png"} alt="" className=' w-70 select-none' />
                        </div>
                    </div>

                    <div className='flex flex-col max-w-[500px] gap-3.5'>
                        <div className='relative overflow-hidden border-2 border-[#c55f8d] rounded-2xl p-6 w-full h-full bg-linear-to-br from-[#faff89] to-[#ea72ad]'>
                            <h1 className='font-bold ranadebold-font text-2xl tracking-wide'>Total Financial Freedom</h1>
                            <p className='text-sm font-semibold mt-3.5 pr-6.5 tracking-wide'>No one can lock your wallet, freeze your funds, or restrict your transactions. You’re in full control.</p>
                            <div className='absolute -bottom-2 -right-2 rotate-15'>
                                <img src={import.meta.env.BASE_URL + "/images/Community/shield.svg"} alt="" className='w-18 select-none' />
                            </div>
                        </div>
                        <div className='relative overflow-hidden border-2 border-[#7b6696] rounded-2xl p-6 w-full h-full bg-linear-to-br from-[#c9def4] to-[#b8a4c9]'>
                            <h1 className='font-bold ranadebold-font text-2xl tracking-wide'>Connect to LEDGER</h1>
                            <p className='text-sm font-semibold mt-3.5 tracking-wide pr-6.5'>Enhance security with hardware protection. Link your Crypto Orbit wallet with Ledger for the best safety and seamless transactions.</p>


                            <img src={import.meta.env.BASE_URL + "/images/Community/ledger.png"} alt="" className='absolute bottom-0 -right-8 w-20 -rotate-50 select-none' />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community