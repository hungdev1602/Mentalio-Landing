import React from 'react'
import FormEmail from './components/FormEmail/FormEmail'
import Dropdown from './components/Dropdown/Dropdown'
import Contact from './components/Contact/Contact'

const Section4 = () => {
  return (
    <div className="container mx-auto mt-[90px] sm:mt-[150px] flex flex-col md:flex-row justify-between items-start gap-[25px] sm:gap-auto">
      <FormEmail />

      <div className="flex flex-col sm:flex-row items-start justify-between md:justify-normal gap-[25px] sm:gap-5 w-full md:w-auto">
        <div className="w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] sm:w-[215px]">
          <div className="w-full p-5 flex flex-col gap-5">
            <div className="text-[26px] leading-[100%] font-bold">О компании</div>
  
            <Dropdown question="Зачем нужен Mentalio?" answer="lkz hfeubue cuahuwoa dhcuahiwqo adojw" />
            <Dropdown question="Наша миссия" answer="lkz hfeubue cuahuwoa dhcuahiwqo adojw" />
            <Dropdown question="Почему мы?" answer="lkz hfeubue cuahuwoa dhcuahiwqo adojw" />
          </div>
        </div>
  
        <div className="w-[263px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] w-full sm:w-auto">
          <div className="p-5 flex flex-col gap-5">
            <div className="text-[26px] leading-[100%] font-bold">О компании</div>
  
            <Contact title={"Почта"} content={"Mentaliosupport@gmail.com"} link={"/"}/>
            <Contact title={"Присоединиться к комьюнити"} content={"Найди любой ответ"} link={"/"}/>
            <Contact title={"Feedback"} content={"Заметили ошибку? Напишите нам!"} link={"/"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
