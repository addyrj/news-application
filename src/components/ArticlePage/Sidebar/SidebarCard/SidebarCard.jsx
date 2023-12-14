import React from "react";
import "./SidebarCard.scss";
import Ellipse from "../../../../assets/Ellipse.png";

function SidebarCard() {
  return (
    <div className="SidebarCard">
      <img
        className="SidebarCard-img"
        src="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Card"
      />
      <div className="SidebarCard-rap">

      <h3 className="SidebarCard-text">
        News for the heading page and article
      </h3>
      <div className="Logo">
        <img src={Ellipse} alt="" />
        <span> Aditya</span>
      </div>
      </div>
    </div>
  );
}

export default SidebarCard;
