import React from 'react'
import logo from './assets/img/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="container mx-auto pt-[50px]">
      <div className="flex justify-between items-start">
        <div className="w-[40px] sm:w-[70px] aspect-square truncate sm:rounded-none rounded-full">
          <img src={logo} alt="logo" className="w-full h-full object-cover"/>
        </div>

        <nav className="flex gap-[5px] sm:gap-6">
          <a 
            href="/login" 
            className="w-[100px] sm:w-[140px] h-[36px] border border-black rounded-[20px] flex justify-center items-center text-[14px] sm:text-[18px]"
          >
            Вход
          </a>
          <a 
            href="/register" 
            className="w-[120px] sm:w-[140px] h-[36px] bg-[#24AC18] rounded-[20px] flex justify-center items-center text-white text-[14px] sm:text-[18px]"
          >
            Регистрация
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header