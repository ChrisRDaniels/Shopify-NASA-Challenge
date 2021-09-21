import React from "react";
import styled from "styled-components";

const ExplanationH3 = styled.h3`
	margin: 10px;
	font-size: 1rem;
	font-style: italic;
	font-family: "Shadows Into Light", cursive;
`;

const ExplanationP = styled.p`
	margin: 10px;
	font-size: .75rem;
	line-height: 1.5;
	font-family: Arial;
	font-family: "Gayathri", sans-serif;
`;

const NasaExplanation = (props) => {
	return (
		<>
			<ExplanationH3>
				<h3>Photo Explanation: </h3>
			</ExplanationH3>
			<ExplanationP>
				<p className='explanation'>{props.explanation}</p>
			</ExplanationP>
		</>
	);
};

export default NasaExplanation;
