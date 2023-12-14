import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SectionBigCard.scss";
// import SectionSmallCard from "../SectionSmallCard/SectionSmallCard";



const cardsData = [
  {
    id: 1,
    Heading: "Pm modi arrived in usea he is ",
    img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content:
      "Some quick example text to build on the card title and make up the bulk of the ... Read More",
    btnname: "Read Full Article",
  },
  {
    id: 2,
    Heading: "Killer",
    img: "https://images.pexels.com/photos/7869555/pexels-photo-7869555.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content:
      "Some quick example text to build on the card title and make up the bulk of the ... Read More",
    btnname: "Read Full Article",
  },
  {
    id: 3,
    Heading: "Killer",
    img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content:
      "Some quick example text to build on the card title and make up the bulk of the ... Read More",
    btnname: "Read Full Article",
  },
  {
    id: 4,
    title: "Killer",
    img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content:
      "Some quick example text to build on the card title and make up the bulk of the ... Read More",
    btnname: "Read Full Article",
  },
];






function SectionBigCard() {
  return (
    <>
    <div className="container">
    <h1 className="text-left  text-danger ">SPORTS</h1>
    <div className="SectionBigCard">

      {cardsData.map((card)=>(

       <div className="card_id" key={card.id}>
      <div className="SectionBigCard-imgWrapper">
        <img className="SectionBigCard-img"
          src={card.img}
          alt="Car..."/>
          <div className = "SectionBigCard-info">
        <h3 className="SectionBigCard-info">   {card.Heading} </h3>
          <hr></hr>
        </div>
        </div>
        </div>
          ))}
      </div>
    </div>
    </>
  );
}

export default SectionBigCard;
