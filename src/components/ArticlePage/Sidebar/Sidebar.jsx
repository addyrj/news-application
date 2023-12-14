import React from 'react'
import "./sidebar.scss";
import SidebarCard from "../Sidebar/SidebarCard/SidebarCard";

function Sidebar() {
  return (
    
    <div class="Sidebar-container">
      <div class="Heading">
      </div>
      <h1>Heading</h1>
    <SidebarCard />
    <SidebarCard />
    <SidebarCard />
    </div>
  )
}

export default Sidebar;
