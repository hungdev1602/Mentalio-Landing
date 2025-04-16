import React from 'react'
import Card from './components/Card/Card'
import { GoDotFill } from "react-icons/go";

const Section2 = () => {
  const data = [
    {
      article: "Режимы",
      title: "Флеш-карты для запоминания различных материалов",
      link: "/"
    },
    {
      article: "Каталог",
      title: "Новая ступень обучения",
      link: "/"
    },
    {
      article: "Режимы",
      title: "Режим заучивания карточек это один из основных режимов обучения.",
      desc: "Он помогает пользователю эффективно запоминать информацию с помощью карточек.",
      link: "/"
    },
    {
      article: "Режимы",
      title: "Тест лучший способ проверить свои знания",
      link: "/"
    },
    {
      article: "Папки",
      title: "Эффективный способ систематизации учебного материала",
      link: "/"
    },
  ]
  return (
    <>
      <div className="container mx-auto mt-[90px] lg:mt-[150px]">
        <div className={`text-[18px] lg:text-[46px] lg:text-[68px] leading-[100%] unbounded font-bold`}>Занимайтесь по <br />собственной программе</div>

        <div className="hidden sm:block w-[55%] text-[20px] lg:text-[32px] leading-[100%] mt-5">Сделайте собственную программу, которая поможет учиться эффективнее. Лучшие режимы, преподаватели и платформа ждут тебя.</div>
        <div className="sm:hidden text-[14px] sm:text-[20px] lg:text-[32px] leading-[100%] mt-[15px] sm:mt-5">Сделайте собственную программу, которая поможет учиться эффективнее.</div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] sm:gap-[40px] mt-[30px] sm:mt-10">
          <div className="flex flex-col gap-[25px] sm:gap-[26px]">
            <Card article={data[0].article} title={data[0].title} link={data[0].link} desc={data[0].desc} height={"h-[200px] sm:h-[280px]"}/>
            <Card article={data[1].article} title={data[1].title} link={data[1].link} desc={data[1].desc} height={"h-[225px] sm:h-[320px]"}/>
          </div>

          <div className="flex flex-col justify-between">
            <Card article={data[2].article} title={data[2].title} link={data[2].link} desc={data[2].desc} height={"h-[340px] sm:h-[514px]"}/>

            <div className="hidden lg:flex items-center gap-[10px] text-[20px] leading-[100%] font-bold ">
              Следи за обновлениями 
              <div className="flex items-center text-[8px] mt-[5px] text-primary">
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[25px]">
            <Card article={data[3].article} title={data[3].title} link={data[3].link} desc={data[3].desc} height={"h-[200px] sm:h-[250px]"}/>
            <Card article={data[4].article} title={data[4].title} link={data[4].link} desc={data[4].desc} height={"h-[225px] sm:h-[350px]"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2