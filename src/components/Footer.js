import React from "react";
import "../components/css/footer.css";
import { Link } from "react-router-dom";
import footerImage1 from "../components/images/gallery-01.png";
import footerImage2 from "../components/images/gallery-02.png";
import footerImage3 from "../components/images/gallery-03.jpg";
import footerImage4 from "../components/images/gallery-04.png";
import footerImage5 from "../components/images/gallery-05.jpg";
import footerImage6 from "../components/images/gallery-06.png";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="container">
          <div className="fbox">
            <ul className="links">
              <li>
                <Link>Important link 1</Link>
              </li>
              <li>
                <Link>Important link 2</Link>
              </li>
              <li>
                <Link>Important link 3</Link>
              </li>
              <li>
                <Link>Important link 4</Link>
              </li>
              <li>
                <Link>Important link 5</Link>
              </li>
            </ul>
          </div>
          <div className="fbox">
            <div className="line">
              <div className="info">
                Egypt, Giza ,Inside The Middle Pyramid , Room Name AbdelRahman
              </div>
            </div>
            <div className="line">
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <div className="info">
                <span>01528434341</span>
                <span>01068596163</span>
              </div>
            </div>
          </div>
          <div className="fbox footer-gallery">
            <img src={footerImage5} alt="" />
            <img src={footerImage4} alt="" />
            <img src={footerImage3} alt="" />
            <img src={footerImage4} alt="" />
            <img src={footerImage1} alt="" />
            <img src={footerImage3} alt="" />
            <img src={footerImage2} alt="" />
            <img src={footerImage5} alt="" />
            <img src={footerImage3} alt="" />
            <img src={footerImage6} alt="" />
            <img src={footerImage4} alt="" />
            <img src={footerImage1} alt="" />
            <img src={footerImage1} alt="" />
            <img src={footerImage4} alt="" />
            <img src={footerImage5} alt="" />
          </div>
        </div>
        <p className="copyright">Made With &lt;3 By AbdelRahman</p>
      </div>
    </>
  );
}

export default Footer;
