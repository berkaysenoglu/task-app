import Header from "./components/Header";
import UserList from "./components/UserList";
import { createContext, useState, useEffect } from "react";
import { UseThemeContext } from "./contexts/ThemeContext";




function App() {
  const {theme,toggleTheme} = UseThemeContext();
  
   useEffect(() => {
     //Tema değiştiğinde body'nin arka plan rengini güncelle
    document.body.style.backgroundColor = theme === "dark" ? "#445069" : "#ffff";
   }, [theme]);
  return (
  <>
  
  <div className="App" id={theme}>
    <Header></Header>
    <UserList></UserList>
    
   
  </div>
  
    </>
      );
}

export default App;
