import React from 'react'
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { SiVk } from "react-icons/si";

const FormEmail = () => {
  return (
    <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] p-5 w-full md:w-[400px] lg:w-[647px] h-[297px] sm:h-[230px]">
      <div className="text-[20px] lg:text-[26px] leading-[100%] font-bold">Подписаться на важные новости</div>

      <form className="mt-5 flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[5px]">
        <input type="text" className="w-full sm:w-[417px] h-[40px] px-[10px] border border-black rounded-[10px] outline-none" placeholder='Email'/>

        <button className="w-full sm:w-auto h-[40px] sm:flex-1 bg-black text-white rounded-[10px] cursor-pointer">Подписаться</button>
      </form>

      {/* Socials */}
      <div className="flex sm:justify-normal justify-between items-center mt-[25px] sm:mt-[20px] gap-[40px] text-[30px] sm:text-[40px]">
        <a href='/'><FaInstagram /></a>
        <a href='/'><SiVk /></a>
        <a href='/'><FaTelegram /></a>
      </div>

      <a href="/" className="text-base mt-5 inline-block">Политика конфедециальности</a>
    </div>
  )
}

export default FormEmail