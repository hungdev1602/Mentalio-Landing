import React from 'react'


const Contact = ({ title, content, link }) => {
  return (
    <>
      <div className="">
        <div className="text-base font-[400]" id='question'>{title}</div>

        <a href={link} className="text-xs text-[#00000066] inline-block" id='answer'>{content}</a>
      </div>
    </>
  )
}

export default Contact