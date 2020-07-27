import React from "react";
import "../App.css";
import logo from "../res/LogoBlue.png";
import { Link } from "react-router-dom";
import ShopIcon from "@material-ui/icons/Shop";

export default function Navbar() {
  const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  const logoStyle = {
    width: "8vw",
    height: "7vw",
  };

  return (
    <div>
      <nav>
        <div className="row navbar mx-2 justify-content-start">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="row px-3 mx-3">
              <img src={logo} style={logoStyle} />
              <p className="logoText">VirtuBook</p>
            </div>
          </Link>
          <div className="row mx-3">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p className="navtext">About</p>
            </Link>
          </div>
          <div className="row mx-3">
            <Link to="/solutions" style={{ textDecoration: "none" }}>
              <p className="navtext">Solutions</p>
            </Link>
          </div>
          <div className="row mx-3">
            <a
              href="https://drive.google.com/drive/folders/1liPlsjptOtZyjFrtQP8G_tNFhJTCfJ6h?usp=sharing"
              target="_blank"
            >
              <p className="navtext">Resources</p>
            </a>
          </div>
          <div className="row mx-3">
            <a
              href="https://github.com/danielpmarks/VirtuBookSource"
              target="_blank"
            >
              <p className="navtext">GitHub</p>
            </a>
          </div>
          <div className="row mx-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.VirtuBook.textbook"
              target="_blank"
            >
              <p className="navtext" style={{ fontSize: "2vmin" }}>
                <ShopIcon />
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
