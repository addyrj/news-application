import React, { useEffect, useState } from "react";
import "./homepage.scss";
import MajorArticle from "../../components/MajorArticle/MajorArticle";
import MinorArticle from "../../components/MinorArticle/MinorArticle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeData, fetchNewsApi } from "../../store/news/reducer.js";

// Get:  http://192.168.29.218:4000/home-news
// Get:  http://192.168.29.218:4000/section-news?section=6486b6f27a4d6e845e52c160
// Get:  http://192.168.29.218:4000/single-article?id=648c111d1d7c87ef1aafb32c (edited)

const HomePage = () => {
  const [majorarticle, setmajorarticle] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMajorArticle = async () => {
  //     const response = axios
  //       .get(process.env.REACT_APP_BASE_URL + "/")
  //       .then((response) => {
  //         dispatch(fetchNewsApi());
  //         dispatch(changeData("article"));
  //         console.log(response);
  //         setmajorarticle(response.data);
  //       });
  //   };
  //   fetchMajorArticle();
  // }, []);

  return (
    <div className="mainContent">
      <MajorArticle />
      <MinorArticle />
    </div>
  );
};

export default HomePage;
