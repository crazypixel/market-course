import React from 'react';
import styled from 'styled-components';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

// components
import Progress from './Progress';
import ShoppingList from './ShoppingList';
import Users from './Users';

const App = () => {
	return (
		<Container>
			<Router>
				<Switch>
					<Route exact path="/">
						<ShoppingList />
					</Route>
					
					<Route exact path="/progress">
						<Progress/>
					</Route>
					
					<Route exact path="/users/:id?">
						<Users />
					</Route>
					
					<Route exact path="*">
						{() => <h1>Not Found</h1>}
					</Route>
				</Switch>
			</Router>
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
