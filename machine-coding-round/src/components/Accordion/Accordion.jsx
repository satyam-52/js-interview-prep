import React, { useState } from 'react'

export default function Accordion({accordionData}) {
  const [selectedTitle, setSelectedTitle] = useState("one");
  const handleClick = (e) => {
    if (e.target.classList[0] === "accordion--title") {
      setSelectedTitle(e.target.id);
    }
  }
  return accordionData?.length ? (
    <div className='accordion--wrapper'>
      <div className="accordion--tabs" onClick={handleClick}>
        {accordionData.map((tab => (
          <div className="accordion--tab" key={tab.id}>
            <div className="accordion--title" id={tab.id}>{tab.title}</div>
            {<div className={`accordion--content ${selectedTitle === tab.id ? "active" : ""}`}>{tab.content}</div>}
          </div>
        )))}
      </div>
    </div>
  ) : null
}
