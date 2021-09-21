import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
	margin-top: 5px;
	padding: 10px;
	font-family: "Shadows Into Light", cursive;
`;

const TitleH2 = styled.h2`
	font-size: 1rem;
	line-height: 1.25;
	font-family: Arial;
	font-family: "Shadows Into Light", cursive;
`;
const NasaTitle = (props) => {
	return (
		<>
			<TitleH1>
				<h1>NASA Photo of the Day</h1>
			</TitleH1>
			<TitleH2>
				<h2>{props.title}</h2>
			</TitleH2>
		</>
	);
};

export default NasaTitle;
