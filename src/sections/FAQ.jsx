import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

const faqs = [
  {
    question: "What exactly is Cryptoorbit, and how does it function in the ever-evolving landscape of digital currencies?",
    answer: "Cryptoorbit is a secure crypto wallet designed for easy management of your digital assets. It offers a user-friendly interface and advanced security features. With Cryptoorbit, you can confidently store, send, and receive cryptocurrencies."
  },
  {
    question: "Is my data truly safe from unauthorized access and potential breaches?",
    answer: "Yes, your data is protected with state-of-the-art encryption and security protocols. We prioritize user privacy and implement measures to safeguard your information. You can trust Cryptoorbit to keep your assets secure."
  },
  {
    question: "How to Successfully Recover Your Wallet?",
    answer: "If you forget your password, you can recover your wallet using the recovery phrase provided during setup. Ensure you keep this phrase secure and accessible. Follow the on-screen instructions to regain access to your wallet."
  },
  {
    question: "What currencies are supported?",
    answer: "Cryptoorbit supports a wide range of cryptocurrencies including Bitcoin, Ethereum, and many altcoins. We continuously update our platform to include new currencies. Check our website for the latest list of supported assets."
  },
  {
    question: "How to contact support?",
    answer: "You can reach our support team through the contact form on our website. We strive to respond to all inquiries promptly. Your satisfaction is our priority, and we are here to help."
  }
];

const FAQ = () => {



  useGSAP(() => {
    const faqtext = new SplitType(".faqtitle", { types: ["chars", "words"] });

    const tlfaq = gsap.timeline({
      scrollTrigger: {
        trigger: ".faqtitle",
        start: "top 82%",
        end: "bottom 82%",
        scrub: 2,
      }
    })
    
    tlfaq.from(faqtext.chars, {
      opacity: 0,
      transformOrigin: "left bottom",
      scale: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out"
    }).from("#faqimg",{
      opacity: 0,
      scale: 0,
      x: -10,
      transformOrigin: "left center",
    })

  })


  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  useEffect(() => {
    faqs.forEach((_, index) => {
      gsap.set(answerRefs.current[index], { height: 0, opacity: 0 });
    });
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      gsap.to(answerRefs.current[index], { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
      setOpenIndex(null);
    } else {
      gsap.to(answerRefs.current[index], { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
      if (openIndex !== null) {
        gsap.to(answerRefs.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
      }
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="relative bg-white ">
      <div className=" max-w-7xl mx-auto p-4 max-lg:px-6 max-md:px-4 pb-30 faqsec">
        <div className="my-10">
          <h1 className="faqtitle ranade-font font-bold text-[clamp(4rem,8vw,6rem)]">FAQs<img id="faqimg" src={import.meta.env.BASE_URL + "/images/FAQ/faqside.svg"} alt="" className="w-[clamp(6rem,12vw,8.75rem)] inline-block mb-4 select-none"/></h1>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="ranade-font mb-6 border-2 rounded-2xl overflow-hidden">
            <button
              className="w-full flex justify-between cursor-pointer items-center p-[clamp(0.5rem,2vw,2rem)] bg-linear-to-br from-[#ebf4f5] to-[#b5c6e0] hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left font-bold text-[clamp(15px,4vw,30px)] m-2 max-w-[89%] leading-13 max-lg:leading-12 max-md:leading-11 max-sm:leading-8">{faq.question}</span>
              <img
                src={openIndex === index ? import.meta.env.BASE_URL + "/images/FAQ/close.svg" : import.meta.env.BASE_URL + "/images/FAQ/close.svg"}
                alt=""
                className={`border-2 bg-radial from-[#f7f779] from-40% to-[#fbd07c] w-[clamp(2.5rem,6vw,3.37rem)] select-none rounded-4xl p-2 icon-transition ${openIndex === index ? "rotate-180" : "rotate-45"
                  }`}
              />
            </button>
            <div ref={(el) => (answerRefs.current[index] = el)} className="overflow-hidden">
              <p className="p-[clamp(1.2rem,2vw,2rem)] bg-[#ebf4f5e5] text-gray-700 text-[clamp(12px,3vw,20px)] font-bold tracking-wide leading-8 max-md:leading-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
