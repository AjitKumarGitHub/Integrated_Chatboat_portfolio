import React from "react";
import AboutImg from "../../assets/new_profile_pics_2024.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-left md:flex-wrap  bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">Introduction</h2>
        <div className=" flex md:flex-row flex-col justify-center items-center w-full">
          <div className="md:w-1/3 mb-3 w-full"> 
          <img className=" md:w-80 w-96 h-full md:h-80 rounded-lg" src={AboutImg} alt="About img" />
          </div>
           <div className="ml-16 pb-6 text-center w-full flex flex-col text-lg"> 
            <div className="text-left">
              <p> Myself AJIT KUMAR MANDAL,  I am a Bachelor of Technology student specializing in Computer Science and Engineering at
                 the National Institute of Technology, Patna, with a CGPA of 8.41. My passion for web 
                 development and competitive programming has led me to solve over 1200 problems on platforms
                  like GeeksForGeeks, LeetCode, and CodeForces.
               </p>
              
            </div>
            <div className="text-left">
              <p> I have developed several personal projects, including a real-time chat
              application using React, Node.js, and Socket.io, a portfolio website, and a weather application utilizing the Open Weather API. As a core member of the Google Developer Software Community (GDSC), I engage in initiatives focused on Data Structures and Algorithms and web development. </p>
            </div>
            <div className="text-left">
           <p>
           I am proficient in C, Java, and JavaScript, and experienced with web technologies like HTML5, CSS3, React.js, Node.js, and MongoDB. I also hold a certification from Microsoft for developing a Disney+Hotstar clone.

           In addition to my technical skills, I possess strong soft skills such as time management, adaptability, and problem-solving. I am eager to learn and excited about collaborating on innovative projects.  
           </p>
              
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
