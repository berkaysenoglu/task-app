import React from "react";
import { UseThemeContext } from "../contexts/ThemeContext";
import { useEffect } from "react";
import ReactSwitch from "react-switch";
const Header = () => {
  const { theme, toggleTheme } = UseThemeContext();
  useEffect(() => {
    //Tema değiştiğinde body'nin arka plan rengini güncelle
    document.body.style.backgroundColor =
      theme === "dark" ? "#4c4b4d" : "#ffffff";
  }, [theme]);

  return (
    <>
      <header>
        <div className="left-content">Star Wars</div>
        <div className="right-content">
          <div className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
            ></ReactSwitch>
          </div>
          <div className="switch">
            <label>{theme === "light" ? "Light Mode " : "Dark Mode "}</label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
