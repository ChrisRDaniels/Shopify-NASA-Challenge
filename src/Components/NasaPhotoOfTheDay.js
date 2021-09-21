import React from "react";

const NasaPhotoOfTheDay = (props) => {
	return (
		<>
			<img
				className='nasa-photo'
				alt='NASA Picture of The Day'
				src={props.url}
			/>
		</>
	);
};

export default NasaPhotoOfTheDay;
