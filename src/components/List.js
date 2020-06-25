import React, {useState} from 'react';
import styled from 'styled-components';

// utils
import {uuid} from '../utils';

// components
import TextInput from './TextInput';
import Row from './Row';
import EmptyState from './EmptyState';

const List = () => {
	const [items, setItems] = useState([
		{id: uuid(), label: 'Buy Eggs'},
		{id: uuid(), label: 'Learn Redux'},
	]);
	
	const handleSubmit = label => setItems(items.concat({id: uuid(), label}));
	const removeItem = id => setItems(items.filter(item => item.id !== id));
	
	return (
		<Container>
			<Title>My List</Title>
			<TextInput onSubmit={handleSubmit}/>
			
			{!items.length && <EmptyState/>}
			
			{items.map(item => (
				<Row
					key={item.id}
					label={item.label}
					id={item.id}
					onRemove={removeItem}
				/>
			))}
		</Container>
	);
};

export default List;

const Container = styled.div`
  width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background: #ffff;
  border-radius: 4px;
  padding: 20px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07);
`;

const Title = styled.div`
  font-size: 22px;
  color: #444;
  margin-bottom: 20px;
`;
