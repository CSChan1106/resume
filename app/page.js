'use client'; 
import Navbar from "./component/Navbar";
import Introduction from "./component/Introduction";
import Education from "./component/Education";
import Skills from "./component/Skills";
import Work_Experience from "./component/Work_Experience";
import My_FYP from "./component/My_FYP";
import Achievements_Awards from "./component/Achievements_Awards";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if(localStorage.theme === 'dark'|| (!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true);
      
    }else{
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Introduction isDarkMode={isDarkMode}/>
      <Education isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Work_Experience isDarkMode={isDarkMode}/>
      <My_FYP isDarkMode={isDarkMode}/>
      <Achievements_Awards isDarkMode={isDarkMode}/>

      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
