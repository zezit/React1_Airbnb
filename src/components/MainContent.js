import React from "react";
import grid_images from "../images/Group 77.png";
import star from "../images/Star 1.svg";
import image1 from "../images/image 12.png";
import image2 from "../images/wedding-photography 1.png";
import image3 from "../images/mountain-bike 1.png";

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
                    <img src={image1} className="capa" />
                    <div className="state-container">
                        <p className="state">sold out</p>
                    </div>
                    <div className="information-container">
                        <div className="avaliation-envolver">
                            <img src={star} className="star" />
                            <span className="avaliation">5.0</span>
                            <span className="other-info">(6)·USA</span>
                        </div>
                        <p>Life lessons with Katie Zaferes</p>
                        <p>
                            <strong>From $136</strong> / person
                        </p>
                    </div>
                </div>
                <div>
                    <img src={image2} className="capa" />
                    <div className="state-container">
                        <p className="state">offline</p>
                    </div>
                    <div className="information-container">
                        <div className="avaliation-envolver">
                            <img src={star} className="star" />
                            <span className="avaliation">5.0</span>
                            <span className="other-info">(30)·USA</span>
                        </div>
                        <p>Learn wedding photography</p>
                        <p>
                            <strong>From $125</strong> / person
                        </p>
                    </div>
                </div>
                <div>
                    <img src={image3} className="capa" />
                    <div className="information-container">
                        <div className="avaliation-envolver">
                            <img src={star} className="star" />
                            <span className="avaliation">4.8</span>
                            <span className="other-info">(2)·USA</span>
                        </div>
                        <p>Group Mountain Biking</p>
                        <p>
                            <strong>From $50</strong> / person
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
