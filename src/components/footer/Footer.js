import React from "react";
import Link from "next/link";
import Button from "@/components/button/Button";
import { TfiTwitterAlt, TfiFacebook, TfiYoutube } from "react-icons/tfi";
import { HiMail } from "react-icons/hi";

const col1 = [
  "Size Chart",
  "Terms of use",
  "Returns",
  "Track Order",
  "About us",
  "Contact us",
];
function Footer() {
  return (
    <div className="bottom-0 hidden mt-48 md:p-10 bg-footer h-auto md:flex flex-row space-x-8 justify-evenly flex-wrap">
      <div className="flex flex-col align-top ">
        <span className="text-left text-gray-800 tracking-normal mb-2">
          Information
        </span>
        <span className=" text-left h-1 bg-slate-900 w-12 mb-4"></span>
        {col1 &&
          col1.map((col) => {
            return (
              <p className="text-sm my-2" key={col}>
                <Link href="/">{col}</Link>
              </p>
            );
          })}
      </div>
      <div className="flex flex-col">
        <div id="f-21">
          <span className="text-left text-gray-800 tracking-normal">
            Follow us
          </span>
          <div className=" text-center h-1 bg-slate-900 w-12 mt-2"></div>
          <div className="flex flex-row space-x-4 text-2xl mt-4">
            <span className="border-2 border-black p-2 rounded-full">
              <TfiTwitterAlt />
            </span>
            <span className="border-2 border-black p-2 rounded-full">
              <TfiFacebook />
            </span>
            <span className="border-2 border-black p-2 rounded-full">
              <TfiYoutube />
            </span>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-left text-gray-800 tracking-normal mb-4">
            Can we help you?
          </span>
          <div className=" text-center h-1 bg-slate-900 w-12 mt-2"></div>
          <span className="flex flex-row justify-center align-middle mt-4">
            <HiMail className="my-auto" />
            <p className="text-sm mx-2 my-auto">
              <Link href="/">Info@kickstore.com</Link>
            </p>
          </span>
          <p className="text-sm my-2">
            <Link href="/">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col align-top ">
        <span className="text-left text-gray-800 tracking-normal mb-2">
          About
        </span>
        <span className=" text-left h-1 bg-slate-900 w-12 mb-4"></span>
        <p className="text-sm flex flex-wrap">
          Kickstore.Com Online Sneaker Boutique.Your one-stop shop for the most
          sought after
          <br />
          footwear on the market, early releases,or limited edition footwear and
          accessories.
          <br />
          Our sneakers are 100% authentic guaranteed or your money back.
          <br />
          Returns are simple, customer service is our #1 priority <br />
          and we do our best to make your shopping experience as pleasant as
          possible.
          <br />
          Please email us at Info@kickzstore.com with any questions
        </p>
      </div>
      <div className="flex flex-col align-top ">
        <span className="text-left text-gray-800 tracking-normal mb-2">
          Newsletter
        </span>
        <span className=" text-left h-1 bg-slate-900 w-12 mb-4"></span>
        <h4>
          Be the first who learns about our <br />
          great promotions!
        </h4>
        <div id="newsletter-container" className="flex flex-row space-x-2">
          <input
            type="text"
            placeholder="Enter your email..."
            className="mt-2 focus:outline-none border-none"
          />
          <Button
            size="md"
            customClass="px-4 my-auto bg-black text-white tracking-wide h-12 mt-2 hover:bg-slate-400"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
