import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Green = () => {
	return (
		<Container>
			<Link to="/red">go to red</Link>
		</Container>
	);
};

export default Green;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: green;
`;
