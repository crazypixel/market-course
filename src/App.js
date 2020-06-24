import React, {useState} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import Toggle from './components/Toggle';
import Green from './components/pages/Green';
import Red from './components/pages/Red';

const App = () => {
	const [active, setActive] = useState(false);
	const toggle = () => setActive(!active);
	
	return (
		<Container>
			<Router>
				<Switch>
					<Route exact path="/green"><Green/></Route>
					<Route exact path="/red/:hex?"><Red/></Route>
					<Route exact path="/toggle">
						<Toggle active={active} toggle={toggle} />
					</Route>
					<Route path="*">{() => <h3>Bla!!</h3>}</Route>
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
`;
