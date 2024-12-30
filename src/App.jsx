import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
//import ChatComponent from "./chatComponent";
import ChatbotEmbed from "./ChatbotEmbed";
//const chatboatId=process.env.REACT_APP_CHATBOT_ID;
function App() {
 // console.log(process.env.name);
  
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
        
      <Home />
      <About />
      <Experience />
      <Projects />
      <ChatbotEmbed chatbotId="1vkxx9h-EnFPLtdCLbeKF"/>
      {/* <ChatComponent/> */}
      <Footer />
       
     
    </div>
  );
}

export default App;
