import React from "react";
import Card from "./Card";
import grid_images from "../images/Group 77.png";
import data from "../data/data";

export default function MainContent() {
    const elements = data.map((each) => {
        return (
            <Card
                key={each.id}
                {...each}
            />
        );
    });

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
            <section className="sells">{elements}</section>
        </div>
    );
}
