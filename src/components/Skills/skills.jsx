import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a passionate and skilled web designer in creating visually
        appending and user-friendly website. I have a strong understanding of
        design and proficient in HTML, CSS and JavaScript, as well as design
        software such as Figma
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This is a demo text, you can write content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
