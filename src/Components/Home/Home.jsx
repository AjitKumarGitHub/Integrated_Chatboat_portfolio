import React from "react";
import avatarImg from "../../assets/new_profile_pics_2024.jpg";
import TextChange from "../TextChange";
 
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          A Final Year Computer Science Student from National Institute Of Technology Patna
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <a href="https://drive.google.com/file/d/1PSTaG7RIHm2JulwxJgfkmpfTAyZbb0Tn/view?usp=sharing" download="resume.pdf">  
      <button>Download Resume</button>  
    </a>  
        </button>
      </div>
      <div className="border-2 md:w-96 md:h-96 w-full h-full rounded-md flex flex-col justify-center flex-wrap">
        <img className=" md:w-96 md:h-96" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
