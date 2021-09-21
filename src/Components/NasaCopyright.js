import React from "react";
import styled from "styled-components";

const CopyrightP = styled.p`
	margin: 5px;
	font-size: 1.5rem;
	font-style: italic;
	font-family: "Shadows Into Light", cursive;
`;

const NasaCopyright = (props) => {
	return (
		<div>
			<CopyrightP>
				<p className='date'>Photographer &copy; : {props.copyright}</p>
			</CopyrightP>
		</div>
	);
};

export default NasaCopyright;
