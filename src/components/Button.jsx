import React from "react";

import "./Button.css";

//children é para que possamos utilizar como <Nome>children aq dentro</Nome>
const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="button">
			{children} 
		</button>
	);
};

export default Button;