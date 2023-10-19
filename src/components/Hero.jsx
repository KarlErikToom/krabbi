import React from "react";
import dinner from "../assets/dinner.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="hero__wrapper">
            <div className="hero__text">
              <h1 className="hero__header">Welcome to resto restoname</h1>
              <h2 className="hero__subheader">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                beatae qui hic sunt corrupti eius, pariatur blanditiis
                doloribus! Iste, aliquid.
              </h2>
              <div className="timetables">
                <div className="timetable">
                    <span className="day">Monday</span>
                    <span className="hours">07:00 - 23:30</span>
                </div>
                <div className="timetable">
                    <span className="day">Tuesday</span>
                    <span className="hours">07:00 - 23:30</span>
                </div>
                <div className="timetable">
                    <span className="day">Wednesday</span>
                    <span className="hours">07:00 - 23:30</span>
                </div>
                <div className="timetable">
                    <span className="day">Thursday</span>
                    <span className="hours">07:00 - 23:30</span>
                </div>
                <div className="timetable">
                    <span className="day">Friday</span>
                    <span className="hours">07:00 - 23:30</span>
                </div>
                <div className="timetable">
                    <span className="day">Saturday</span>
                    <span className="hours">07:00 - 02:00</span>
                </div>
                <div className="timetable">
                    <span className="day">Sunday</span>
                    <span className="hours">Closed</span>
                </div>
              </div>
              <button className="btn">Book a table</button>
            </div>
            <div className="hero__img">
              <img src={dinner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
