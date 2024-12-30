import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
   
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 w-full">
        <ProjectCard
          title="Weather Website"
          main="This project can ensure that user can get the complete weather information in real-time from anywhere and this is
well organized weather app"
         url="https://weather-app-pied-pi.vercel.app/" surl="https://github.com/AjitKumarGitHub/forecast"/>
        <ProjectCard
          title="Real-Time-chatApp"
          main="The aim of this chat application is to chat in real time
– This app has very good User Interface and is very responsive web application. Many tools and stacks are used to"
        url="https://github.com/AjitKumarGitHub/Real-Time-Chat_App" surl="https://github.com/AjitKumarGitHub/Real-Time-Chat_App"/>
        <ProjectCard
          title="PortFolio Website"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        url="https://github.com/AjitKumarGitHub/PortFolio-website" surl="https://github.com/AjitKumarGitHub/PortFolio-website"/>
      </div>
    </div>
  );
};

export default Projects;
