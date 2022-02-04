import React from "react";
import InfoCardCSS from "../../styles/InfoCard.module.css";

function InfoCard({ title, text }) {
	return (
		<div className={InfoCardCSS.infoCard}>
			<h4>{title}</h4>
			<p>{text}</p>
		</div>
	);
}

export default InfoCard;
