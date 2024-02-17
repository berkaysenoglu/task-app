import React from 'react'

import { DetailedUser } from '../components/DetailedUser';
import {useEffect} from 'react';
import Header from '../components/Header';

import { UseThemeContext } from '../contexts/ThemeContext';


export const UserDetail = () => {
        const {theme,toggleTheme} = UseThemeContext();
       useEffect(() => {
         //Tema değiştiğinde body'nin arka plan rengini güncelle
        document.body.style.backgroundColor = theme === "dark" ? "#445069" : "#ffff";
       }, [theme]);

  return (<>
    
        <div className="user-detail" id={theme}>
            <Header></Header>
            <DetailedUser/>
            
        </div>
 

    </>
  )
}
