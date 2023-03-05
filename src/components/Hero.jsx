import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../assets/woman_hero.png";

const Hero = () => {
  return (
    <section className=" h-[570px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="bg-red-500 w-10 h-[2px] mr-3"></div>
            <div>New Trends</div>
          </div>
          <h1 className="text-[50px] lg:text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span>WOMEN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover Mor
          </Link>
        </div>
        <div className="hidden lg:block ">
          <img src={WomanImg} className="w-[189px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
