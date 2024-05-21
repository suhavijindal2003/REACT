import  React from "react";
import Navbar from "./Components/Header";
import Page from "./Components/Home";
import Blue from "./Components/Blue";
import Darkblue from "./Components/Services";
import ProfileSection from "./Components/Profile";
import ClientSection from "./Components/Cilent";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Image1 from '../src/Images/Background.png'



function App(){
 
  return (
    
    <div>
      <div className="relative w-full">
        <img className="absolute bg-cover  bg-no-repeat w-full h-full top-0 z-[-1]"  src={Image1}></img>
         <Navbar/>
          <Page/>
      </div>
        
        <Blue></Blue>
        <Darkblue></Darkblue>
        <ProfileSection></ProfileSection>
        <ClientSection></ClientSection>
        <Blog></Blog>
        <Footer></Footer>
       
    </div>

);
}

export default App