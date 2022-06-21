import React from "react";
import star from "../images/Star 1.svg";

export default function Card(props) {
    let badgeText;

    if (props.openSpots === 0) {
        badgeText = "sold out";
    } else if (props.location === "Online") {
        badgeText = "online";
    }

    return (
        <div className="card">
            {badgeText && (
                <div className="state-container">
                    <p className="state">{badgeText}</p>
                </div>
            )}
            <img src={`../images/` + props.image} className="capa" />
            <div className="information-container">
                <div className="avaliation-envolver">
                    <img src={star} className="star" />
                    <span className="avaliation">{props.stats.rating}</span>
                    <span className="other-info">
                        ({props.stats.reviewCount})·{props.location}
                    </span>
                </div>
                <p>{props.title}</p>
                <p>
                    <strong>From ${props.price}</strong> / person
                </p>
            </div>
        </div>
    );
}
