import React from 'react'
import img from './assets/img/photo_1.png'
import img2 from './assets/img/photo_2.png'
const Section1 = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between mt-[33px] sm:mt-[95px]">
        <div className="w-full sm:w-[58%]">
          <h1 className="text-[28px] sm:text-[37px] md:text-[50px] lg:text-[70px] font-bold leading-[100%] unbounded">
            Учись быстрее и легче с <span className="text-[#24AC18]">Mentalio</span>
          </h1>

          <p className="hidden sm:block mt-3 text-[12px] md:text-[18px] lg:text-[29px] leading-[100%] w-[87%] font-primary">Откройте для себя увлекательный и эффективный способ овладения новыми словами и языками. Начните свое обучение уже сегодня!</p>

          <a href="/" className="hidden mt-5 md:mt-[40px] sm:flex items-center justify-center w-[300px] lg:w-[400px] h-[60px] lg:h-[80px] bg-primary text-base md:text-[20px] lg:text-[26px] leading-[100%] text-white rounded-[20px]">Зарегистрироваться</a>

          <img src={img2} alt="" className='w-full h-full sm:hidden mt-[15px]'/>
        </div>

        <div className="flex-1">
          <img src={img} alt="mentalio" className='w-full h-full hidden sm:block'/>
          
          <p className="sm:hidden mt-3 text-[18px] md:text-[18px] lg:text-[29px] leading-[100%] font-primary">Откройте для себя увлекательный и эффективный способ овладения новыми словами и языками. Начните свое обучение уже сегодня!</p>
          <a href="/" className="sm:hidden mt-5 md:mt-[40px] flex items-center justify-center w-[300px] lg:w-[400px] h-[60px] lg:h-[80px] bg-primary text-base md:text-[20px] lg:text-[26px] leading-[100%] text-white rounded-[15px]">Зарегистрироваться</a>
        </div>
      </div>
    </>
  )
}

export default Section1