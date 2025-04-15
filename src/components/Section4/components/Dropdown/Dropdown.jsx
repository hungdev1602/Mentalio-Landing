import React, { useState } from 'react'

const Dropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const firstWord = answer.split(' ')[0]
  const showAnswer = isOpen ? answer : `${firstWord}...`

  return (
    <div className="cursor-pointer" onClick={handleToggle}>
      <div className="text-base font-[400]" id='question'>{question}</div>

      <div className="text-xs text-[#00000066]" id='answer'>{showAnswer}</div>
    </div>
  )
}

export default Dropdown

