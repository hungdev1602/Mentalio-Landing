import React from 'react'
import Card from './components/Card/Card'
import key from './assets/img/key.svg'
import hat from './assets/img/hat.svg'
import img1 from './assets/img/1.png'
import img2 from './assets/img/2.png'
import img3 from './assets/img/3.png'
const Section3 = () => {
  return (
    <>
      <div className="container mx-auto mt-[90px] md:mt-[180px]">
        <div className="text-[22px] whitespace-nowrap sm:text-[40px] md:text-[68px] font-bold unbounded leading-[100%]">Студенты и учителя</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] sm:gap-[40px] mt-[30px] sm:mt-10">
          <div className="flex flex-col gap-[25px]">
            <Card 
              title={"Для студентов"} 
              desc={"Получите доступ к обширной библиотеке курсов, созданных опытными преподавателями."} 
              link={"/"} 
              img={key}
            />
            <img src={img1} alt="image_1" />
          </div>

          <img src={img2} alt="image_2" className="h-full w-full" />

          <div className="flex flex-col gap-[25px]">
            <img src={img3} alt="image_3" />
            <Card 
              title={"Для учителей"} 
              desc={"Создавайте и настраивайте свои собственные курсы, чтобы делиться ими со студентами."} 
              link={"/"} 
              img={hat}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3