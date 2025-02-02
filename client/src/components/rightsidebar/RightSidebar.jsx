import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import Widgettag from './Widgettag'
const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Widget/>
      <Widgettag/>
    </aside>
  )
}

export default RightSidebar