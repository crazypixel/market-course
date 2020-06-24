import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const Toggle = ({active, toggle}) => {
	const containerRef = useRef(null);
	
	useEffect(() => {
		if (containerRef.current) {
			// const {width, height} = containerRef.current.getBoundingClientRect();
		}
	}, [containerRef]);
	
	return (
		<Container
			ref={containerRef}
			onClick={toggle}
			background={active ? 'green' : '#e0e0e0'}
		>
			<Inner left={active ? 110 : 10}/>
		</Container>
	);
};

export default Toggle;

const Container = styled.div`
	width: 200px;
	height: 100px;
	background: ${({background}) => background};
	border-radius: 10px;
	cursor: pointer;
	position: relative;
	transition: all 500ms;
`;

const Inner = styled.div`
	width: 80px;
	height: 80px;
	background: #444;
	border-radius: 4px;
	position: absolute;
	top: 10px;
	left: ${({left}) => left}px;
	transition: all 500ms;
`;
