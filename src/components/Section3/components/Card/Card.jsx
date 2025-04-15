import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Card = ({ title, desc, link, img }) => {
  return (
    <>
      <div className={`w-auto p-5 bg-[#DEF3DD] rounded-[20px] h-[203px] sm:h-[349px] relative`}>
        <div className="text-[20px] sm:text-[26px] font-[600] sm:font-bold leading-[100%] mt-5">{title}</div>

        {desc && <div className="text-[18px] leading-[100%] mt-[20px] sm:mt-10">{desc}</div>}

        <a href={link} className="hidden sm:flex items-center justify-between absolute sm:left-5 right-5 bottom-10 font-bold text-[14px] sm:text-base rounded-[20px] leading-[100%] w-[80%] xl:w-[400px] h-[80px] bg-primary text-white px-5">
          Получить доступ
          <img src={img} alt={title} />
        </a>

        <div className="sm:hidden flex items-center gap-[3px] text-[20px] leading-[100%] font-bold absolute sm:left-5 right-5 bottom-5">
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