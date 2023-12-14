import React from "react";
import "./section.scss";
import SectionBigCard from "../../components/SectionBigCard/SectionBigCard";

const Section = () => {
  return (
    <div className="container">
      <div class="section">
        <SectionBigCard />
        {/* <SectionBigCard />
        <SectionBigCard /> */}
      </div>
    </div>
  );
};

export default Section;

// export default Section;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "./section.scss";

// const cardsData = [
//   {
//     id: 1,
//     title: "Killer",
//     img: "https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     content:
//       "Some quick example text to build on the card title and make up the bulk of the ... Read More",
//   },
//   {
//     id: 2,
//     title: "Killer",
//     img: "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     content:
//       "Some quick example text to build on the card title and make up the bulk of the ... Read More",
//   },
//   {
//     id: 3,
//     title: "Killer",
//     img: "https://images.pexels.com/photos/7266779/pexels-photo-7266779.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     content:
//       "Some quick example text to build on the card title and make up the bulk of the ... Read More",
//   },
// ];
// const Section = () => {
//   return (
//     <div className="container">
//       <h1 className="text-left  text-success my-5">Sections</h1>
//       <div className="row-items">
//         {cardsData.map((card) => (
//           <div className="card1 m-2" key={card.id}>
//             <img src={card.img} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="">{card.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;
