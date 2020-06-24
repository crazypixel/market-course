import React from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';

const Red = () => {
	const params = useParams();
	
	return (
		<Container background={params.hex ? `#${params.hex}` : 'red'}>
			<Link to="/green">go to green</Link>
		</Container>
	);
};

export default Red;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: ${({background})=> background};
`;
