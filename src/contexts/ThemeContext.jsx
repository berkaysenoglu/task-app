import { useState, createContext, useContext, useEffect } from "react";

 const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      }

      useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
        }
      },[])
      
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );
}
const UseThemeContext = () => useContext(ThemeContext );
export { ThemeProvider , UseThemeContext };

