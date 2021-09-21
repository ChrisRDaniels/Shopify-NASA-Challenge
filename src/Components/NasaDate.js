import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const NasaDateP = styled.p`
	margin: auto;
	margin-bottom: 5px;
	font-size: 1.5rem;
	font-style: italic;
	font-family: "Shadows Into Light", cursive;

	width: 100%;
`;

const NasaDate = (props) => {
	const [like, setLike] = useState(false);

	return (
		<div>
			<div>
				<NasaDateP>
					<div>
						<p className='date'>Date: {props.date}</p>
					</div>
				</NasaDateP>
				<Button
					onClick={() => setLike((prevLike) => !prevLike)}
					style={{ marginRight: 15 }}
					outline
					color='primary'
					size='md'
				>
					Like: {like ? "❤️" : "🤍"}
				</Button>

				<a href='https://apod.nasa.gov/apod/archivepix.html'>
					<Button outline color='primary' size='md'>
						Past Photos
					</Button>
				</a>
			</div>
			<br></br>
		</div>
	);
};

export default NasaDate;
