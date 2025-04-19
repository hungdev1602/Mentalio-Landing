import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Card = ({ article, title, desc, link, height }) => {
  
  return (
    <>
      <div className={`w-auto p-5 bg-[#DEF3DD] rounded-[20px] ${height} relative`}>
        <div className="w-[140px] h-[30px] sm:h-auto flex items-center justify-center unbounded border border-black rounded-[20px] text-sm sm:text-base">{article}</div>

        <div className="text-[20px] sm:text-[26px] font-[600] sm:font-bold leading-[100%] mt-5">{title}</div>

        {
          desc && <div className="text-[18px] leading-[100%] mt-5 font-[400]">{desc}</div>
        }

        <a href={link} className="hidden sm:block absolute sm:left-5 right-5 bottom-5 font-bold text-[14px] sm:text-base leading-[100%]">Подробнее</a>

        <div className="sm:hidden flex items-center gap-[6px] text-[20px] leading-[100%] font-bold absolute sm:left-5 right-5 bottom-5">
          <a href={link} className="font-bold text-[14px] sm:text-base leading-[100%]">Подробнее</a>
          <div className="flex items-center text-[8px] mt-[5px] text-primary">
            <GoDotFill />
            <GoDotFill />
            <GoDotFill />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card