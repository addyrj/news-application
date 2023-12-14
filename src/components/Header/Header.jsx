import React from "react";
import header from "./header.scss";
import { Link } from "react-router-dom";
import meta from "../../assets/meta.png";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="nav_main">
          <div className="left">
            <img src={meta} alt="" />
          </div>

          <div className="mid">
            <Link to={"/"}>Home </Link>
            <Link to={"/latest"}>Latest </Link>
            <Link to={"/#news"}>News </Link>
            <Link to={"/#sports"}>Sports </Link>
            <Link to={"/#technology"}>Tech </Link>
            <Link to={"/national"}> National</Link>
            <Link to={"/delhi"}> Delhi</Link>
          </div>

          <div className="search-box">
            <FaSearch />
            <div className="search">
              <input type="text" placeholder="searching..."></input>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
