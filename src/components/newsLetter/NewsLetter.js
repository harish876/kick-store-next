import React, { useState } from "react";
import { TfiTwitterAlt, TfiFacebook, TfiYoutube } from "react-icons/tfi";
import Button from "@/components/button/Button";

export function NewsLetter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  return (
    <div className="flex flex-row space-x-3 justify-between">
      <div className="flex flex-col space-y-2 align-middle">
        <div className="p-2 my-4 space-x-3 w-full">
          <input
            type="text"
            placeholder="Enter your email..."
            className="mt-2 w-72 focus:outline-none border-none"
            onChange={(e) => {
              setNewsletterEmail(e.target.value);
            }}
          />
          <Button
            size="md"
            customClass="px-4 my-auto bg-black text-white tracking-wide h-12 mt-2"
            onClick={() => console.log(newsletterEmail)}
          >
            Subscribe
          </Button>
        </div>
        <div>
          <h4 className="uppercase tracking-normal text-black font-bold text-[0.6rem] m-2">
            Sign up for Exclusive Updates, new arrivals and insider only
            discounts
          </h4>
        </div>
        <div className="flex flex-row space-x-4 text-sm">
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
      <img
        src="https://kickstore.co.in/wp-content/uploads/2022/02/cropped-cropped-WhatsApp-Image-2022-02-10-at-12.52.11-PM-1.jpeg"
        className="p-4"
        height={200}
        width={200}
      />
    </div>
  );
}

export default NewsLetter;
