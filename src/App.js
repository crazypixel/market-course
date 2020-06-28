import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {AppTheme, lightTheme} from '@datorama/app-components';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import sdk from '@datorama/sdk';

// components
import List from './components/List';

// pages
import Run from './components/pages/Run';
import Install from './components/pages/Install';

const App = () => {
	const [session, setSession] = useState(null);
	
	useEffect(() => {
		sdk.init();
		
		sdk.app.onLoad().then(serverSession => {
			setSession(serverSession);
			console.log(serverSession)
			// todo: dispatch action to store in redux store
		});
	}, []);
	
	if (!session) {
		return null;
	}
	
	return (
		<AppTheme theme={lightTheme} provider={ThemeProvider}>
			<Provider store={store}>
				<Router>
					<Container>
						<Switch>
							<Route exact path="/install"><Install/></Route>
							<Route exact path="/run"><Run/></Route>
							<Route exact path="/demo"><Run/></Route>
							
							<Route exact path="/list"><List/></Route>
						</Switch>
					</Container>
				</Router>
			</Provider>
		</AppTheme>
	);
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;
