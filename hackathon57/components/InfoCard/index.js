import React from "react";
import InfoCardCSS from "../../styles/InfoCard.module.css";

function InfoCard({ title, text, src, text2 }) {
	return (
		<div className={InfoCardCSS.infoCard}>
			<div className={InfoCardCSS.infoCardLeft}>
				<h4>{title}</h4>
				<p>{text}</p>
				<p>{text2}</p>
			</div>
			<div className={InfoCardCSS.infoCardRight}>
				<img src={src} height="300em" width="590em"></img>
			</div>
		</div>
	);
}

export default InfoCard;
