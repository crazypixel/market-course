import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

const fetchFromServer = () => console.log('fetch...');
const saveInServer = value => { console.log('save...')};

const App = () => {
	const [items, setItems] = useState(['Milk', 'Eggs']);
	const [value, setValue] = useState('');
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => {
		fetchFromServer();
	}, []);
	
	useEffect(() => {
		if (mounted) {
			saveInServer(items);
		}
	}, [items, mounted]);
	
	const handleChange = useCallback(e => {
		setValue(e.target.value);
	}, []);
	
	const handleKeyDown = useCallback(event => {
		if (event.which === 13) {
			setItems([...items, value]);
		}
	}, [items, value]);
	
	return (
		<Container>
			<Card>
				<Title>My List</Title>
				<Input
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				
				{
					items.map(item => (
						<Item key={item}>{item}</Item>
					))
				}
			</Card>
		</Container>
	);
};

export default App;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #444;
`;

const Card = styled.div`
	width: 400px;
	min-height: 400px;
	background: #fff;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1``;

const Input = styled.input`
	width: 100%;
	margin-bottom: 40px;
`;

const Item = styled.div`
	width: 100%;
	height: 40px;
	background: #e0e0e0;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-left: 20px;
`;
