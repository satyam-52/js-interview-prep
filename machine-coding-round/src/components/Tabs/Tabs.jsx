import React, { useState } from 'react'

export default function Tabs({tabs, defaultTabId}) {
  const [selectedTab, setSelectedTab] = useState(null);
  const handleClick = (e) => {
    setSelectedTab(e.target.id);
  }

  return tabs ? (
    <div className='tabs--wrapper'>
      <div className="tabs--buttons" onClick={handleClick}>
        {tabs.map((tabData) => (
          <span 
          className={`tab--button ${selectedTab === tabData.id ? "active" : ""}`}
          id={tabData.id} 
          key={`tab-button-${tabData.id}`}
          >
            {tabData.placeholder}
          </span>
        ))}
      </div>
      <div className="tabs--content">
        {
          tabs.map(
            (tabData) => selectedTab === tabData.id && 
              <div className="tab-content" key={tabData.id}>{tabData.content}</div>
          )
        }
      </div>
    </div>
  ) : null
}
