import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory, Link, useLocation} from 'react-router-dom';

const fetchFromServer = () => console.log('fetch...');
const saveInServer = value => {
	console.log('save...')
};

const ShoppingList = props => {
	const history = useHistory();
	const location = useLocation();
	const [items, setItems] = useState(['Milk', 'Eggs']);
	const [value, setValue] = useState('');
	const [mounted, setMounted] = useState(false);
	console.log(location);
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
	
	const navigateToProgress = () => {
		history.push('/progress');
	};
	
	return (
		<Card>
			<Button onClick={navigateToProgress}>Navigate to progress</Button>
			<Link to="/progress">Navigate to progress</Link>
			
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
	);
};

export default ShoppingList;

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

const Button = styled.div`
	width: 100%;
	height: 40px;
	background: #e0e0e0;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
`;
