import React from 'react';
import "./ArticlePage.scss";
import  Ellipse from "../../assets/Ellipse.png";
import { FiHome } from "react-icons/fi";
import Sidebar from './Sidebar/Sidebar';

function ArticlePage() {
  return (
   
       <div className="container">
      <div className="Article-page">
        <div className="singlePostWrapper">
          <FiHome />  Home | Article 
          <h1 className="Article-title"> Title Page</h1>
          <img
            className="Article-img"
            src="https://images.pexels.com/photos/1194410/pexels-photo-1194410.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Card"
          />
        </div>
        <div className="Article-info">
          <span>
            <h1> <b>This is basic detail of heading</b></h1>
          </span>
          <div className="Logo">
          <img src={Ellipse} alt="" />
          <span> Aditya &nbsp; &nbsp;Date: 22/07/2023:- 4:21pm</span>
          </div>

          <p>jadjdnjknsfdjrjrsnjkasnfHowever, Aurangzeb still did not find much resonance in Maharashtra’s polity till right-wing organisations started painting him as the villain in their Hindu cultural renewal project. Riding that wave of religious and nativist chauvinism was the Shiv Sena.

Once its politics took an anti-Muslim turn, it started openly calling Indian Muslims descendents of Aurangzeb. In seeking to denigrate Aurangzeb, the Sena even tended to refer to him as the colloquial “Aurangya”.

The remnants of forts and monuments marking the long Maratha-Mughal rivalry which dot the state’s landscape were also used by the Sena for its political benefit.</p>
        </div>
        
      </div>
    </div>
  )
}

export default ArticlePage
