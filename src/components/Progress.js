import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

const Progress = () => {
	const [value, setValue] = useState(50);
	const [valid, setValid] = useState(false);
	const add = useCallback(() => setValue(Math.min(100, value + 10)), [value]);
	const sub = useCallback(() => setValue(Math.max(0, value - 10)), [value]);
	
	useEffect(() => {
		setValid(value >= 80)
	}, [value]);
	
	return (
		<Container>
			<Outer>
				<Inner value={value} valid={valid}/>
			</Outer>
			
			<Button onClick={sub}>-</Button>
			<Button onClick={add}>+</Button>
		</Container>
	);
};

export default Progress;

const Container = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Outer = styled.div`
	width: 300px;
	height: 40px;
	background: #e0e0e0;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
`;

const Inner = styled.div`
	position: absolute;
	transition: all 500ms;
	top: 0;
	left: 0;
	width: ${({value}) => `${value}%`};
	height: 40px;
	background: ${({valid}) => valid ? 'green' : 'red'};
`;

const Button = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background: #dadada;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
	font-size: 20px;
`;
