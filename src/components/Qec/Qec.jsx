import React from "react";
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import Topheader from "../Home/topHeader/Topheader";
import "./Qec.css";
import QecDirector from "./QecDirector";
import NavMenu from "../Home/navigationBar/NavMenu";

const Qec = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <div className="qecHead-container">
        <header className="qecIntro-header">
          <div className="qecIntro-text">
            <h1>QEC</h1>
          </div>
        </header>
      </div>
      <section class="Qec-section">
        <div class="Qec-container">
          <div class="Qec-content">
            <h2 class="QecIntro-heading1">WELCOME TO EIMS(QEC):</h2>
            <div class="Qecred-underline"></div>
            <ul class="Qec-list">
              <li>
                <p>
                  The establishment of Quality Enhancement Cell is most
                  important creativity taken by the Higher Education Commission
                  (HEC) of Pakistan for the improvement of quality of higher
                  education in Pakistan.
                </p>
              </li>
              <li>
                <p>
                  The QEC departments are established in the Private and Public
                  Sector Universities and degree awarding Institute in Pakistan
                  and they are working under the direction of Higher Education
                  Commission of Pakistan. The Quality Enhancement Cell (QEC) is
                  established in Emaan Institute of Management & Science Karachi
                  in 2020.
                </p>
              </li>
              <li>
                <p>
                  EIMS track on functioning under the command of Rector Emaan
                  Institute of Management & Sciences Prof:Dr. Nasir u Din Khan.
                  The excessive attention is being given to internal and
                  external quality assurance models and the following structure
                  is in place at Emaan Institute of Management &Science Karachi.
                </p>
              </li>
            </ul>
          </div>
          <div class="Qec-image"></div>
        </div>
      </section>
      <QecDirector />
      <Footer />
    </div>
  );
};

export default Qec;
