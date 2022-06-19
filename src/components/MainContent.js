import React from "react";
import grid_images from "../images/Group 77.png";
import star from "../images/Star 1.svg";
import image12 from "../images/image 12.png";

export default function MainContent() {
    return (
        <div>
            <section className="grid-images">
                <img src={grid_images} alt="grid images" />
            </section>
            <section className="some-text">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </section>
            <section className="sells">
                <div>
                    <img src={image12} className="capa"/>
                    <div className="avaliation-envolver">
                        <img src={star} className="star"/>
                        <span className="avaliation">5.0</span>
                        <span className="other-info">(6)·USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p>From $136 / person</p>
                </div>
                <div>
                    <img src={image12} className="capa"/>
                    <div className="avaliation-envolver">
                        <img src={star} className="star"/>
                        <span className="avaliation">5.0</span>
                        <span className="other-info">(6)·USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p>From $136 / person</p>
                </div>
                <div>
                    <img src={image12} className="capa"/>
                    <div className="avaliation-envolver">
                        <img src={star} className="star"/>
                        <span className="avaliation">5.0</span>
                        <span className="other-info">(6)·USA</span>
                    </div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p>From $136 / person</p>
                </div>
            </section>
        </div>
    );
}
