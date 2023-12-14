import React from "react";
import "./singlepost.scss";
import { FiShare } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { newsAppselector } from "../../selector";
import { useEffect } from "react";
// import { fetchNewsApi } from "../../Reducer";

function SinglePost() {
  // const newsData = useSelector(newsAppselector);
  const dispatch = useDispatch();

  
  // useEffect(() => {
  //   const fetchMajorArticle = async () => {
    
  //         dispatch(fetchNewsApi());
         
  //   };
  //   fetchMajorArticle();
  // }, [dispatch]);

  return (
    <div className="container">
      <div className="singlepost">
        <div className="singlePostWrapper">
          <FiHome /> Go To Home
          <h1 className="singlePostTitle">This is Title Page for a blog</h1>
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/4348191/pexels-photo-4348191.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Card"
          />
        </div>
        <div className="singlePostInfo">
          <span>
            Author:<b>Addy</b>{" "}
          </span>
          <div className="share">
            <FiShare /> share
          </div>
          <span>Date: 15/07/2023:- 4:21pm</span>

          {/* <p>{newsData}</p> */}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
