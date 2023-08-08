import React from "react";
//include images into your bundle


//create your first component
export default function Counter (num) {
	return (
		<div className="mainBox">
			<div className="box"><i class="fa-regular fa-clock"></i></div>
			<div className="box">{num.num6}</div>
			<div className="box">{num.num5}</div>
			<div className="box">{num.num4}</div>
			<div className="box">{num.num3}</div>
			<div className="box">{num.num2}</div>
			<div className="box">{num.num1}</div>
		</div>
	);
}

